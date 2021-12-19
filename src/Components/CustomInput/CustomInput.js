import React from 'react'
import { View, Text, TextInput } from 'react-native'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry} />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "white",
        width: "100%",

        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVartical: 5,
    },
    input: {},
})

export default CustomInput
