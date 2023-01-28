import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import { Text, Image, View, StyleSheet} from "react-native";
import { globalStyles } from "../styles/global";

const { Navigator, Screen } = createDrawerNavigator()

const RootDrawerNavigator = () => (
    <Navigator>
        <Screen name = 'Home' component={HomeStack} 
        options={{
            headerTitle: () => (
                <View style = {styles.title}>
                    <Image style={styles.headerImage} source={require('../assets/heart_logo.png')} />
                    <Text style = {globalStyles.titleText}>Book Zone</Text>
                </View>
            ),
            headerBackground: () => (
                <Image
                style={styles.headerBackground}
                source={require('../assets/game_bg.png')}
                />
                ),
            drawerLabel : 'Home',
        }} />
        <Screen name="About" component={AboutStack}
            options={{
                title : "About Book Zone",
                drawerLabel : 'About'
        }} />
    </Navigator>
)

const styles = StyleSheet.create({
    title : {
        display : 'flex',
        flexDirection : "row",
        alignItems : "center"
    },
    headerImage : {
        width: 25,
        height: 25, 
        marginRight: 12,
        marginLeft : 60
    },
    headerBackground : {
        height : 105,
        
    }
})

export default () => (
    <NavigationContainer>
        <RootDrawerNavigator />
    </NavigationContainer>
)