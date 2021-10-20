import React from 'react';
import { Login, Recipe } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import First from './screens/First';

import Tabs from "./navigation/tabs";
import Register from './screens/Register';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Login'}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                />
                <Stack.Screen
                    name="Recipe"
                    component={Recipe}
                />
                <Stack.Screen name="First" component={First}/>
                <Stack.Screen name="Register" component={Register}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;