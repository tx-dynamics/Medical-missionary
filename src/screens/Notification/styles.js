import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    notificationSectionList: {
        marginLeft: 20,
        marginRight: 10,
        marginTop: 16,
    },
    sectionDateTimeHeaderContainer: {

    },
    sectionDateTimeHeader: {
        color: colors.primary,
        fontSize: 16,
    },
});//end of styles

export const notificationItemStyles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
        marginVertical: 8,
    },
    container: {
        flexDirection: "row",
        // alignItems: "center",
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.primary,
    },
    nameUsernameContainer: {
        marginLeft: 6,
    },
    name: {
        color: "#13153B",
        fontSize: 12,
        fontWeight: "500",
    },
    body: {
        color: "#8895AA",
        fontSize: 10,
        marginRight: 60,
    },
    seperator: {
        height: StyleSheet.hairlineWidth * 1.5,
        backgroundColor: "#AEAEAE",
        marginTop: 8,
        marginHorizontal: 8,
        borderRadius: 5,
    },

});//end of styles