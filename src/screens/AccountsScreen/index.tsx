import { ReactNode } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import AccountBlock from '../../components/AccountBlock';
import CreateNewAccountButton from '../../components/CreateNewAccountButton';
import { colorsGradients } from '../../constants/colors';
import SelectAllButton from '../../components/SelectAllButton';
import WidgetContainer from '../../components/WidgetContainer';
import BalanceTrendChart from '../../components/BalanceTrendChart';
import ExpencesStructureChart from '../../components/ExpencesStructureChart';


export default function AccountScreen(): ReactNode {
  return (
    <ScrollView style={styles.scrollContainer}>
      
      <StatusBar />
    </ScrollView>
  );
}