import React from "react";
import { Text } from "react-native";
import String from "../../values/Strings";
import Color from "../../values/Colors";

const TextView = (props) => {
    const fontStyle = props.isBold ? String.defaultFontBold : String.defaultFontRegular
    const isCapitalize = props.isCapitalize ? "capitalize" : "none"

    return(
        <>
            <Text 
                numberOfLines={props.maxLines}
                style={{
                    fontFamily: fontStyle,
                    textTransform: isCapitalize,
                    textAlign: props.align,
                    color: Color.textColor,
                    fontSize: 14, //default size
                    ...props.customStyles
                }} {...props}>{props.children}</Text>
        </>
    )
}

export default TextView