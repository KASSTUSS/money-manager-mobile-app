import { ReactNode } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import TransactionsGroupContainer from '../../components/TransactionsGroupContainer';
import TransactionBlock from '../../components/TransactionBlock';
import { colorsGradients } from '../../constants/colors';
import { ICON_NAMES } from '../../constants/iconNames';

export default function TransactionsScreen(): ReactNode {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.transactionsContainer}>
        <TransactionsGroupContainer sum={12.50} currency='BYN' date={new Date()}>
          <TransactionBlock 
            value={-12.5}
            currency='BYN'
            date={new Date()}
            category='Продукты'
            icon={ICON_NAMES.CATEGORY_FOOD}
            accountTitle='Личные'
            accountGradient={colorsGradients[0]}
            categoryColorIndex={9}
          />
          <TransactionBlock
            value={25}
            currency='BYN'
            date={new Date()}
            category='Продукты'
            icon={ICON_NAMES.CATEGORY_FOOD}
            accountTitle='Личные'
            accountGradient={colorsGradients[0]}
            categoryColorIndex={9}
          />
        </TransactionsGroupContainer>
        <TransactionsGroupContainer sum={12.50} currency='BYN' date={new Date()}>
          <TransactionBlock
            value={-12.5}
            currency='BYN'
            date={new Date()}
            category='Продукты'
            icon={ICON_NAMES.CATEGORY_FOOD}
            accountTitle='Личные'
            accountGradient={colorsGradients[0]}
            categoryColorIndex={9}
          />
          <TransactionBlock
            value={25}
            currency='BYN'
            date={new Date()}
            category='Продукты'
            icon={ICON_NAMES.CATEGORY_FOOD}
            accountTitle='Личные'
            accountGradient={colorsGradients[0]}
            categoryColorIndex={9}
          />
          <TransactionBlock
            value={25}
            currency='BYN'
            date={new Date()}
            category='Продукты'
            icon={ICON_NAMES.CATEGORY_FOOD}
            accountTitle='Личные'
            accountGradient={colorsGradients[0]}
            categoryColorIndex={9}
          />

          <TransactionBlock
            value={25}
            currency='BYN'
            date={new Date()}
            category='Продукты'
            icon={ICON_NAMES.CATEGORY_FOOD}
            accountTitle='Личные'
            accountGradient={colorsGradients[0]}
            categoryColorIndex={9}
          />
        </TransactionsGroupContainer>
        <TransactionsGroupContainer sum={12.50} currency='BYN' date={new Date()}>
          <TransactionBlock
            value={-12.5}
            currency='BYN'
            date={new Date()}
            category='Продукты'
            icon={ICON_NAMES.CATEGORY_FOOD}
            accountTitle='Личные'
            accountGradient={colorsGradients[0]}
            categoryColorIndex={9}
          />
          <TransactionBlock
            value={-12.5}
            currency='BYN'
            date={new Date()}
            category='Продукты'
            icon={ICON_NAMES.CATEGORY_FOOD}
            accountTitle='Личные'
            accountGradient={colorsGradients[0]}
            categoryColorIndex={9}
          />
          <TransactionBlock
            value={-12.5}
            currency='BYN'
            date={new Date()}
            category='Продукты'
            icon={ICON_NAMES.CATEGORY_FOOD}
            accountTitle='Личные'
            accountGradient={colorsGradients[0]}
            categoryColorIndex={9}
          />
          <TransactionBlock
            value={-12.5}
            currency='BYN'
            date={new Date()}
            category='Продукты'
            icon={ICON_NAMES.CATEGORY_FOOD}
            accountTitle='Личные'
            accountGradient={colorsGradients[0]}
            categoryColorIndex={9}
          />
          <TransactionBlock
            value={25}
            currency='BYN'
            date={new Date()}
            category='Продукты'
            icon={ICON_NAMES.CATEGORY_FOOD}
            accountTitle='Личные'
            accountGradient={colorsGradients[0]}
            categoryColorIndex={9}
          />
        </TransactionsGroupContainer>
      </View>
      <StatusBar />
    </ScrollView>
  );
}