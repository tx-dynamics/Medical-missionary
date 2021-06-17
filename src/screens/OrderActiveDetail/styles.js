import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';

const { height, width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    bookCoverImage: {
        marginTop: 16,
        width,
        height: width,
        marginBottom: 8,
    },
    priceQuantityContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    textValueContainer: {
        flexDirection: "row",
        // alignItems: "center",
        marginLeft: 12,
        marginBottom: 8,
    },
    //PRICE
    priceText: {
        fontSize: 15,
        color: colors.black,
    },
    priceValue: {
        fontSize: 15,
        color: "#6A6A6A",
        marginLeft: 6,
    },
    //TITLE
    titleText: {
        fontSize: 15,
        color: colors.black,
        fontWeight: "bold",
    },
    titleValue: {
        fontSize: 15,
        color: colors.black,
        fontWeight: "500",
        marginLeft: 6,
    },
    //DESCRIPTION
    descriptionText: {
        fontSize: 10,
        color: colors.black,
        fontWeight: "bold",
    },
    descriptionValue: {
        fontSize: 10,
        color: colors.black,
        fontWeight: "500",
        marginLeft: 6,
        marginRight: 70,
    },
    //QUANTITY CONTAINER
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        position: "absolute",
        right: 16,
    },
    //QUANTITY
    quantityText: {
        fontSize: 15,
        color: '#545454',
        fontWeight: "bold",
    },
    quantityValue: {
        fontSize: 15,
        color: colors.black,
        fontWeight: "bold",
        marginHorizontal: 6,
    },
    plusMinusContainer: {
        padding: 3,
        paddingLeft: 10,
        borderRadius: 16,
        marginLeft: 2,
    },
    plusMinusIcon: {
        color: colors.black,
    },
    reviewText: {
        color: "#13153B",
        fontSize: 20,
    },
    orderButtonContainer: {
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
        marginVertical: 12,
    },
    orderButton: {
        borderRadius: 20,
        paddingHorizontal: 8,
    },
    deliveryTimeLeftHeading: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15,
        color: colors.black,
    },
    deliveryTimePrimaryContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginHorizontal: 16,
    },
});//end of styles

export const deliveryStyles = StyleSheet.create({
    heading: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15,
        color: colors.black,
    },
    primaryContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginHorizontal: 16,
    },
    container: {
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 12,
        color: colors.black,
        marginTop: 12,
    },
    timeContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
        marginBottom: 12,
    },
    value: {
        textAlign: "center",
        fontSize: 13,
        color: colors.primary,
        padding: 3,
        borderColor: colors.black,
        borderWidth: StyleSheet.hairlineWidth,
    },
    colon: {
        color: "#212121",
        textAlign: "center",
        fontSize: 12,
    }
});//end of deliveryStyles

export const sendRequestStyles = StyleSheet.create({
    closeIconContainer: {
        alignSelf: "flex-end",
        marginRight: 8,
        marginTop: 6,
    },
    text: {
        textAlign: "center",
        fontSize: 15,
        color: colors.black,
        fontWeight: "500",
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        alignSelf: "center",
        width: 80,
        height: 30,
        borderRadius: 35,
        marginBottom: 12,
    },
});//end of sendRequestStyles