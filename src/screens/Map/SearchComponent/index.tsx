import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from "../../../components/CustomText";
import CustomIcon from '../../../components/CustomIcon';
import colors from '../../../constants/colors';
import { IMLocalized } from '../../../locales/IMLocalization';
import { styles } from "./styles";
import { emptyValidate } from '../../../helper/genericFunctions';
import ROUTES from '../../../routes/ROUTES';
//END OF IMPORT's

interface all extends IState, componentInterface { }
interface componentInterface {
    search?: any;
    navigation?: any;
}//end of INTERFACE 

interface IState {

}//end of ISTATE

export default class index extends Component<any, all> {

    public static defaultProps = {
        search: ''
    };//end of DEFAULT PROPS DECLARATION

    render() {
        let { search, navigation } = this.props;
        return (
            <TouchableOpacity style={{ ...styles.primaryContainer, }}
                onPress={() => navigation.navigate(ROUTES.Search)}>
                <CustomIcon name={"search"}
                    color={colors.white}
                    size={20} />

                <Text style={styles.text}>{emptyValidate(search) ? search : IMLocalized(`Search...`)}</Text>

            </TouchableOpacity>
        )
    } // end of Function Render

} //end of class index

