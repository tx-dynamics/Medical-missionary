import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
const { width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    seperator: {
        height: StyleSheet.hairlineWidth * 1.5,
        backgroundColor: "#BABABA",
        marginTop: 5,
        marginHorizontal: 12,
        borderRadius: 5,
    },
    profilePictureContainer: {
        marginTop: 16,
        alignSelf: "center",
        marginBottom: 0,
    },
    profilePicture: {
        height: 150,
        width: 150,
        borderRadius: 150,
        borderColor: colors.primary,
        borderWidth: StyleSheet.hairlineWidth,

    },
    userNameContainer: {
        alignSelf: "center",
        marginTop: 8,
    },
    userName: {
        fontSize: 20,
        color: "#13153B",
        textAlign: "center",
    },
    testimonialVideoPrimaryContainer: {
        marginTop: 8,

    },
    testimonialVideoHeading: {
        fontSize: 15,
        color: "#464646",
        fontWeight: 'bold',
        textAlign: 'center',
    },
    testimonialVideoDataContentContainer: {
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 8,
    },
    testimonialVideoButton: {
        width: 90,
        borderRadius: 50,
        alignSelf: "center",
        marginBottom: 6,
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

    buyItemPrimaryContainer: {
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 8,
    },
    buyItemHeading: {
        fontSize: 15,
        color: "#464646",
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 12,
    },

});//end of styles

export const videoItemStyles = StyleSheet.create({
    primaryContainer: {
        marginTop: 6,
        marginRight: 16,
    },
    thumbnail: {
        height: 100,
        width: 100,
        borderRadius: 6,
        borderWidth: 0,
        // borderWidth: StyleSheet.hairlineWidth * 2,
        borderColor: colors.primary,
    },
});//end of videoItemStyles

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

export const saleStyles = StyleSheet.create({
    primaryContainer: {

        marginLeft: 12,
        marginRight: 12,
        marginBottom: 8,
    },
    heading: {
        fontSize: 15,
        color: "#464646",
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 12,
    },
    contentContainer: {
        marginTop: 12,
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 5,
        paddingBottom: 350,
        alignSelf: "center",
    },
});//end of saleStyles

export const saleItemStyles = StyleSheet.create({
    primaryContainer: {
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 8,
    },
    image: {
        height: 180,
        width: width / 2.6,
        borderRadius: 6,
        borderWidth: 0,
        borderColor: colors.primary,
    },
});//end of saleItemStyles