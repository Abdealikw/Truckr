import { StyleSheet } from 'react-native';
import Colors from '../../Theme/Colors';
import AppStyles from '../../Theme/AppStyles';

export default StyleSheet.create({
    container: {
        ...AppStyles.screen.container,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.defaultBackground,
    },
    imageLogo: {
        alignSelf: 'center',
        height: 200,
        width: 250,
    },
});
