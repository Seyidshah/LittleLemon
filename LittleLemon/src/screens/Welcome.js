import { Text, StyleSheet, View, Image, useColorScheme } from 'react-native'
import React from 'react';



const WelcomeWindow = () => {
    const colorScheme = useColorScheme();

    return (
        <View
            style={[styles.container,
            colorScheme === 'light'
                ? { backgroundColor: '#fff' }
                : { backgroundColor: '#333333' },
            ]}
        >
                <View style={styles.logoAndWindowName}>
                    <Image
                        style={styles.logo}
                        source={require('../img/littleLemonLogo.png')}
                        resizeMode="cover"
                        accessible={true}
                        accessibilityLabel={'Little Lemon Logo'} />
                    <Text style={[styles.windowName,
                    colorScheme === 'light'
                        ? { color: '#333333' }
                        : { color: '#fff' },
                    ]}>Little Lemon</Text>

                </View>
                <Text style={[styles.textDescription,
                colorScheme === 'light'
                    ? { color: '#333333' }
                    : { color: '#fff' },
                ]}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
            </View>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333333",
    },
    logo: {
        height: 100,
        width: 100,
        borderRadius: 20
    },
    windowName: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 30,
        textAlign: 'center'
    },
    logoAndWindowName: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'center',
    },
    textWelcome: {
        padding: 40,
        textAlign: 'center',
        fontSize: 30
    },
    textDescription: {
        padding: 20,
        marginVertical: 8,
        textAlign: 'center',
        fontSize: 24
    },
    firstNameInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16
    }
})

export default WelcomeWindow