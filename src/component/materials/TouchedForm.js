import React from "react";
import { TouchableOpacity, View } from "react-native";
import TextView from "./TextView";
import ArrowIcon from '../../assets/icons/arrow-icon.svg'
import Color from "../../values/Colors";

const TouchedForm = (props) => {

    return (
        <>
            <TouchableOpacity activeOpacity={0.7} onPress={props.onTouched}>
                <View style={{
                    flexDirection: 'row',
                    padding: 10,
                    alignItems: 'center',
                    backgroundColor: Color.grey,
                    borderRadius: 8,
                    ...props.customStyles
                }}>
                    <TextView isBold={props.boldText} customStyles={{ flex: 1 }} maxLine={props.maxLines}>{props.text}</TextView>
                    {props.useArrowIcon && <ArrowIcon width="24" />}
                </View>
            </TouchableOpacity>
        </>
    )
}

export default TouchedForm