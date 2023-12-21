import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import WidgetContainer from '../../components/WidgetContainer';
import ExpencesStructureChart from '../../components/ExpencesStructureChart';
import BalanceTrendChart from '../../components/BalanceTrendChart';
import { TTransactions } from '../../services/getAllTransactions/types';
import { useFocusEffect } from '@react-navigation/native';
import getAllTransactions from '../../services/getAllTransactions';
import { TBalances, fillMissingDates } from '../../utils/fillMissingDates';
import selectIntermediateElemens from '../../utils/selectIntermediateElemens';
import { styles } from './styles';
import { combineCategoriesSum } from '../../utils/combineCategoriesSum';
import { categories } from '../../constants/categories';
import { COLORS } from '../../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';

export default function StatisticsScreen(): ReactNode {

  const [transactions, setTransactions] = useState<TTransactions>([]);
  const [balances, setBalances] = useState<TBalances>([]);

  useFocusEffect(
    useCallback(() => {
      getAllTransactions(setTransactions);
    }, [])
  );

  useEffect(() => {
    if (transactions.length > 1) {
      setBalances(fillMissingDates(transactions));
    }
  }, [transactions])


  return (
    <View>
      <ScrollView>
        <View style={styles.chartsContainer}>
          
          {
            balances.length != 0 && (
              <>
                <Text style={styles.chartsTitle}>Статистика за последние 30 дней</Text>
                <WidgetContainer title='График изменения баланса'>
                  <BalanceTrendChart
                    balanceData={balances.map(balance => balance.balance)}
                    labels={selectIntermediateElemens<string>(balances.map(balance => balance.date.slice(0, 5)))}
                    currency='BYN'
                  />
                </WidgetContainer>
                {
                  transactions.some(transaction => transaction.type_transaction === "-") && (
                    <WidgetContainer title='Структура расходов'>
                      <ExpencesStructureChart
                        operationsType='-'
                        expencesStructureData={
                          combineCategoriesSum(transactions, '-').map(category => category.category_id == 0 ? ({
                            name: 'Другое',
                            sum: category.sum,
                            color: '#757575',
                            legendFontColor: "#7F7F7F",
                            legendFontSize: 11
                          }) : ({
                            name: categories.find(c => c.id === category.category_id)?.name || '?',
                            sum: category.sum,
                            color: categories.find(c => c.id === category.category_id)?.color || COLORS.MAIN,
                            legendFontColor: "#7F7F7F",
                            legendFontSize: 11
                          }))}
                      />
                    </WidgetContainer>
                  )
                }
                {
                  transactions.some(transaction => transaction.type_transaction === "+") && (
                    <WidgetContainer title='Структура доходов'>
                      <ExpencesStructureChart
                        operationsType='+'
                        expencesStructureData={
                          combineCategoriesSum(transactions, '+').map(category => category.category_id == 0 ? ({
                            name: 'Другое',
                            sum: category.sum,
                            color: '#757575',
                            legendFontColor: "#7F7F7F",
                            legendFontSize: 11
                          }) : ({
                            name: categories.find(c => c.id === category.category_id)?.name || '?',
                            sum: category.sum,
                            color: categories.find(c => c.id === category.category_id)?.color || COLORS.MAIN,
                            legendFontColor: "#7F7F7F",
                            legendFontSize: 11
                          }))}
                      />
                    </WidgetContainer>
                  )
                }
                
              </>
            )
          }
        </View>
      </ScrollView>
      <StatusBar />
    </View>
  );
}