import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
});//end of styles

export const itemStyles = StyleSheet.create({
    primaryContainer: {
        backgroundColor: colors.background,
    },
    button: {
        width: "40%",
        alignSelf: "center",
        marginTop: 32,
        borderRadius: 35,
        height: 35,
    },
});//end of styles