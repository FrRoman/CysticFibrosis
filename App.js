import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LoginScreen from "./src/screens/loginScreen";
import HeaderApp from "./src/componets/header";
import RegisterScreen from './src/screens/registerScreen';
import * as Location from 'expo-location';
import MainScreen from "./src/screens/MainScreen";





const App = () => {

    const [screen, setScreen] = useState(1);//2

    const [location, setLocation] = useState({});

    const [serverData, setServerData] = useState([]);

//---------------- timer and location ------------------

    useEffect(() => {
        (async  () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission denied');
                return;
            }
            console.log('Permission granted');

            let loc = await Location.getCurrentPositionAsync({});
            const temp = {
                latitude: JSON.stringify(loc.coords.latitude),
                longitude: JSON.stringify(loc.coords.longitude),
                timestamp: JSON.stringify(loc.timestamp),
            }
            setLocation(temp);
        })();
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('location',location)
        }, 5000);//120000
        return () => clearInterval(interval);
    }, []);




//---------------- server ------------------







//---------------- screens ------------------

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




    const getDistance = (start, end,  accuracy = 1)  => {
        // console.log(JSON.stringify(location))
        const haversine = require('haversine')


        const meters = haversine(start, end, {unit: 'meter'})
        if(meters <= 10){
            console.log('Distance in meters', meters)
        }
    }

    getDistance({latitude: location.latitude ,longitude: location.longitude},
        {latitude: 31.250467395588338,longitude: 34.80928167879905})

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
