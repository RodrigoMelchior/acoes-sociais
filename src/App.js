import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { Router, Scene,Stack } from 'react-native-router-flux';
import Home from './screens/Home';
import SplashScreen from './screens/login/SplashScreen';
import Login from './screens/Login';
import Login2 from './screens/login/Login2'

export default class App extends  Component {
    render(){
        return(
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="SplashScreen" component={SplashScreen} initial={true}  />
                    <Scene key="Login2"  component={Login2}  />
                </Scene>
            </Router>
        );
    }
}  

