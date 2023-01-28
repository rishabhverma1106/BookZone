import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from '../screens/about';

const { Navigator, Screen } = createStackNavigator();

const AboutStack = () => (
    <Navigator>
        <Screen 
            name = "About"
            component={About}
            options ={
                {
                    headerShown : false,
                    title : "About Book Zone",
                    headerStyle: {
                        backgroundColor: '#eee',
                        height : 60
                    },
                    headerTintColor : '#444'
                }
            }
        />
    </Navigator>
)

export default AboutStack;