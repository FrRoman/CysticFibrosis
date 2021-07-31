import React, {useState} from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";



const RegisterScreen = props => {

    const [userName, setUserName] = useState([])
    const [pass, setPass] = useState([]);
    const [id, setId] = useState([]);




    const funcCallback = () => {
        if(userName.trim() && pass.trim()){

            props.setUser({userName,pass})
            props.setScreen(1)
        }

    }



    const backScreen = () => {
        props.setScreen(2)
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
                </View>


                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style = {styles.buttonText}>
                        <Text onPress={backScreen} style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonText} onPress={funcCallback} >
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
