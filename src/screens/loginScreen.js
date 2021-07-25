import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity} from "react-native";


const LoginScreen = props => {
    const [userName, onChangeUserName] = useState('User Name');
    const [password, onChangePassword] = useState('Password');




    const checkLogin = () => {

        // console.log('users from login screen',props.users)
        if(userName.toString().trim() === 'roma' && password.toString().trim() === '123'){
            props.loginScreen(1)
        }
    }

    const registerScreen = () => {
        props.loginScreen(3)
    }



    return (

        <SafeAreaView style={styles.wrapper}>

            <View style={styles.content}>
                <Text style={styles.headerText}>Login</Text>


                <TextInput
                    style={styles.input}
                    onChangeText={text => onChangeUserName(text)}
                    placeholder="User Name"
                    placeholderTextColor="#5F5F5F"
                    autoCorrect = {false}
                    autoCompleteType = 'off'
                    autoCapitalize = 'none'
                    textContentType = 'username'


                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={text => onChangePassword(text)}
                    placeholder="Password"
                    placeholderTextColor="#5F5F5F"
                    textContentType = 'password'
                    autoCorrect = {false}
                    autoCompleteType = 'off'
                    autoCapitalize = 'none'


                />
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={checkLogin} style = {styles.headerText}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={registerScreen} style = {styles.headerText}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>



        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: '75%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A1A1A',
    },
    content: {
        width: '70%',

    },
    headerText: {
        color: 'white',
        fontSize: 18,
    },
    buttonText: {
        color: 'white',
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        borderColor: 'white',
        color: 'white',
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    }
})


export default LoginScreen;
