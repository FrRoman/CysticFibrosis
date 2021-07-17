import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';


const HeaderApp = () => {
    return (

        <View style={styles.header}>
            <Text style={styles.headerText}>Cystic Fibrosis</Text>
        </View>

    );
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#202020',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
    },
    headerText: {
        color: 'white',
        marginTop: '10%',
        fontSize: 20,

    },
});

export default HeaderApp;
