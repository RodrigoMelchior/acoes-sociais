import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Animated} from 'react-native'
import {Actions} from 'react-native-router-flux'

import Logo from '../../imagens/Logo.png'


const switchtoAuth = () => {
    Actions.replace('auth')
}


class LoadingScene extends  Component {
    state = {
        LogoAnime: new Animated.Value(0),
        LogoText: new Animated.Value(0),
        loadingSpinner: false,
    };
    componentDidMount(){
        const {LogoAnime, LogoText} = this.state;
        Animated.parallel([
            Animated.spring(LogoAnime,{
                toValue: 1,
                tension: 1,
                friction: 1,
                delay: 900,
                duration: 1000,
            }).start(),

            Animated.timing(LogoText, {
                toValue: 1,
                delay: 1300,
                duration: 1500,
            }),
        ]).start(() =>{
            this.setState({
                loadingSpinner: true,
            });
            setTimeout(switchtoAuth, 1200)
        });
    }

    render(){
        return(
            <View style={style.countainer} >
                <Animated.View style={{
                    opacity: this.state.LogoAnime,
                    top: this.state.LogoAnime.interpolate({
                        inputRange: [0, 1],
                        outputRange: [80, 0],
                    })
                }}>
                    <Image source={Logo} 
                    style={{
                        width: 400,
                        height: 400,
                    }}/>         
                </Animated.View>
                <Animated.View style={{
                    opacity: this.state.LogoText,
                }} >
                    <Text style={style.logoText}> C A S P C </Text>
                    <Text style={style.logoTextSub}> Controle de Ação Social Padre Caio </Text>      
                </Animated.View>
            </View>
        );
    }
}

export default  LoadingScene;

const style = StyleSheet.create({
    countainer: {
        flex: 1,
        backgroundColor: '#CEE3F6',
        justifyContent: 'center',
        alignItems: 'center',
       // width: 200,
        
    },
    logoText: {
        color: '#000000',
        fontFamily: 'GoogleSans-Bold',
        fontSize: 25,
        marginTop: 20.1,
        textAlign: 'center',
        fontWeight: '300'
    },
    logoTextSub: {
        color: '#000000',
        fontFamily: 'GoogleSans-Bold',
        fontSize: 20,
        marginTop: 20.1,
        textAlign: 'center',
        fontWeight: '300'
    }
   

})