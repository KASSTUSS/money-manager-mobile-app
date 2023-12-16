import { ReactNode } from "react";
import { TransactionsGroupContainerProps } from "./types";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../constants/colors";
import formatDate from "../../utils/formatDate";




export default function TransactionsGroupContainer({ children, sum, currency, date }: TransactionsGroupContainerProps): ReactNode {

    const titleDate = formatDate(date);

    return (
        <View style={styles.transactionsGroupContainer}>
            <View style={styles.transactionsGroupTitle}>
                <Text style={[styles.transactionsGroupTitleDate, {
                    color: sum >= 0 ? COLORS.TRANSACTIONS_GROUP_GREEN : COLORS.TRANSACTIONS_GROUP_RED,
                }]}>{titleDate}</Text>
                <Text style={[styles.transactionsGroupTitleValue, {
                    color: sum >= 0 ? COLORS.TRANSACTIONS_GROUP_GREEN : COLORS.TRANSACTIONS_GROUP_RED,
                }]}>({`${sum > 0 ? '+' : '-'}${sum} ${currency}`})</Text>
            </View>
            <View style={styles.transactionsContainer}>
                {children}
            </View>
        </View>
    )
}