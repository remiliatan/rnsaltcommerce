import { useRef } from "react"
import CPicker from "./CPicker"
import { View } from "react-native"
import TouchedForm from "./TouchedForm"

const NewPicker = (props) => {

    const pickerRef = useRef()
    const realData = [...props.data]
    return (
        <>
            <View style={{ display: 'none', overflow: 'hidden' }}>
                <CPicker
                    sheetRef={pickerRef}
                    noValue={props.noValue}
                    data={realData} //must add key label dan value
                    onPickerChange={val => props.onPickerChange(val)} />
            </View>
            <View>
                <TouchedForm
                    boldText
                    useArrowIcon
                    onTouched={() => pickerRef.current.focus()}
                    text={props.defaultValue}
                    {...props} />
            </View>
        </>
    )
}

export default NewPicker