import React from 'react'
import { ScrollView, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'

import NotificationContainer from '../components/NotificationContainer'
import { colors, parameters,globalStyles } from '../globals/styles'

const ProfilePage = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.upperContainerZ}>
                <Text style={styles.topic}>Profile</Text>
                <View style={styles.proPicContainer}>
                    <Image source={require('../../assets/images/proPic.jpg')} style={styles.proPic} />
                </View>
                <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editButtonText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.upperContainer}>

                <View style={styles.upperContainer1}>
                    <NotificationContainer/>
                </View>
                <View style={styles.upperContainer2}>
                </View>

            </View>
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.lowerContainer}>
                    <View style={styles.lowerFieldTopic}>
                        <Text style={styles.lowerFieldTopicText}>Info</Text>
                    </View>
                    <View style={styles.lowerFieldContent}>
                        <Text style={styles.lowerFieldContentText}>Saman Kumara</Text>
                    </View>
                    <View style={styles.lowerFieldContent}>
                        <Text style={styles.lowerFieldContentText}>Ethiopia</Text>
                    </View>
                    <View style={styles.lowerFieldContent}>
                        <Text style={styles.lowerFieldContentText}>Status</Text>
                    </View>
                    <View style={styles.lowerFieldTopic}>
                        <Text style={styles.lowerFieldTopicText}>Statistics</Text>
                    </View>
                    <View style={styles.lowerFieldContent}>
                        <Image source={require('../../assets/utils/heart.png')} style={styles.infoIcon} />
                        <Text style={styles.lowerFieldContentText}>Most visited places</Text>
                    </View>
                    <View style={styles.lowerFieldContent}>
                        <Image source={require('../../assets/utils/restaurant.png')} style={styles.infoIcon} />
                        <Text style={styles.lowerFieldContentText}>Most visited restaurants</Text>
                    </View>
                    <View style={styles.lowerFieldTopic}>
                    </View>
                    <View style={styles.lowerFieldContent}>
                        <Image source={require('../../assets/utils/signout.png')} style={styles.infoIcon} />
                        <Text style={styles.lowerFieldContentText}>Sign out</Text>
                    </View>
                </View>
            </ScrollView>
            
        </View>
    )
}

export default ProfilePage

const styles = StyleSheet.create({
    scrollViewContainer:{
        display: "flex",
    },
    mainContainer:{
        display:"flex",
        height:parameters.SCREEN_HEIGHT,
        alignItems:'center'
    },
    upperContainer:{
        position:"absolute",
        top:0,
        display:'flex',
        height:parameters.SCREEN_HEIGHT/2,
        width:parameters.SCREEN_WIDTH,
        alignItems:'center',
    },
    upperContainer1:{
        width:"100%",
        height:"50%",
        display:"flex",
        paddingTop:parameters.statusBarHeight,
        alignItems:"center",
        backgroundColor:colors.grey  
    },
    upperContainer2:{
        width:"100%",
        height:"40%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"flex-end",
        backgroundColor:colors.midBoxWhite,
        paddingBottom:30,

    },
    upperContainerZ:{
        // position:"absolute",
        // top:0,
        display:'flex',
        height:parameters.SCREEN_HEIGHT/2,
        width:parameters.SCREEN_WIDTH,
        alignItems:'center',
        justifyContent:"center",
        zIndex:100,
    },
    topic:{
        fontFamily:"Roboto",
        fontWeight:"bold",
        fontSize:20,
        color:colors.midBoxWhite,
        margin:5,
    },
    proPicContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        borderRadius:100,
        width:150,
        height:150,
        borderColor:"black",
        backgroundColor:colors.midBoxWhite,
        margin:5,
        // marginHorizontal:"auto",
    },
    proPic:{
        borderRadius:100,
        width:140,
        height:140
    },
    editButton:{
        height:40,
        width:180,
        backgroundColor:colors.ThemeBlack,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        margin:5,
        // marginTop:50
    },
    editButtonText:{
        color:colors.white,
        fontSize:18,
        fontFamily:'Roboto',
        marginTop:-2
    },
    lowerContainer:{
        marginBottom:90
    },
    lowerFieldTopic:{
        display:"flex",
        width:parameters.SCREEN_WIDTH,
        height:50,
        flexDirection:"row",
        alignItems:"center",
        // borderColor:"black",
        // borderWidth:2,
        paddingLeft:15,  
    },
    lowerFieldTopicText:{
        fontFamily:"Roboto",
        fontWeight:"800",
        fontSize:18,
    },
    lowerFieldContent:{
        display:"flex",
        width:parameters.SCREEN_WIDTH,
        height:50,
        flexDirection:"row",
        backgroundColor:colors.midBoxWhite,
        alignItems:"center",
        paddingLeft:15,  
    },
    lowerFieldContentText:{
        fontFamily:"Roboto",
        fontWeight:"500",
        fontSize:18,
    },
    infoIcon:{
        width:20,
        height:20,
        marginRight:10
    }
})
