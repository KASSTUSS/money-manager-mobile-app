import { ReactNode } from "react";
import { View, Text, Dimensions } from 'react-native';
import { styles } from "./styles";
import { BalanceTrendChartProps } from "./types";
import { LineChart } from "react-native-chart-kit";
import { COLORS } from "../../constants/colors";


export default function BalanceTrendChart({ labels, balanceData }: BalanceTrendChartProps): ReactNode {

    return (
        <View style={styles.chartContainer}>
            <View style={styles.currentBalanceTextContainer}>
                <Text style={styles.currentBalanceTextLabel}>Сегодня</Text>
                <Text style={styles.currentBalanceTextValue}>{balanceData.at(-1)?.toFixed(2)} BYN</Text>
            </View>
            <LineChart
                data={{
                    labels: labels,
                    datasets: [
                        {
                            data: balanceData
                        }
                    ],
                }}
                width={Dimensions.get("screen").width - 90}
                withDots={false}
                height={175}
                yLabelsOffset={10}
                
                xLabelsOffset={-1}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: COLORS.MAIN,
                    backgroundGradientFrom: COLORS.CHART_GRADIRNT_FROM,
                    backgroundGradientTo: COLORS.CHART_GRADIRNT_TO,
                    
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
                
            />
        </View>
    )
}