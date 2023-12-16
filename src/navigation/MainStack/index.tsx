import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ReactNode } from 'react';
import HomeTabs from '../HomeTabs';
import { ROUTES, SCREENS_TITLE } from '../../constants/routes';
import SettingsScreen from '../../screens/SettingsScreen';

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
        <Stack.Screen name={ROUTES.ADD_TRANSACTION} component={SettingsScreen} 
          options={{
            headerTitle: SCREENS_TITLE.ADD_TRANSACTION,
            gestureDirection: 'vertical',
            transitionSpec: {
              open: {
                animation: 'timing',
                config: {
                  duration: 150,
                },
              },
              close: {
                animation: 'timing',
                config: {
                  duration: 150,
                },
              }
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

