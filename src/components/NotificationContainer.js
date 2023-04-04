import {React,useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import { colors, parameters,globalStyles } from '../globals/styles'

const NotificationContainer = () => {
    const [notifyAlt, setNotifyAlt] = useState(false);
    return (
        <View style={styles.notificationContainer}>
        {notifyAlt? 
            <TouchableOpacity>
                <View style={styles.notifyBtn}>
                    <Image source={require('../../assets/utils/notifyIcon.png')} style={styles.bellIconActive}/>
                </View>
            </TouchableOpacity>
            : 
            <TouchableOpacity>
                <View style={styles.notifyBtn}>
                    <Image source={require('../../assets/utils/notifyIcon.png')} style={styles.bellIconDeactive}/>
                </View>
            </TouchableOpacity>
        }

    </View>
    )
}

export default NotificationContainer

const styles = StyleSheet.create({
    notificationContainer:{
        width:parameters.SCREEN_WIDTH,
        height:80,
        display:"flex",
        
        alignItems:"flex-end",
        padding:15,
        justifyContent:"center"

    },
    notifyBtn:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:35,
        height:35,
        borderRadius:50,
        borderWidth:1.5
    },
    bellIconDeactive:{
        width:25,
        height:25,
        borderRadius:50,
        backfaceVisibility:"hidden",
    },
    bellIconActive:{
        width:35,
        height:35,
        borderRadius:50,
        backfaceVisibility:"hidden",
    },

})
