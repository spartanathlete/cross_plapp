import { KeyboardAvoidingView, StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';

import {
    StyledContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledInputLabel,
    StyledFormArea,
    StyledButton,
    StyledTextInput,
    LeftIcon,
    RightIcon,
    InnerContainer,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    Colors
  } from './../components/styles';

// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

// icon
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';

//colors
const { darkLight, brand, primary, secondary } = Colors;

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })

        return unsubscribe

    }, [])

    const handleSignup = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Registed with: ", user.email);
            })
            .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Logged in with: ", user.email);
            })
            .catch(error => alert(error.message))
    }

  return (

    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/logo.png')} />
                <PageTitle>Spartan's For Life</PageTitle>
                <SubTitle>Account Login & Register</SubTitle>
                {/* <StyledFormArea> */}
                    
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                    
                    <View style={styles.buttonContainer}>
            
                        <TouchableOpacity
                            onPress={handleLogin}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleSignup}
                            style={[styles.button, styles.buttonOutline]}
                        >
                            <Text style={styles.buttonOutlineText}>Register</Text>
                        </TouchableOpacity>

                    </View>
                
                {/* </StyledFormArea> */}
            </InnerContainer>
        </StyledContainer>
    </KeyboardAvoidingWrapper>





    // <KeyboardAvoidingView
    //     style={styles.container}
    //     behavior="padding"
    // >
    //     {/* <StatusBar style="dark" /> */}
    //     <PageLogo resizeMode="cover" source={require('./../assets/logo.png')} />
    //     <PageTitle>Saydalyet Bouzaar</PageTitle>
        // <View style={styles.inputContainer}>
        //     <TextInput
        //         placeholder="Email"
        //         value={email}
        //         onChangeText={text => setEmail(text)}
        //         style={styles.input}
        //     />
        //     <TextInput
        //         placeholder="Password"
        //         value={password}
        //         onChangeText={text => setPassword(text)}
        //         style={styles.input}
        //         secureTextEntry
        //     />
        // </View>

        // <View style={styles.buttonContainer}>
            
        //     <TouchableOpacity
        //         onPress={handleLogin}
        //         style={styles.button}
        //     >
        //         <Text style={styles.buttonText}>Login</Text>
        //     </TouchableOpacity>

        //     <TouchableOpacity
        //         onPress={handleSignup}
        //         style={[styles.button, styles.buttonOutline]}
        //     >
        //         <Text style={styles.buttonOutlineText}>Register</Text>
        //     </TouchableOpacity>

        // </View>
    // </KeyboardAvoidingView>
  )
}

export default LoginScreen

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
      <View>
        <LeftIcon>
          <Octicons name={icon} size={30} color={brand} />
        </LeftIcon>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
    inputContainer: {
        width: '80%',
        marginTop: 20
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 15,
        borderColor: brand,
        borderWidth: 2
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: brand,
        width: '125%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: brand,
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        // fontWeight: 700,
        fontSize: 16
    },
    buttonOutlineText: {
        color: brand,
        // fontWeight: 700,
        fontSize: 16
    },
})