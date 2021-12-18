import React from 'react'
import { View, Text, Image } from 'react-native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Logo from "../../assets/images/logo.jpg"

const Signin = () => {
    const { height } = useWindowDimensions();
    return (
        <View>
            <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain' />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 100,
    },
})


export default Signin;
