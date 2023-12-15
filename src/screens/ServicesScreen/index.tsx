import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ServicesScreen(): ReactNode {
  return (
    <View>
      <View>
        <Text>Инструменты</Text>
      </View>
      <StatusBar />
    </View>
  );
}