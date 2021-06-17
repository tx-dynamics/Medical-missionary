import React, { Component } from 'react';
import { FlatList, View, } from 'react-native';
import { styles, itemStyles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppHeader from '../../appComponents/AppHeader';
import { IMLocalized } from '../../locales/IMLocalization';
import genericFunctions from '../../helper/genericFunctions';
import CustomButton from '../../components/CustomButton';
import ROUTES from '../../routes/ROUTES';
//end of IMPORT's

const BUTTON_KEYS = {
    activeOrder: "activeOrder",
    completedOrder: "completedOrder",
    ordersRequest: "ordersRequest",
}

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: genericFunctions.guidGenerator(),
                name: IMLocalized(`Active Orders`),
                key: BUTTON_KEYS.activeOrder
            }, {
                id: genericFunctions.guidGenerator(),
                name: IMLocalized(`Completed Orders`),
                key: BUTTON_KEYS.completedOrder
            }, {
                id: genericFunctions.guidGenerator(),
                name: IMLocalized(`Orders Request`),
                key: BUTTON_KEYS.ordersRequest
            }]
        };//end of INITIALIZING STATE's
    }//end of CONSTRUCTOR

    componentDidMount = async () => {
        this.load();

    }//end of COMPONENT_DID_MOUNT

    componentWillUnmount = async () => {
    }//end of COMPONENT_WILL_UNMOUNT

    load = () => {

    }//end of LOAD FUNCTION

    backPress = () => {
        this.props.navigation.goBack();
    }//end of BACK PRESS

    render = () => {
        const { data } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />
                <AppHeader
                    title={IMLocalized(`Orders`)}
                    rightClose
                    rightClosePress={this.backPress} />

                <FlatList
                    data={data}
                    renderItem={this._renderItem} />
            </View>
        );
    }//end of RENDER

    _renderItem = ({ item, index }) => {
        return (
            <View style={itemStyles.primaryContainer}>
                <CustomButton
                    onPress={() => { this.itemButtonPress(item.key) }}
                    buttonStyle={itemStyles.button}
                    title={item.name} />
            </View>
        )
    }//end of _renderItem

    itemButtonPress = (key) => {
        if (key === BUTTON_KEYS.activeOrder) {
            this.props.navigation.navigate(ROUTES.OrderActive);
        } else if (key === BUTTON_KEYS.completedOrder) {
            this.props.navigation.navigate(ROUTES.OrderCompleted);
        } else if (key === BUTTON_KEYS.ordersRequest) {
            this.props.navigation.navigate(ROUTES.OrderRequest);
        }
    }//end of itemButtonPress

}//end of CLASSS index