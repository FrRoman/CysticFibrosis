import React from 'react';
import {StyleSheet, View} from 'react-native';


import Content from "./src/content";
import HeaderApp from "./src/header";
import Footer from "./src/footer";
import Bluetooth from "./src/bluetooth";



const App = () => {
    return (
        <View style={styles.main}>
            <HeaderApp/>

            <Content/>

            <Footer/>


        </View>
    );
}


const styles = StyleSheet.create({
    main: {
        backgroundColor: '#1A1A1A',
    },
});

export default App;
