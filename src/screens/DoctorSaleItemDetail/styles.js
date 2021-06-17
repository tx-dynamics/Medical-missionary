import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const { height, width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    flatList: {
        marginVertical: 16,
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
    reviewTextContainer: {
        marginTop: 10,
        flexDirection: "row",
        marginLeft: 12,
        marginBottom: 8,
    },
    reviewText: {
        color: "#13153B",
        fontSize: 20,
    },
    buyButtonContainer: {
        position: "absolute",
        bottom: 12,
        alignSelf: "center",
    },
    buyButton: {
        width: 80,
        height: 30,
        borderRadius: 30,
    },
});//end of styles

export const reviewItemStyles = StyleSheet.create({
    primaryContainer: {
        backgroundColor: colors.background,
    },
    usernameRatingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 12,
        marginBottom: 6,
    },
    username: {
        color: "#515C6F",
        fontSize: 15,

    },
    rating: {
        marginLeft: 12,
        paddingHorizontal: 20,
    },
    review: {
        color: "#BEBEBE",
        fontSize: 10,
        marginLeft: 12,
        marginBottom: 10,
    },
});//end of reviewItemStyles