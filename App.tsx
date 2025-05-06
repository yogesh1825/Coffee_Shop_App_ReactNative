import React from 'react';
import {StyleSheet, Platform, StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import { COLORS } from './src/theme/theme';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Tab"
              component={TabNavigator}
              options={{animation: 'slide_from_bottom'}}
            />
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={{animation: 'slide_from_bottom'}}
            />
            <Stack.Screen
              name="Payment"
              component={PaymentScreen}
              options={{animation: 'slide_from_bottom'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex, // Or your preferred background
  },
});

export default App;
