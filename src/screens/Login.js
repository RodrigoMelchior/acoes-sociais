import React, { useState, useEffect, Component } from 'react'
//import { observable, action } from 'mobx';
//import { observer, inject } from 'mobx-react/native';
import { 
    View,
    Text,
    Image,
    TextInput,
    KeyboardAvoidingView, 
    TouchableOpacity,
    StyleSheet, 
    Animated} from 'react-native';

   // @inject("homeStore")
    //@observer
     export default function Login (){
        const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
        const [opacity] = useState(new Animated.Value(0));
        useEffect(() =>{
            Animated.parallel([
                Animated.spring(offset.y,{
                    toValue: 0,
                    speed: 4,
                    bounciness: 30,
                }),
                Animated.timing(opacity,{
                    toValue: 1,
                    duration: 500,
                })
            ]).start();
        }, [])

        return(

            <KeyboardAvoidingView style={styles.background} >
                <View style={styles.countainerLogo} > 
                    <Animated.Image 
                        style={{
                            width: 400,
                            height: 400,
                        }}
                    source={require('../imagens/Logo.png')} />
                </View>

                <Animated.View 
                    style={[
                        styles.countainer,
                        {
                            opacity: opacity,
                            transform: [
                                { translateY: offset.y}
                            ]
                        }
                    ]}
                >
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        autoCorrect={false}
                        onChangeText={() => {}} 
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        autoCorrect={false}
                        onChangeText={() => {}}
                    />

                    <TouchableOpacity style={styles.btnSubmit}>
                        <Text style={styles.btnSubmitText} >Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCadastro}>
                        <Text style={styles.btnCadastroText}>Cadastrar</Text>
                    </TouchableOpacity>
                </Animated.View>
            </KeyboardAvoidingView>     
        );
     }


    const styles = StyleSheet.create({
        background:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#CEE3F6'
        },
        countainerLogo:{
            flex: 1,
            justifyContent: 'center',
    
        },
        countainer:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
            paddingBottom: 50
        },
        input:{
            backgroundColor: '#ffffff',
            width: '90%',
            marginBottom: 15,
            color: '#222',
            fontSize: 17,
            borderRadius: 7,
            padding: 10
        },
        btnSubmit:{
            backgroundColor: '#2E2EFE',
            width: '90%',
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 7
        },
        btnSubmitText:{
            color: '#FFF',
            fontSize: 18
        },
        btnCadastro:{
            marginTop: 10,
            
        },
        btnCadastroText:{
            color: '#000000',
            fontSize: 15        
        },
    })