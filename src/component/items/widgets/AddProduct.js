import React from "react";
import { View } from "react-native";
import TextView from "../../materials/TextView";
import Color from "../../../values/Colors";

const AddProducts = (props) => {

    return(
        <>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                    <TextView isBold>iPhone 92</TextView>
                    <TextView isBold customStyles={{color: Color.greyText}}>Rp. 370.000</TextView>
                </View>
            </View>
        </>
    )
}

export default AddProducts