import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainRoutes from "./src/route/MainRoutes";
import { StatusBar } from "react-native";
import Color from "./src/values/Colors";

const App = (props) => {

    StatusBar.setBarStyle('dark-content')
    StatusBar.setBackgroundColor(Color.white)
    return(
        <>
            <NavigationContainer>
                <MainRoutes/>
            </NavigationContainer>
        </>
    )
  
}

export default App