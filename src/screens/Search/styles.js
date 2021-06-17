import { Platform, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { hexToRgbA } from '../../helper/genericFunctions';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    searchInputContainer: {
        width: "97%",
        alignSelf: "center",
        marginTop: 16,
        backgroundColor: colors.primary,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: Platform.OS === "ios" ? 8 : 0,
        borderRadius: 12,
    },
    searchIcon: {
        marginRight: 12,
    },
    searchInput: {
        paddingRight: 16,
        color: colors.white
    },
    title: {
        marginTop: 12,
        marginBottom: 12,
        marginHorizontal: 16 * 2,
        fontSize: 15,
        fontWeight: "bold",
    },
});//end of styles

export const itemStyles = StyleSheet.create({
    primaryContainer: {
        marginHorizontal: 16 * 2,
        marginBottom: 12,
        paddingVertical: 8,
        paddingLeft: 16,
        paddingRight: 8,
        backgroundColor: colors.dashboardCardBG,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    profilePicture: {
        width: 30,
        height: 30,
    },
    nameUsernameContainer: {
        marginLeft: 12,
    },
    name: {
        fontSize: 14,
        color: hexToRgbA(colors.black, 70),
    },
    username: {
        fontSize: 10,
        color: hexToRgbA(colors.black, 40),
    },
    viewButtonContainer: {
        position: "absolute",
        right: 10,
    },
    viewButton: {
        width: 50,
        alignSelf: "center",
        borderRadius: 12,
        height: 20,
    },
    viewButtonText: {
        fontSize: 12,
    },
});//end of itemStyles