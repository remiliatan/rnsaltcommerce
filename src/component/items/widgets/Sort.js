import React from 'react'
import { View } from 'react-native'
import ShapeIcon from '../../../assets/icons/shape-icon.svg'
import TextView from '../../materials/TextView'
import CPicker from '../../materials/CPicker'
import { changeKeyToValuable } from '../../../utils/Helpers'
import NewPicker from '../../materials/NewPicker'

const sortData = [
    {
        value: 'Default'
    },
    {
        value: 'Highest Price'
    },
    {
        value: 'Lowest price'
    }
]

const Sort = (props) => {

    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <ShapeIcon width={14} height={14} />
                <TextView customStyles={{ fontSize: 16, marginStart: 10, flex: 1 }}>Sort By:</TextView>
                <View style={{ flex: 0.7 }}>
                    <NewPicker 
                        onPickerChange={e => console.log(e)}
                        data={changeKeyToValuable(sortData, 'value', 'value')} 
                        defaultValue="Default" />
                </View>
            </View>
        </>
    )
}

export default Sort