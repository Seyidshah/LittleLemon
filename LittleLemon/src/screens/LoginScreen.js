import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView, TextInput, Pressable, useColorScheme } from 'react-native';

export default function LoginScreen({navigation}) {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const colorScheme = useColorScheme();

    return (
        <ScrollView style={[styles.container,
        colorScheme === 'light'
            ? { backgroundColor: '#fff' }
            : { backgroundColor: '#333333' },
        ]}>
            <Text style={[styles.headerText,
            colorScheme === 'light'
                ? { color: '#333333' }
                : { color: '#fff' },
            ]}>Welcome to Little Lemon</Text>


                    <Text style={[styles.regularText,
                    colorScheme === 'light'
                        ? { color: '#333333' }
                        : { color: '#fff' },
                    ]}>Login to continue </Text>
                    <TextInput
                        style={styles.inputBox}
                        value={email}
                        onChangeText={onChangeEmail}
                        keyboardType={'email-address'}
                        placeholder={"email"}
                    />
                    <TextInput
                        style={styles.inputBox}
                        value={password}
                        onChangeText={onChangePassword}
                        secureTextEntry={true}
                        placeholder={"password"}
                    />
                    <Pressable
                        onPress={() => 
                        navigation.navigate('Welcome')}
                        style={styles.button}>
                        <Text style={[styles.buttonText,
                        colorScheme === 'light'
                            ? { color: '#333333' }
                            : { color: '#fff' },
                        ]}>
                            Log in
                        </Text>
                    </Pressable>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333333",
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center'
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center'
    },
    inputBox: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#EDEFEE'
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 100,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderWidth: 2,
        borderRadius: 50
    },
    buttonText: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 25,
    }
})