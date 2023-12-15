import { ReactNode } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import AccountBlock from '../../components/AccountBlock';
import CreateNewAccountButton from '../../components/CreateNewAccountButton';
import { colorsGradients } from '../../constants/colors';
import SelectAllButton from '../../components/SelectAllButton';
import WidgetContainer from '../../components/WidgetContainer';
import BalanceTrendChart from '../../components/BalanceTrendChart';
import ExpencesStructureChart from '../../components/ExpencesStructureChart';


export default function AccountScreen(): ReactNode {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.accountGroups}>
        <View style={styles.accountGroup}>
          <Text style={styles.accountGroupTitle}>Обычные счета - 242.11 BYN</Text>
          <View style={styles.accountsContainer}>
            <AccountBlock title='Личные' value='242.11 BYN' onPress={() => { }} onLongPress={() => { }} colorsGradient={colorsGradients[0]} focused={true} />
            <CreateNewAccountButton onPress={() => { }} />
          </View>
        </View>
        <View style={styles.accountGroup}>
          <Text style={styles.accountGroupTitle}>Накопительные счета - 502.50 BYN</Text>
          <View style={styles.accountsContainer}>
            <AccountBlock title='Личные' value='242.11 BYN' onPress={() => { }} onLongPress={() => { }} colorsGradient={["#f300f3", "#f3f300"]} focused={false} />
            <AccountBlock title='Личные' value='242.11 BYN' onPress={() => { }} onLongPress={() => { }} colorsGradient={["#f300f3", "#f3f300"]} focused={false} />
            <AccountBlock title='Личные' value='242.11 BYN' onPress={() => { }} onLongPress={() => { }} colorsGradient={["#f300f3", "#f3f300"]} focused={false} />
            <CreateNewAccountButton onPress={() => { }} />
          </View>
        </View>
        <SelectAllButton onPress={() => {}}/>
      </View>
      <View style={styles.statisticsContainer}>
        <WidgetContainer title='График изменения баланса'>
          <BalanceTrendChart 
            balanceData={[
               150.50, 200.50, 234.55, 450.75, 785.07,
            ]}
            labels={[ '11.12', '12.12', '13.12', '14.12', '15.12']}
            currency='BYN'
          />
        </WidgetContainer>
        <WidgetContainer title='Структура расходов'>
          <ExpencesStructureChart 
            expencesStructureData={[
              {
                name: "Продукты",
                sum: 56,
                color: "rgba(131, 167, 234, 1)",
                legendFontColor: "#7F7F7F",
                legendFontSize: 11
              },
              {
                name: "Покупки",
                sum: 25,
                color: "#B4983D",
                legendFontColor: "#7F7F7F",
                legendFontSize: 11
              },
              {
                name: "Кафе, рестораны",
                sum: 22,
                color: "red",
                legendFontColor: "#7F7F7F",
                legendFontSize: 11
              },
              {
                name: "Топливо",
                sum: 10,
                color: "#f0f0f0",
                legendFontColor: "#7F7F7F",
                legendFontSize: 11
              },
              {
                name: "Другое",
                sum: 7,
                color: "#c0c0c0",
                legendFontColor: "#7F7F7F",
                legendFontSize: 11
              }
            ]}
          />
        </WidgetContainer>
      </View>
      <StatusBar />
    </ScrollView>
  );
}