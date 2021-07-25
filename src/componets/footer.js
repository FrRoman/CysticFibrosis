import React from 'react';
import {
    StyleSheet,
    View,
    Text, TouchableOpacity
} from 'react-native';



const Footer = props => {

    const changeScreen = arg => {
        props.setScreen(arg)
    }

    return (

            <View style={styles.footer}>

                <View style={styles.buttonsWrapper}>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.textStyle} onPress={() => props.changeScreen(2)}>Sign Out</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.textStyle} onPress={ () => props.changeScreen(1)}>Notification</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.textStyle}>Settings</Text>
                    </TouchableOpacity>
                </View>


            </View>

    );
}


const styles = StyleSheet.create({
    footer: {

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#202020',
        height: '15%',
        borderTopWidth: 1,
    },
    buttons: {
        fontSize: 20,
        borderRadius: 50,
        margin: 8,
        height: 50,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#1A1A1A',
    },
    buttonsWrapper: {
        flexDirection: 'row',
        margin: 10,


        shadowColor: '#cecece',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    textStyle: {
        color: 'white'
    }

});



export default Footer;
