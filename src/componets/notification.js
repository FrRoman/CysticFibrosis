import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const Notification = props => {
    return (
        <View style={styles.noteWrapper}>
            <TouchableOpacity style={styles.buttonStyle} onLongPress={() =>props.deleteNote(props.note.id)}>
                <Text style={styles.textStyle}>
                    {props.note.title}
                </Text>

            </TouchableOpacity>
            

        </View>
    );
}


const styles = StyleSheet.create({
    noteWrapper: {
        backgroundColor: '#1A1A1A',
        width: '100%',
        alignItems: 'center',
    },
    textStyle: {
        alignItems: 'center',
        color: 'white',
        margin: 10,
        textAlign: 'center'
    },
    buttonStyle: {
        backgroundColor: '#1A1A1A',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 70,
        margin: 10,
        borderRadius: 15,
        borderColor: 'black',


        shadowColor: '#cecece',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    }
});

export default Notification;
