import { ReactNode } from "react";
import { View, Text, Dimensions } from 'react-native';
import { styles } from "./styles";
import { ExpencesStructureChartProps } from "./types";
import { PieChart } from "react-native-chart-kit";
import { COLORS } from "../../constants/colors";


export default function ExpencesStructureChart({ expencesStructureData }: ExpencesStructureChartProps): ReactNode {

    return (
        <View style={styles.chartContainer}>
            <View style={styles.currentBalanceTextContainer}>
                <Text style={styles.currentBalanceTextLabel}>Сумма расходов</Text>
                <Text style={styles.currentBalanceTextValue}>-110.07 BYN</Text>
            </View>
            <PieChart
                data={expencesStructureData}
                width={Dimensions.get("screen").width - 90}
                height={175}
                accessor={"sum"}
                chartConfig={{
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                }}
                backgroundColor={"transparent"}
                paddingLeft={"-15"}
                center={[10, 0]}
            />
        </View>
    )
}