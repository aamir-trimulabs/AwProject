import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import ColorBox from './src/screens/ColorBox';
import CounterReducer from './src/screens/CounterReducer';


const Stack = createStackNavigator();

export const MainStack = () => {
    return(
        <Stack.Navigator
            initialRouteName="CounterReducer"
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
            <Stack.Screen 
                name="ColorBox" 
                component={ColorBox} 
                options={{
                    headerLeft: ()=>{}
                }}
            />
            <Stack.Screen 
                name="CounterReducer" 
                component={CounterReducer} 
                options={{
                    headerLeft: ()=>{}
                }}
            />
        </Stack.Navigator>
    )
}