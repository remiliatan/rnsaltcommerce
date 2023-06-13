import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import MainLayout from "../screens/main_screens/MainLayout";

const Stack = createStackNavigator()
const MainRoutes = (props) => {

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="MainLayout" component={MainLayout} />
            </Stack.Navigator>
        </>
    )
}

export default MainRoutes