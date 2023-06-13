import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Color from "../../values/Colors";

const ParentView = (props) => {

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: Color.white, ...props.customStyles }} {...props}>
                {props.children}
            </SafeAreaView>
        </>
    )
}

export default ParentView