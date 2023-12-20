import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import {
    Text,
    SafeAreaView,
    Pressable,
    View,
} from "react-native";
import SvgIcon from "../SvgIcon";
import { ICON_NAMES } from "../../constants/iconNames";
import { TextInput } from "react-native-paper";

export default function DatePicker({ label, onChange }) {
    const [date, setDate] = useState(new Date());
    const [shownPicker, setShownPicker] = useState(false);

    function onChangePicker({ type }, selectedDate) {
        const currentDate = selectedDate || date;
        setShownPicker(false);
        onChange(currentDate);
        setDate(currentDate);
    }

    return (
        <>
            <Pressable
                style={{
                    width:'100%',
                }}
                onPress={() => {
                    setShownPicker(true);
                }}
            >
                <TextInput
                    style={{
                        width: '100%',
                    }}
                    label="Дата"
                    keyboardType='number-pad'
                    value={date.toLocaleDateString()}
                    editable={false}
                    placeholder={date.toLocaleDateString()}
                />
            </Pressable>
            {shownPicker && (
                <RNDateTimePicker mode="date" value={date} onChange={onChangePicker} />
            )}
        </>
    );
}