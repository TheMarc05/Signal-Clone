import { StyleSheet, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Button, Input, Text } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '../firebase';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setimageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        });
    }, [navigation]);

    /*const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
                authUser.user.update({
                    displayName: name,
                    photoURL: imageUrl || "https://avatar.iran.liara.run/public",
                });
            })
        .catch((error) => alert(error.message));
    };*/


    const register = async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
        const user = userCredential.user;

        await user.updateProfile({
        displayName: name,
        photoURL: imageUrl || "https://avatar.iran.liara.run/public",
    });

    console.log("User registered successfully:", user);
  } catch (error) {
    alert(error.message);
  }
};


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />

            <Text h3 style={{ marginBottom: 50 }}>
                Create a Signal account
            </Text>
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Full Name" 
                    autofocus 
                    type="text" 
                    value={name} 
                    onChangeText={(text) => setName(text)}
                />
                <Input 
                    placeholder="Email" 
                    type="email" 
                    value={email} 
                    onChangeText={(text) => setEmail(text)}
                />
                <Input 
                    placeholder="Password" 
                    type="password" 
                    secureTextEntry
                    value={password} 
                    onChangeText={(text) => setPassword(text)}
                />
                <Input 
                    placeholder="Profile Picture URL (optional)" 
                    type="text" 
                    value={imageUrl} 
                    onChangeText={(text) => setimageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>

            <Button 
                containerStyle={styles.button}
                raised
                onPress={register}
                title="Register"
            />
            <View style={{ height: 100}} />
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    inputContainer: {
        width: 300,
    },
});