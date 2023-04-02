import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image } from 'react-native'
import BackBtnContainer from '../components/BackBtnContainer'
import { colors, parameters,globalStyles } from '../globals/styles'
const SignUp = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.logoContainer}>
                <BackBtnContainer/>
                <View style={styles.topicContainer}>
                    <Text style={styles.topicBold}>Sign Up</Text>
                    <Text style={styles.topicRegular}>Become a traveler</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <Text style={styles.TextInputDes}>Email</Text>
                    <TextInput 
                        style={globalStyles.input} 
                        placeholder="abc@example.com"
                    />
                    <Text style={styles.TextInputDes}>Password</Text>
                    <TextInput 
                        style={globalStyles.input} 
                        placeholder="Pick a strong password..."
                        secureTextEntry={true}
                    >
                         {/* <Image source={require('../../assets/utils/backBtn.png')} style={globalStyles.txtInputIcon}/> */}
                    </TextInput>
                </View>
            </View>
            <View style={styles.proceedBtnContainer}>
                <TouchableOpacity style={globalStyles.button1}>
                    <Text style={globalStyles.button1Text}>Sign Up</Text>
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

export default SignUp

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
        // justifyContent:'center',
    },
    logo:{
        height:200,
        width:200,
        marginBottom:20
    },
    topicContainer:{
        padding:15,
        width:parameters.SCREEN_WIDTH,
        flex:1.5,        
    },
    topicBold:{
        fontSize:50,
        fontWeight:"bold",
        fontFamily:"Roboto",
        marginBottom:5
    },
    topicRegular:{
        fontSize:20,
        fontFamily:"Roboto"
    },
    textInputContainer:{
        width:parameters.SCREEN_WIDTH,
        padding:15,
        flex:4.5,
        justifyContent:"center",
    },
    proceedBtnContainer:{
        display:"flex",
        flex:1,
        justifyContent:"center",
    },
    TextInputDes:{
        fontFamily:"Roboto",
        fontSize:18,
        marginTop:15,
        marginBottom:15
    }



})
