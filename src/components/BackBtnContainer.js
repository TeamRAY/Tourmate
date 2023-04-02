import React from 'react'
import { StyleSheet, View,TouchableOpacity,Image } from 'react-native'
import { globalStyles } from '../globals/styles'

const BackBtnContainer = () => {
    return (
        <View style={globalStyles.backBtnContainer}>
            <TouchableOpacity>
                <Image source={require('../../assets/utils/backBtn.png')} style={globalStyles.backBtn}/>
            </TouchableOpacity>
        </View>
    )
}

export default BackBtnContainer

const styles = StyleSheet.create({})
