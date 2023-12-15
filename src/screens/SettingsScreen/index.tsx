import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SettingsScreen(): ReactNode {
  return (
    <View>
      <View>
        <Text>Настройки</Text>
      </View>
      <StatusBar />
    </View>
  );
}