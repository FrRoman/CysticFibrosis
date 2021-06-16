import React, {useState} from "react";
import {Text, View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity} from "react-native";


const LoginScreen = props => {
    const [userName, onChangeUserName] = useState('User Name');
    const [password, onChangePassword] = useState('Password');
    return (

        <SafeAreaView style={styles.wrapper}>
            <View style={styles.content}>
                <Text style={styles.headerText}>Login</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUserName}
                    placeholder="User Name"
                    placeholderTextColor="#5F5F5F"

                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    placeholder="Password"
                    placeholderTextColor="#5F5F5F"

                />
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style = {styles.headerText}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.headerText}>
                        <Text style={styles.buttonText}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>

            </View>



        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    wrapper: {
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
