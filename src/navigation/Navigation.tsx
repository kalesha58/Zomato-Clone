import React from 'react';
import SplashScreen from '@features/auth/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';
import { navigationRef } from '@utils/NavigationUtils';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Navigation;
