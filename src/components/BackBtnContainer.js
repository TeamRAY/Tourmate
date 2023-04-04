import React from 'react'
import { StyleSheet, View,TouchableOpacity,Image } from 'react-native'
import { colors, parameters } from '../globals/styles'

const BackBtnContainer = () => {
    return (
        <View style={styles.backBtnContainer}>
            <TouchableOpacity>
                <Image source={require('../../assets/utils/backBtn.png')} style={styles.backBtn}/>
            </TouchableOpacity>
        </View>
    )
}

export default BackBtnContainer

const styles = StyleSheet.create({
    backBtnContainer:{
        width:parameters.SCREEN_WIDTH,
        height:80,
        display:"flex",
        padding:15,
        justifyContent:"center"

    },
    backBtn:{
        width:25,
        height:20
    },
})
