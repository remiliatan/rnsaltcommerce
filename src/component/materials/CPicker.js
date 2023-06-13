import { Picker } from "@react-native-picker/picker";
import React from "react";
import { useState } from 'react'
import { View } from "react-native";
import Color from "../../values/Colors";

const CPicker = (props) => {
    const [itemValue, setItemValue] = useState(null)
    
    var pickerData = props.data
    return (
        <>
            <View style={{
                borderColor: Color.borderColorSecond, borderWidth: 1, borderRadius: 10,
                ...props.customParentStyles
            }}>
                <Picker
                    ref={props.sheetRef}
                    selectedValue={props.noValue ? 0 : itemValue}
                    itemStyle={{ padding: 0 }}
                    dropdownIconColor={Color.mainColor}
                    onValueChange={(val) => {
                        setItemValue(val)
                        val ? props.onPickerChange(val) : console.log('e')
                    }}>
                    {
                        pickerData.map((val, idx) => (
                            <Picker.Item
                                key={idx}
                                enabled={props.disabledFirst && idx == 0 ? false : true}
                                label={String(val.label)}
                                value={String(val.value)} />
                        ))
                    }
                </Picker>
            </View>
        </>
    )
}

export default CPicker