import React, { ReactNode, useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFocusEffect } from '@react-navigation/native';
import { ROUTES } from '../../constants/routes';
import uuid from 'react-uuid';

import { styles } from './styles';
import { colorsGradients } from '../../constants/colors';

import AccountBlock from '../../components/AccountBlock';
import CreateNewAccountButton from '../../components/CreateNewAccountButton';

import getAllAccounts from '../../services/getAllAccounts';
import { TAccounts } from '../../services/getAllAccounts/types';


export default function AccountsScreen({navigation}: any): ReactNode {

  const [accounts, setAccounts] = useState<TAccounts>([]);

  useFocusEffect(
    React.useCallback(() => {
      getAllAccounts(setAccounts);
    }, [])
  );
  
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.accountGroups}>
        <View style={styles.accountGroup}>
          <View style={styles.accountsContainer}>
            {
              accounts.map(account => (
                <AccountBlock
                  key={uuid()}
                  title={account.account_name}
                  value={`${account.balance} BYN`}
                  onPress={() => { }}
                  onLongPress={() => { }}
                  colorsGradient={colorsGradients[account.color_scheme]}
                  focused={true} />
              ))
            }
            <CreateNewAccountButton onPress={() => {
              navigation.navigate(ROUTES.ADD_ACCOUNT)
            }} />
          </View>
        </View>
      </View>
      <StatusBar />
    </ScrollView>
  );
}