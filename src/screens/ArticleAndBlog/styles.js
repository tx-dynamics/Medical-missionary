import { Platform, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    titleRightCotainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    titleRightButton: {
        width: 70,
        height: 25,
        borderRadius: 40,

    },
    titleRightButtonText: {
        fontSize: 10,
    },
});//end of styles

export const itemStyles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    userProfilePrimaryContainer: {
        flexDirection: "row",
        marginHorizontal: 16,
        marginTop: 16,
        alignItems: "center",
    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    userNameTypeContainer: {
        marginLeft: 8,
    },
    name: {
        fontSize: 15,
        color: colors.black,
        fontWeight: Platform.OS === "android" ? "700" : "500",
    },
    type: {
        color: "#363636",
        fontSize: 10,
    },
    dateContainer: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    date: {
        color: "#000",
        fontSize: 10,
    },
    title: {
        color: "#464646",
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 16,
        marginTop: 6,
    },
    image: {
        width: "100%",
        height: 250,
        marginVertical: 8,
    },
    description: {
        fontSize: 12,
        color: colors.black,
        marginHorizontal: 16,

    },
    seperator: {
        backgroundColor: "#909090",
        height: StyleSheet.hairlineWidth * 1.5,
        marginTop: 8,
        marginHorizontal: 16,
        borderRadius: 5,
    }
});//end of itemStyles