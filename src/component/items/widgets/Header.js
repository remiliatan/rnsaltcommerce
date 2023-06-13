import React from "react";
import { View } from "react-native";
import Color from "../../../values/Colors";
import MobileIcon from '../../../assets/icons/mobile-icon.svg'
import TextView from "../../materials/TextView";
import String from "../../../values/Strings";

const Header = (props) => {

    return (
        <>
            <View style={{ paddingVertical: 20, paddingHorizontal: 10, borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: Color.red }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MobileIcon width={25} height={25} style={{ color: Color.white }} />
                    <View style={{ marginHorizontal: 10 }}>
                        <TextView isBold customStyles={{color: Color.white, fontSize: 16}}>{String.headerTitle}</TextView>
                        <TextView customStyles={{color: Color.white}}>3 Products</TextView>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Header