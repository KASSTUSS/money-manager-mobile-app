import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function TransactionsScreen(): ReactNode {
  return (
    <View>
      <View>
        <Text>Записи</Text>
      </View>
      <StatusBar />
    </View>
  );
}