import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Alert
} from 'react-native';
import Notification from "./notification";
import {MAIN_NOTE} from "../types";





const Content = () => {


    const [notes, setNote] = useState([

    ])


    const addNote = title => {


        setNote(prev => [...prev,
            {
                id: Date.now().toString(),//unique id from firebase
                title
            }
        ])
    }



    // const postFetchNotes = async (title) => {
    //     //server
    //     const response = await fetch('https://rn-cysticfibrosis-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({title})
    //     })
    //
    //     const data = await response.json()
    //     console.log('post DATA', data)
    // }



    const deleteNote = id => {
        const noteToRemove = notes.find(item => item.id === id)
        Alert.alert(
            'Delete Note',
            `Are you sure, You want to delete "${noteToRemove.title}" Note?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => setNote(prev => prev.filter(item => item.id !== id))
                }
            ]
        )
    }

    return (
        <View style={styles.content}>

            <FlatList style={styles.scrollStyle}
                      keyExtractor={item => item.id.toString()}
                      data={notes}
                      renderItem={({item}) => (<Notification note={item}  deleteNote = {deleteNote}/>)}
            />



            <TouchableOpacity style={styles.testButton}>
                <Text onPress={() => addNote('Test')}>
                    press to add!!
                </Text>
            </TouchableOpacity>




        </View>
    );
}


const styles = StyleSheet.create({

    content: {
        flex: 1,
        alignItems: 'center',
        height: '75%'
    },
    scrollStyle: {
        width: '100%'
    },
    testButton: {
        height: 30,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',

    }

});


export default Content;
