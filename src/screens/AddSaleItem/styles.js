import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { hexToRgbA } from '../../helper/genericFunctions';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    imageContainer: {
        marginVertical: 8,
    },
    image: {
        width: "100%",
        height: 300,
    },
    imageOverlay: {
        width: "100%",
        height: 300,
        position: "absolute",
        backgroundColor: `rgba(0,0,0,0.75)`,
        zIndex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imageCameraIcon: {
        fontSize: 36,
        color: colors.white,
    },
    imageText: {
        fontSize: 18,
        color: colors.white,
    },

    inputContainer: {
        marginHorizontal: 16,
        flexDirection: "row",
        marginTop: 12,
    },
    inputText: {
        color: colors.black,
        fontSize: 15,
        fontWeight: "bold",
        width: 90,
    },
    input: {
        borderBottomColor: colors.black,
        borderBottomWidth: 1,
        borderRadius: 8,
        paddingLeft: 8,
        paddingBottom: 6,
        width: width - 130,
    },
    descriptionContainer: {
        marginTop: 16,
        padding: 8,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 12,
        marginHorizontal: 16,
        minHeight: 150,
        flexDirection: "row",
    },
    descriptionInput: {
        paddingLeft: 8,
        width: width - 150,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        alignItems: "center",
        alignSelf: "center",
    },
    buttonSeparator: {
        backgroundColor: hexToRgbA("#BABABA", 50),
        height: 2,
        width: (width / 2) - 80,
    },
    button: {
        width: 120,
        height: 30,
        borderRadius: 32,
        marginTop: 12,
        alignSelf: "center",
        // marginBottom: 12,
    },
    reviewTextContainer: {
        flexDirection: "row",
        // alignItems: "center",
        marginLeft: 12,
        marginBottom: 8,
    },
    reviewText: {
        color: "#464646",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
});//end of styles

export const reviewItemStyles = StyleSheet.create({
    primaryContainer: {
        backgroundColor: colors.background,
    },
    nameImageDateContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 16,
    },
    userImage: {
        height: 30,
        width: 30,
        borderRadius: 30,
    },
    username: {
        color: colors.black,
        fontSize: 14,
        marginLeft: 12,
    },
    date: {
        position: "absolute",
        color: colors.black,
        fontSize: 10,
        right: 16,
    },
    ratingContainer: {
        // marginHorizontal: 16,
        alignSelf: "flex-start",
    },
    rating: {
        paddingHorizontal: 20,
        marginTop: 6,
        marginBottom: 2,
    },
    review: {
        color: "#BEBEBE",
        fontSize: 10,
        marginLeft: 12,
        marginBottom: 10,
    },
});//end of reviewItemStyles