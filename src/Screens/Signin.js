import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Logo from "../../assets/images/logo.jpg"
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';

const Signin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn('Sign In')
    }

    const onForgotPasswordPressed = () => {
        console.warn('On Sign up Press')
    }
    const onSignUpPressed = () => {
        console.warn('')
    }

    const
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain' />

                <CustomInput
                    placeholder='Username'
                    value={username}
                    setValue={setUsername} />

                <CustomInput
                    placeholder='Password'
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true} />

                <CustomButton text="Sign In" onPress={onSignInPressed} />


                <CustomButton
                    text="Forgot Password"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />
                <CustomButton
                    text="Don't have an account?Create now"
                    onPress={onSignUpPressed}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
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
