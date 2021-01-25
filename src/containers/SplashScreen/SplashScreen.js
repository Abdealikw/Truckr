import React from 'react';
import { Image, View } from 'react-native';
import styles from './SplashScreenStyle';
import Images from '../../Theme/Images';

const SplashScreen = () => (
    <View style={styles.container}>
        <Image style={styles.imageLogo} source={Images.logo} />
    </View>
);

export default SplashScreen;
