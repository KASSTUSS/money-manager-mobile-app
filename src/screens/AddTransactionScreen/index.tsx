import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import HeaderScreen from '../../components/Header';
import SelectTypeTransaction from '../../components/SelectTypeTransaction';
import SvgIcon from '../../components/SvgIcon';
import CreateNewAccountButton from '../../components/CreateNewAccountButton';

import { ROUTES, SCREENS_TITLE } from '../../constants/routes';
import { ICON_NAMES } from '../../constants/iconNames';
import { COLORS } from '../../constants/colors';
import { TextInput } from 'react-native-paper';
import DropdownSelect from 'react-native-input-select';

import { categories } from '../../constants/categories';
import DatePicker from '../../components/DatePicker';
import { formatDateToDDMMYYYY } from '../../utils/formatDate';

import getAllAccounts from '../../services/getAllAccounts';
import { TAccounts } from '../../services/getAllAccounts/types';
import createNewTransaction from '../../services/createNewTransaction';
import { styles } from './styles';


export default function AddTransactionScreen(): ReactNode {

  const navigation = useNavigation();
  const [text, setText] = useState("0");
  const [date, setDate] = useState<Date>(new Date());
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [transactionType, setTransactionType] = useState("-");
  const [accounts, setAccounts] = useState<TAccounts>([]);
  const [selectedAccount, setSelectedAccount] = useState(null);

  useFocusEffect(
    useCallback(() => {
      getAllAccounts(setAccounts)
    }, [])
  );


  function handleAddTransaction() {
    const readyData = {
      sum: text ? parseFloat(parseFloat(text.toString()).toFixed(2)) : 0,
      date: formatDateToDDMMYYYY(date),
      type_transaction: transactionType,
      category_id: selectedCategory || categories[0].id,
      account_id: selectedAccount || accounts[0].id,
    }

    console.log(readyData);

    createNewTransaction(readyData, () => {
      navigation.navigate(ROUTES.TRANSACTIONS);
    });
  }


  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderScreen backButton title={SCREENS_TITLE.ADD_TRANSACTION} buttons={[
          <TouchableOpacity onPress={handleAddTransaction}>
            <SvgIcon iconName={ICON_NAMES.CHECK} color={COLORS.MAIN} size={22} />
          </TouchableOpacity>
        ]} />
      ),
    });
  }, [navigation, text, date, selectedCategory, transactionType]);
  
  return (
    accounts.length === 0 ? 
    (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          К сожалению, вы не можете создать запись, так как у вас нет счета! Пожалуйста, создайте счет!
        </Text>
        <CreateNewAccountButton onPress={() => {
            navigation.navigate(ROUTES.ADD_ACCOUNT);
        }}/>
      </View>
    ) : 
    (
      <View style = {styles.addTransactionContainer}>
        <View style={styles.formContainer}>
          <SelectTypeTransaction onValueChange={(value) => {
            setTransactionType(value);
            setSelectedCategory(null);
          }} />
          <TextInput
            style={styles.input}
            label="Сумма"
            value={text}
            keyboardType='number-pad'
            onChangeText={text => setText(text)}
          />
          <DropdownSelect
            label={`Выберите счет`}
            placeholder="Выберите счет..."
            options={accounts.map(account => ({ value: account.id, label: account.account_name }))}
            onValueChange={(itemValue: any) => setSelectedAccount(itemValue)}
            selectedValue={selectedAccount}
            isMultiple={false}
            isSearchable
          />
          <DropdownSelect
            label={`Выберите категорию ${transactionType == "+" ? 'доходов' : 'расходов'}`}
            placeholder="Выберите категорию транзакции..."
            options={categories.filter(category => category.transactionType == transactionType).map(category => ({ value: category.id, label: category.name }))}
            onValueChange={(itemValue: any) => setSelectedCategory(itemValue)}
            selectedValue={selectedCategory}
            isMultiple={false}
            isSearchable
          />
          <DatePicker
            label={'Дата'}
            onChange={setDate}
          />
        </View>
        <StatusBar />
      </View >
    )
  );
}