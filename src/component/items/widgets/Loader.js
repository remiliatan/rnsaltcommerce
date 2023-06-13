import React from "react";
import { View } from "react-native";
import Color from "../../../values/Colors";
import MobileIcon from '../../../assets/icons/mobile-icon.svg'
import TextView from "../../materials/TextView";

const Loader = (props) => {

    return(
        <>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <MobileIcon width={80} height={80} style={{color: Color.textColor}}/>
                <TextView isBold customStyles={{fontSize: 18, marginTop: 10}}>Loading Product Data</TextView>
                <TextView customStyles={{fontSize: 12, marginTop: 10}}>Please Wait...</TextView>
            </View>
        </>
    )
}

export default Loader