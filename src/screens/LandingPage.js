import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { colors, parameters,globalStyles } from '../globals/styles'

const LandingPage = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/images/LOGO.png')} style={styles.logo}/>
                <Text style={styles.bannerText}>Welcome to Sri Lanka.</Text>
                <Text style={styles.bannerText}>Are you ready to start your journey?</Text>
            </View>
            <View style={styles.proceedBtnContainer}>
                <TouchableOpacity style={globalStyles.button1}>
                    <Text style={globalStyles.button1Text}>Proceed</Text>
                </TouchableOpacity> 

                <View style={globalStyles.alreadyContainer}>
                    <Text style={globalStyles.smallText}>Already have an account?</Text>
                    <TouchableOpacity style={globalStyles.button2}>
                        <Text style={globalStyles.button2Text}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    mainContainer:{
        display:"flex",
        backgroundColor:colors.midBoxWhite,
        height:parameters.SCREEN_HEIGHT,
        paddingTop:parameters.statusBarHeight,
        alignItems:'center'
    },
    logoContainer:{
        display:"flex",
        flex:2,
        width:parameters.SCREEN_WIDTH,
        alignItems:"center",
        justifyContent:'center',
    },
    logo:{
        height:200,
        width:200,
        marginBottom:20
    },
    bannerText:{
        margin:5,
        fontFamily:"Roboto",
        fontSize:25,
    },
    proceedBtnContainer:{
        display:"flex",
        flex:1,
        justifyContent:"center",
    },


})

