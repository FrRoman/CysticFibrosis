import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    ScrollView, Text, TouchableOpacity, FlatList, Alert
} from 'react-native';
import Notification from "./notification";


const Content = () => {

    const [notes, setNote] = useState(
        [
            {id: 123, title: 'near you'},
            {id: 124, title: 'near me'},
            {id: 125, title: 'near us'},
        ])


    const addNote = title => {
        setNote(prev => [...prev,
            {
                id: Date.now().toString(),
                title
            }
        ])
    }




    const deleteNote = id => {
        setNote(notes.filter(item => item.id !== id))
    }

    return (
        <View style={styles.content}>

            <FlatList style={styles.scrollStyle}
                      keyExtractor={item => item.id.toString()}
                      data={notes}
                      renderItem={({item}) => (<Notification note={item}  deleteNote = {deleteNote}/>)}
            />

            <TouchableOpacity>
                <Text onPress={() => addNote('test')}>
                    press to add!!
                </Text>
            </TouchableOpacity>


        </View>
    );
}


const styles = StyleSheet.create({

    content: {
        alignItems: 'center',
        height: '75%'
    },
    scrollStyle: {
        width: '100%'
    }

});


export default Content;
