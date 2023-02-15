import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LittleLemonFooter = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>All rights reserved by Little Lemon, 2022</Text>
      </View>
      <View style={styles.afterFooterContainer}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 0.03,
    backgroundColor: '#EE9972',
    marginBottom: 4
  },
  footer: {
    flex: 0.05
  },
  footerText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18
  },
  afterFooterContainer: {
    flex: 0.02
  }
})

export default LittleLemonFooter