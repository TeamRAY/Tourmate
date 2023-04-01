import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, parameters } from '../globals/styles'

const LandingPage = () => {
    return (
        <View style={styles.container}>
            <Text>LandingPage</Text>
        </View>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    container:{
        display:"flex",
        backgroundColor:colors.white,
        height:parameters,
        paddingTop:parameters.statusBarHeight,
        alignItems:'center'
    },
})

