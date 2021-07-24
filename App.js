import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LoginScreen from "./src/screens/loginScreen";
import HeaderApp from "./src/componets/header";
import MainScreen from "./src/screens/MainScreen";
import RegisterScreen from './src/screens/registerScreen';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';





const App = () => {

    const [screen, setScreen] = useState(1)//2

    const [location, setLocation] = useState({})



    useEffect(() => {
        (async  () => {
            let { status } = await Permissions.askAsync();
            if (status !== 'granted') {
                console.log('Permission denied');
                return;
            }

            let location = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);
            setLocation(location);
        })();
    }, [])


    const setScreenFunc = (arg) => {
        setScreen(arg)
    }

    let content = (<LoginScreen login={setScreenFunc}/>)



    if(screen === 1) {
        content = <MainScreen setScreen = {setScreenFunc}/>
    }
    else if(screen === 2){
        content = <LoginScreen loginScreen={setScreenFunc}/>
    }
    else if(screen === 3){
        content = <RegisterScreen loginScreen={setScreenFunc}/>
    }



    useEffect(() => {
        const interval = setInterval(() => {
            console.log('location',JSON.stringify(location))
        }, 10000);//120000
        return () => clearInterval(interval);
    }, []);


    return (
        <View style={styles.main}>
            <HeaderApp/>
            {/*{ content }*/}
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
