import React, { ReactNode, useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import HeaderScreen from '../../components/Header';
import SvgIcon from '../../components/SvgIcon';
import { TextInput } from 'react-native-paper';

import { ROUTES, SCREENS_TITLE } from '../../constants/routes';
import { ICON_NAMES } from '../../constants/iconNames';
import { COLORS } from '../../constants/colors';

import { styles } from './styles';
import createNewAccount from '../../services/createNewAccount';


export default function AddAccountScreen(): ReactNode {

  const navigation = useNavigation();
  
  const [nameAccount, setNameAccount] = useState("");
  const [balance, setBalance] = useState("");

  function handleAddAccount() {
    const readyData = {
      account_name: nameAccount.toString(),
      color_scheme: 1,
      balance: balance.trim() ? parseFloat(balance) : 0.0,
    }

    createNewAccount(readyData, () => {
      navigation.navigate(ROUTES.ACCOUNTS);
    })
  }


  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderScreen backButton title={SCREENS_TITLE.ADD_ACCOUNT} buttons={[
          <TouchableOpacity onPress={handleAddAccount}>
            <SvgIcon iconName={ICON_NAMES.CHECK} color={COLORS.MAIN} size={22} />
          </TouchableOpacity>
        ]} />
      ),
    });
  }, [navigation, nameAccount, balance]);
  return (
    <View style={styles.addAccountContainer}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          label="Имя счета"
          value={nameAccount}
          keyboardType='default'
          onChangeText={date => setNameAccount(date)}
        />
        <TextInput
          style={styles.input}
          label="Начальный баланс"
          value={balance}
          keyboardType='number-pad'
          onChangeText={date => setBalance(date)}
        />
      </View>
      <StatusBar />
    </View>
  );
}