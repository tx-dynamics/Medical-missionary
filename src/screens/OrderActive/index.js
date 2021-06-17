import React, { Component } from 'react';
import { FlatList, View, } from 'react-native';
import { styles } from './styles';
import Text from '../../components/CustomText';
import CustomStatusBar from '../../components/CustomStatusBar';
import AppHeader from '../../appComponents/AppHeader';
import OrderCard from '../Orders/OrderCard';
import genericFunctions from '../../helper/genericFunctions';
import FakeData from '../../helper/FakeData';
import { randomBooks } from '../../constants/LocalAssets';
import { IMLocalized } from '../../locales/IMLocalization';
import ROUTES from '../../routes/ROUTES';
//end of IMPORT's

const STATIC_DATA = [{
    id: FakeData.guid(),
    name: FakeData.bookName(),
    price: FakeData.getInt(10, 1000),
    quantity: FakeData.getInt(0, 100),
    image: randomBooks(),
    title: FakeData.title(),
    description: FakeData.description(),
}, {
    id: FakeData.guid(),
    name: FakeData.bookName(),
    price: FakeData.getInt(10, 1000),
    quantity: FakeData.getInt(0, 100),
    image: randomBooks(),
    title: FakeData.title(),
    description: FakeData.description(),
}, {
    id: FakeData.guid(),
    name: FakeData.bookName(),
    price: FakeData.getInt(10, 1000),
    quantity: FakeData.getInt(0, 100),
    image: randomBooks(),
    title: FakeData.title(),
    description: FakeData.description(),
}, {
    id: FakeData.guid(),
    name: FakeData.bookName(),
    price: FakeData.getInt(10, 1000),
    quantity: FakeData.getInt(0, 100),
    image: randomBooks(),
    title: FakeData.title(),
    description: FakeData.description(),
}]
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: STATIC_DATA
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
        this.props.navigation.pop() && this.props.navigation.goBack();
    }//end of BACK PRESS

    render = () => {
        const { data } = this.state;
        return (
            <View style={styles.primaryContainer}>
                <CustomStatusBar />

                <AppHeader
                    title={IMLocalized(`Active Orders`)}
                    rightClose
                    rightClosePress={this.backPress} />

                <FlatList
                    data={data}
                    contentContainerStyle={styles.flatList}
                    renderItem={({ item, index }) => {
                        return (
                            <OrderCard
                                topSeparator={index === 0}
                                onPress={() => { this.orderItemPress(item, index) }}
                                bookName={item.name}
                                image={item.image}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        )
                    }} />
            </View>
        );
    }//end of RENDER

    orderItemPress = (item, index) => {
        this.props.navigation.navigate(ROUTES.OrderActiveDetail, {
            bookData: item,
            bookDataIndex: index,
        })
    }//end of orderItemPress

}//end of CLASSS index