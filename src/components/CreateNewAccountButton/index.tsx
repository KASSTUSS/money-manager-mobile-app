import { ReactNode } from "react";
import { CreateNewAccountButtonProps } from "./types";
import { TouchableOpacity, Text } from 'react-native';
import { styles } from "./styles";
import SvgIcon from "../SvgIcon";
import { ICON_NAMES } from "../../constants/iconNames";
import { COLORS } from "../../constants/colors";


export default function CreateNewAccountButton({ onPress }: CreateNewAccountButtonProps): ReactNode {

    return (
        <TouchableOpacity onPress={onPress} style={styles.createAccountButton}>
            <Text style={styles.createAccountButtonText}>НОВЫЙ СЧЕТ</Text>
            <SvgIcon iconName={ICON_NAMES.PLUS} color={COLORS.MAIN} size={20} />
        </TouchableOpacity>
    )
}