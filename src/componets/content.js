import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Alert
} from 'react-native';
import Notification from "./notification";
import { MessageContext } from "../context/message/messageContext";



const Content = props => {

    const messageContext = useContext(MessageContext)

    const [notes, setNote] = useState([])

    const addNote = title => {
        setNote(prev => [...prev,
            {
                id: Date.now().toString(),//unique id from firebase
                title
            }
        ])
    }

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
                <Text onPress={() => addNote('test')}>
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
        height: '75%',
        width: '100%',
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
