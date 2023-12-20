import { ReactNode, useState, useEffect } from "react";
import { SelectTypeTransactionProps } from "./types";
import { Pressable, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { styles } from "./styles";


export default function SelectTypeTransaction({ onValueChange }: SelectTypeTransactionProps): ReactNode {
    const [value, setValue] = useState('-');

    return (
        <RadioButton.Group onValueChange={newValue => {
            setValue(newValue);
            onValueChange(newValue);
        }} value={value}>
            <View style={styles.selectContainer}>
                <View>
                    <Text>Расход</Text>
                    <RadioButton value="-" />
                </View>
                <View>
                    <Text>Доход</Text>
                    <RadioButton value="+" />
                </View>
            </View>
        </RadioButton.Group>
    );
};