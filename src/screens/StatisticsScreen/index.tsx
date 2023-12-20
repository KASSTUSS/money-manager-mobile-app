import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import WidgetContainer from '../../components/WidgetContainer';
import ExpencesStructureChart from '../../components/ExpencesStructureChart';
import BalanceTrendChart from '../../components/BalanceTrendChart';

export default function StatisticsScreen(): ReactNode {
  return (
    <View>
      <View>
        <View style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          padding: 25,
          paddingBottom: 110,
        }}>
          <WidgetContainer title='График изменения баланса'>
            <BalanceTrendChart
              balanceData={[
                150.50, 200.50, 234.55, 450.75, 785.07,
              ]}
              labels={['11.12', '12.12', '13.12', '14.12', '15.12']}
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
      </View>
      <StatusBar />
    </View>
  );
}