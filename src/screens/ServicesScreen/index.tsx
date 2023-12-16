import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import ServiceButton from '../../components/ServiceButton';
import { ICON_NAMES } from '../../constants/iconNames';
import { COLORS_SERVICES } from '../../constants/colors';

export default function ServicesScreen(): ReactNode {
  return (
    <View>
      <View style={styles.servicesContainer}>
        <ServiceButton
          title='Статистика'
          icon={ICON_NAMES.STATISTICS_APP}
          fill
          onPress={() => {}}
        />
        <ServiceButton
          title='Копилка'
          icon={ICON_NAMES.MONEY_BOX_APP}
          color={COLORS_SERVICES.MONEY_BOX}
          onPress={() => { }}
        />
        <ServiceButton
          title='Курсы валют'
          icon={ICON_NAMES.CURRENCY_RATES_APP}
          color={COLORS_SERVICES.CURRENCY_RATES}
          onPress={() => { }}
        />
      </View>
      <StatusBar />
    </View>
  );
}