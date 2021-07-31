import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LoginScreen from "./src/screens/loginScreen";
import HeaderApp from "./src/componets/header";
import RegisterScreen from './src/screens/registerScreen';
import * as Location from 'expo-location';
import MainScreen from "./src/screens/MainScreen";
import Content from "./src/componets/content";
import {clearErrors} from "react-native/Libraries/LogBox/Data/LogBoxData";
import haversine from "haversine";





const App = () => {

    const [screen, setScreen] = useState(2);//2

    const [location, setLocation] = useState({});

    const [users, setUsers] = useState({});

    const [thisUser, setThisUser] = useState({})



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


    const getUserLocation = async  () => {
            let loc = await Location.getCurrentPositionAsync({});
            const temp = {
                latitude: JSON.stringify(loc.coords.latitude),
                longitude: JSON.stringify(loc.coords.longitude),
                timestamp: JSON.stringify(loc.timestamp),
            }
            setLocation(temp);
        }


        //time interval - set time to update data in server

    useEffect(() => {//timer interval 2 min
        const interval = setInterval(() => {
            getUsers(),
            getUserLocation(),
            UpdateCoordinate(),
            console.log('location updated -> ',thisUser),
            getDistance()

        }, 10000);//120000
        return () => clearInterval(interval);
    }, []);




//---------------- server ------------------

    const getUsers = async (obj) => {
        const response = await fetch(`https://rn-cysticfibrosis-default-rtdb.europe-west1.firebasedatabase.app/users.json`, {
            method: 'GET',//by default
            headers: {'Content-Type': 'application/json'},
            // body: JSON.stringify({name})
        })
        const data = await response.json()
        const usersData = Object.keys(data).map(key => ({...data[key], id: key}))//remove unique id from firebase

        setUsers(usersData)

        // console.log(usersData)
    }


    const setUser = async (obj) => {
        const user = {
            id: Date.now().toString(),
            userName: obj.userName,
            pass: obj.pass,
            latitude: location.latitude,
            longitude: location.longitude,
            timestamp: location.timestamp

        }
        setThisUser(user)

        console.log('-------->> ', user)
        const response = await fetch(`https://rn-cysticfibrosis-default-rtdb.europe-west1.firebasedatabase.app/users/${user.id}.json`, {
            method: 'POST',//by default
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userName: thisUser.userName,
                pass: thisUser.pass,
                latitude: location.latitude,
                longitude: location.longitude,
                timestamp: location.timestamp

            })
        })
        // const data = await response.json()
        // console.log('DATA', data)

    }


    const UpdateCoordinate = async () => {//Update in server
        clearErrors()
        try {
            await fetch(`https://rn-cysticfibrosis-default-rtdb.europe-west1.firebasedatabase.app/users/${thisUser.id}.json`, {
                method: 'PATCH',//by default
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    userName: thisUser.userName,
                    pass: thisUser.pass,
                    latitude: location.latitude,
                    longitude: location.longitude,
                    timestamp: location.timestamp

                })
            })
            // console.log('this User updated => ', thisUser)

        }catch (e) {
            console.log('some thing go wrong -> ', e)
        }


    }



//---------------- screens ------------------

    const setScreenFunc = (arg) => {
        setScreen(arg)
    }



    let content = null;

    if(screen === 1) {
        content = <MainScreen setScreen = {setScreenFunc}/>
    }
    else if(screen === 2){
        content = <LoginScreen loginScreen={setScreenFunc} users={setThisUser} loc = {location}/>
    }
    else if(screen === 3){
        content = <RegisterScreen setScreen={setScreenFunc} setUser={setUser}/>
    }


//----------------- location and distance -----------------------

    const getDistance = ()  => {
        const haversine = require('haversine')

        let start = {latitude: location.latitude ,longitude: location.longitude}

        users.forEach(usr => {
            if(usr.userName !== thisUser.userName){
                let end = {latitude: usr.latitude , longitude: usr.longitude}

                const meters = haversine(start, end, {unit: 'meter'})
                if(meters <= 10){
                    console.log('user ->', usr.userName)
                    console.log('Distance in meters', meters)
                }
            }
        })


    }

    // getDistance({latitude: location.latitude ,longitude: location.longitude},
    //     {latitude: 37.785825,longitude: -122.406417})

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
