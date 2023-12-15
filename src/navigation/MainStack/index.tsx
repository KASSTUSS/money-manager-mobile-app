import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FC, ReactNode } from 'react';
import AccountScreen from '../../screens/AccountsScreen';
import HomeTabs from '../HomeTabs';
import { ROUTES, SCREENS_TITLE } from '../../constants/routes';

const Stack = createStackNavigator();

export default function MainStack(): ReactNode {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.HOME}
      >
        <Stack.Screen name={ROUTES.HOME} component={HomeTabs} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name={ROUTES.ADD_TRANSACTION} component={AccountScreen} 
          options={{
            headerTitle: SCREENS_TITLE.ADD_TRANSACTION,
            gestureDirection: 'vertical',
            transitionSpec: {
              open: {
                animation: 'timing',
                config: {
                  duration: 125,
                },
              },
              close: {
                animation: 'timing',
                config: {
                  duration: 125,
                },
              }
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

