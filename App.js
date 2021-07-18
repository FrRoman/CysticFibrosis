import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LoginScreen from "./src/screens/loginScreen";
import HeaderApp from "./src/componets/header";
import MainScreen from "./src/screens/MainScreen";
import RegisterScreen from './src/screens/registerScreen';
import {ScreenState} from "./src/context/screen/ScreenState";



const App = () => {

    const [screen, setScreen] = useState(2)

    const setScreenFunc = (arg) => {
        setScreen(arg)
    }

    let content = (<LoginScreen login={setScreenFunc}/>)



    if(screen == 1) {
        content = <MainScreen/>
    }
    else if(screen == 2){
        content = <LoginScreen loginScreen={setScreenFunc}/>
    }
    else if(screen == 3){
        content = <RegisterScreen loginScreen={setScreenFunc}/>
    }





    return (
        // <ScreenState>
        //     <HeaderApp/>
        //     { content }
        // </ScreenState>
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
