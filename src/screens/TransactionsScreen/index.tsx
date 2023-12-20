import React, { ReactNode, useCallback, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFocusEffect } from '@react-navigation/native';

import TransactionsGroupContainer from '../../components/TransactionsGroupContainer';
import TransactionBlock from '../../components/TransactionBlock';

import { styles } from './styles';
import { colorsGradients } from '../../constants/colors';
import { ICON_NAMES } from '../../constants/iconNames';
import { categories } from '../../constants/categories';
import { parseDDMMYYYYToDate } from '../../utils/formatDate';
import getAllTransactions from '../../services/getAllTransactions';
import { TTransactions } from '../../services/getAllTransactions/types';


export default function TransactionsScreen(): ReactNode {

  const [transactions, setTransactions] = useState<TTransactions>([]);

  useFocusEffect(
    useCallback(() => {
      getAllTransactions(setTransactions);
    }, [])
  );

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.transactionsContainer}>
        <TransactionsGroupContainer sum={0} currency='BYN' date={new Date()}>
          {transactions.map(transaction => (
            <TransactionBlock
              key={transaction.id}
              value={parseFloat(`${transaction.type_transaction}${transaction.sum}`)}
              currency='BYN'
              date={parseDDMMYYYYToDate(transaction.date)}
              category={
                categories.find(value => value.id == transaction.category_id)?.name 
                || 'Неизвестная категория'}
              icon={ICON_NAMES.CATEGORY_FOOD}
              accountTitle={transaction.account_name}
              accountGradient={colorsGradients[transaction.color_scheme]}
              categoryColorIndex={15}
              onPress={() => { }}
            />
          ))}
        </TransactionsGroupContainer>
      </View>
      <StatusBar />
    </ScrollView>
  );
}