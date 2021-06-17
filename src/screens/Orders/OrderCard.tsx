import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, GestureResponderEvent } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';
import LocalAssets from '../../constants/LocalAssets';
import Text from "../../components/CustomText";
import { IMLocalized } from '../../locales/IMLocalization';
import colors from '../../constants/colors';
import CustomIcon from '../../components/CustomIcon';
//END OF IMPORT's


interface componentInterface {
    image: Source;

    bookName?: any;
    price?: number;
    quantity?: number;

    topSeparator?: boolean;
    bottomSeparator?: boolean;
    onPress?: (event: GestureResponderEvent) => void;

    completed?: boolean;

    pressDisable?: boolean;
}//end of INTERFACE 

export default class OrderCard extends Component<componentInterface, any> {

    public static defaultProps = {
        image: LocalAssets.BOOKS.book3,

        bookName: 'Healthcareness Book',
        price: 22.09,
        quantity: 1,

        topSeparator: false,
        bottomSeparator: true,

        completed: false,

        pressDisable: false,
    };//end of DEFAULT PROPS DECLARATION

    render() {
        const { image, bookName, price, quantity, topSeparator, bottomSeparator, onPress, completed, pressDisable } = this.props;
        return (
            <>
                {topSeparator &&
                    <View style={styles.separator} />
                }
                <TouchableOpacity onPress={onPress}
                    disabled={pressDisable}
                    style={styles.primaryContainerStyle}>
                    {completed &&
                        <CustomIcon
                            name={"check-circle"}
                            iconType={"MaterialCommunityIcons"}
                            color={"#159900"}
                            size={25}
                            style={styles.checkIcon} />
                    }

                    <View style={styles.containerStyle}>
                        <FastImage
                            source={image}
                            style={styles.image}
                            resizeMode={FastImage.resizeMode.cover} />
                        <View style={styles.textContainer}>
                            <Text style={styles.bookName}>{bookName}</Text>

                            <Text style={styles.price}>${price}</Text>

                            <View style={styles.quantityContainer}>
                                <Text style={styles.quantityText}>{IMLocalized(`Quantity: `)}</Text>
                                <Text style={styles.quantity}>{quantity}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                {bottomSeparator &&
                    <View style={styles.separator} />
                }
            </>
        )
    } // end of Function Render

} //end of class OrderCard


const styles = StyleSheet.create({
    primaryContainerStyle: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    checkIcon: {
        marginRight: 12,
    },
    containerStyle: {

        flexDirection: "row",
    },
    separator: {
        backgroundColor: "#E3E3E3",
        height: 4,
    },
    image: {
        height: 80,
        width: 60,
        borderRadius: 12,
        backgroundColor: 'grey',
    },
    textContainer: {
        marginLeft: 12,
        justifyContent: "space-between",
    },
    bookName: {
        color: "#545454",
        fontSize: 10,
    },
    price: {
        color: colors.black,
        fontSize: 15,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    quantityText: {
        color: "#545454",
        fontSize: 10,
    },
    quantity: {
        color: colors.black,
        fontSize: 15,
    },
}); //end of StyleSheet STYLES
