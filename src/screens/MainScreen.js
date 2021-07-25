import React from "react";
import {View, StyleSheet} from 'react-native';
import Footer from "../componets/footer";
import Content from "../componets/content";


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
        alignItems: 'center',
        height: '75%',
        width: '100%',
    },

})


export default MainScreen;
