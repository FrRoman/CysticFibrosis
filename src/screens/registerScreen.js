import React, {useState} from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";



const RegisterScreen = props => {

    const [userName, setUserName] = useState('User Name')
    const [pass, setPass] = useState('Password');
    const [email, setEmail] = useState('test@test.co');
    const [id, setId] = useState('User ID');


    const backScreen = () => {
        props.loginScreen(2)
    }


    return (
        <View style={styles.wrapper}>
            <View style={styles.dataWrapper}>
                <Text style={styles.headerText}>
                    Register
                </Text>



                <View style={styles.fillContext}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setUserName(text)}
                        placeholder="User Name"
                        placeholderTextColor="#5F5F5F"
                        autoCorrect = {false}
                        autoCompleteType = 'off'
                        autoCapitalize = 'none'
                        textContentType = 'givenName'


                    />


                    <TextInput
                        style={styles.input}
                        onChangeText={text => setPass(text)}
                        placeholder="Password"
                        placeholderTextColor="#5F5F5F"
                        autoCorrect = {false}
                        autoCompleteType = 'off'
                        autoCapitalize = 'none'
                        textContentType = 'password'


                    />


                    <TextInput
                        style={styles.input}
                        onChangeText={text => setEmail(text)}
                        placeholder="Email"
                        placeholderTextColor="#5F5F5F"
                        autoCorrect = {false}
                        autoCompleteType = 'off'
                        autoCapitalize = 'none'
                        textContentType = 'emailAddress'


                    />
                </View>


                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style = {styles.buttonText}>
                        <Text onPress={backScreen} style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonText}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>


            </View>

        </View>


    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dataWrapper: {
        borderStyle: 'solid',
        width: '70%',
        height: '50%',
        borderColor: 'white'
    },
    headerText: {
        color: 'white',
        margin: 15,
    },
    fillContext:{

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
    },
    buttonText: {
        color: 'white',
    },
})


export default RegisterScreen;
