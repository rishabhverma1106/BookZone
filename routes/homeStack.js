import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
    <Navigator>
        <Screen 
            name="Home" 
            component={Home} 
            options={{
                headerShown : false,
                title: "Book Zone",
                headerStyle: {
                    backgroundColor: "#eee",
                    height: 60,
                },
                headerTintColor: '#444'
            }}
        />
        <Screen 
            name="ReviewDetails" 
            component={ReviewDetails} 
            options={{
                title: "Review Details",
                headerStyle: {
                    backgroundColor: "#eee",
                    height: 60,
                },
                headerTintColor: '#444'
            }}
        />
    </Navigator>
)

export default HomeStack;
