import React from "react";
import {Text} from 'react-native'
import ParentView from "../../component/items/ParentView";
import TextView from "../../component/materials/TextView";
import String from "../../values/Strings";
import MobileIcon from '../../assets/icons/mobile-icon.svg'
import Color from "../../values/Colors";
import Header from "../../component/items/widgets/Header";
import Loader from "../../component/items/widgets/Loader";

const MainLayout = (props) => {

    return(
        <>
            <ParentView>
                <Header/>
                <Loader/>
            </ParentView>
        </>
    )
}

export default MainLayout