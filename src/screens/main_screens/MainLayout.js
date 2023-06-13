import React from "react";
import { Text, View } from 'react-native'
import ParentView from "../../component/items/ParentView";
import TextView from "../../component/materials/TextView";
import String from "../../values/Strings";
import MobileIcon from '../../assets/icons/mobile-icon.svg'
import Color from "../../values/Colors";
import Header from "../../component/items/widgets/Header";
import Loader from "../../component/items/widgets/Loader";
import Sort from "../../component/items/widgets/Sort";
import AddProducts from "../../component/items/widgets/AddProduct";

const MainLayout = (props) => {

    return (
        <>
            <ParentView>
                <Header />
                <View style={{ padding: 14, marginTop: 10 }}>
                    <Sort />
                    <View style={{marginTop: 20, paddingVertical: 20, borderTopColor: Color.borderColorSecond, borderTopWidth: 1 }}>
                        <AddProducts />
                    </View>
                </View>
            </ParentView>
        </>
    )
}

export default MainLayout