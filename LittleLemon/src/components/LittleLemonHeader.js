import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

export default LittleLemonHeader = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Little Lemon</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  headerContainer: {
    flex: 0.05,
    backgroundColor: '#EE9972'
  },
  headerTitle: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})