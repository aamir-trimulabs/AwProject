import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';


const Stack = createStackNavigator();

export const MainStack = () => {
    return(
        <Stack.Navigator
            initialRouteName="Splash"
        >
            <Stack.Screen 
                name="Splash" 
                component={Splash} 
                options={{headerShown: false}} 
            />
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    headerLeft: ()=>{}
                }}
                />
        </Stack.Navigator>
    )
}