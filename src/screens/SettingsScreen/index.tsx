import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Button } from 'react-native-paper';
import { deleteFromTables } from '../../db/tablesDB';
import { COLORS } from '../../constants/colors';

export default function SettingsScreen(): ReactNode {

  const resetDataClickHandle = () => {
    deleteFromTables();
  }

  return (
    <View>
      <View style={styles.settingsContainer}>
        <Button onPress={resetDataClickHandle} mode='contained' buttonColor={COLORS.MAIN}>Сбросить данные</Button>
      </View>
      <StatusBar />
    </View>
  );
}