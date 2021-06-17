import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
});//end of styles

export const settingItemStyles = StyleSheet.create({
    primaryContainer: {
        backgroundColor: colors.background,
        marginHorizontal: 12,
        marginTop: 16,
    },
    iconTitleContainer: {
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 8,
    },
    image: {
        height: 20,
        width: 20,
        marginRight: 16,
    },
    title: {
        fontSize: 15,
    },
    name: {
        fontSize: 15,
        color: colors.primary,
        marginLeft: 36,
    },
    seperator: {
        height: StyleSheet.hairlineWidth * 1.5,
        backgroundColor: colors.primary,
        marginTop: 8,
        borderRadius: 5,
        marginLeft: 36,
    }
});//end of styles