import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LoginScreen from "./src/screens/loginScreen";
import HeaderApp from "./src/componets/header";
import MainScreen from "./src/screens/MainScreen";



const App = () => {

    const [screen, setScreen] = useState(null)

    const setScreenFunc = (arg) => {
        setScreen(arg)
    }

    let content = (<LoginScreen login={setScreenFunc}/>)



    if(screen == 1) {
        content = <MainScreen/>
    }
    else if(!screen){
        content = <LoginScreen loginScreen={setScreenFunc}/>
    }




    return (
        <View style={styles.main}>
            <HeaderApp/>
            { content }
        </View>
    );
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
});

export default App;
