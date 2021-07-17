import React from "react";
import { View, StyleSheet } from 'react-native';
import Content from "../componets/content";
import Footer from "../componets/footer";



const MainScreen = props => {
    return (
        <View style={styles.mainWrapper}>
            <Content/>
            <Footer/>
        </View>
);
}


const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,

    }
})


export default MainScreen;
