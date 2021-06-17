import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    bookFlatList: {
        marginTop: 20,
        // paddingHorizontal: 12,
    },
    bookFlatListContentContainer: {
        alignSelf: "center",
        justifyContent: "center",
    },
    flatListSeperator: {
        marginBottom: 20,
    },
    addToSaleButtonContainer: {
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
        marginVertical: 12,
    },
    addToSaleButton: {
        borderRadius: 20,
        paddingHorizontal: 8,
    },
});//end of styles

export const bookItemStyles = StyleSheet.create({
    primaryContainer: {
        backgroundColor: colors.background,
        alignItems: "center",
    },
    bookImage: {
        borderColor: colors.primary,
        borderWidth: 3,
        borderBottomWidth: 0,
        height: 190,
        width: 150,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    numberOfSoldContainer: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: colors.black,
        width: 150,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    numberOfSold: {
        textAlign: "center",
        color: colors.white,
        fontSize: 8,
    },
    profilePictureContainer: {
        position: "absolute",
        top: 8,
        left: 10,
    },
    profilePicture: {
        height: 30,
        width: 30,
        borderRadius: 30,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.primary,
    },
    deleteButtonContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: colors.primary,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 6,
        padding: 3,
    },
    deleteButtonIcon: {
        fontSize: 20,
        color: colors.white,
    },
});//end of bookItemStyles