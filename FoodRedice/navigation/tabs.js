import React from "react";
import {
    View,
    
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home } from "../screens"
import { COLORS, icons } from "../constants";
import TabIcon from "../components/TabIcon";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            style:{
                position:"absolute",
                left:0,
                right:0,
                bottom:0,
                evelation:0,
                backgroundColor:COLORS.white,
                borderTopColor:"transparent",
                height:65            }
        }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon:({focused}) =><TabIcon focused ={focused} icon={icons.home}/>
                }}
            />
            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    tabBarIcon:({focused}) =><TabIcon focused ={focused} icon={icons.search}/>
                }}
            />
            <Tab.Screen
                name="Bookmark"
                component={Home}
                options={{
                    tabBarIcon:({focused}) =><TabIcon focused ={focused} icon={icons.bookmark}/>
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Home}
                options={{
                    tabBarIcon:({focused}) =><TabIcon focused ={focused} icon={icons.settings}/>
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;