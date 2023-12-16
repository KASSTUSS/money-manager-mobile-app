import { ReactNode, useState, useEffect } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { COLORS, categoriesColors } from "../../constants/colors";
import formatDate from "../../utils/formatDate";
import { TransactionBlockProps } from "./types";
import { Image } from "react-native-svg";
import SvgIcon from "../SvgIcon";
import { ICON_NAMES } from "../../constants/iconNames";




export default function TransactionBlock({
    value,
    currency,
    date,
    category,
    icon,
    accountTitle,
    accountGradient,
    categoryColorIndex,
    onPress,
}: TransactionBlockProps): ReactNode {

    const titleDate = formatDate(date);

    return (
        <TouchableOpacity onPress={onPress} style={styles.transactionContainer}>
            <View style={styles.transactionIconContainer}>
                <View style={[styles.transactionIconCircle, {
                    backgroundColor: categoriesColors[categoryColorIndex],
                }]}>
                    <SvgIcon iconName={icon} size={28} color="#000" />
                </View>
            </View>
            <View style={styles.transactionContent}>
                <View style={styles.transactionTitleGroup}>
                    <Text style={styles.transactionCategoryTitle}>
                        {category}
                    </Text>
                    <LinearGradient
                        style={styles.accountBadge}
                        colors={accountGradient}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                    >
                        <Text style={styles.accountName}>
                            {accountTitle}
                        </Text>
                    </LinearGradient>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={[styles.transactionValue, {
                        color: value >= 0 ? COLORS.TRANSACTION_GREEN : COLORS.TRANSACTION_RED,
                    }]}>{`${value > 0 ? '+' : ''}${value} ${currency}`}</Text>
                    <Text style={styles.transactionDate}>{titleDate}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}