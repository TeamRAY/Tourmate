import React,{useState} from 'react'
import { StyleSheet, Text, View,Image,ScrollView,ImageBackground,TouchableOpacity } from 'react-native'
import { colors, parameters,globalStyles } from '../globals/styles'
import BackBtnContainer from '../components/BackBtnContainer'

const Description = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const imageList=[
        {
            id:0,
            imgUrl:"https://www.yovoyagin.com/uploads/0000/76/2022/04/07/museum.jpg"
        },
        {
            id:1,
            imgUrl:"https://www.yovoyagin.com/uploads/0000/76/2022/04/07/kandy-lake-12.jpg"
        },
        {
            id:2,
            imgUrl:"https://www.yovoyagin.com/uploads/0000/76/2022/04/07/image.jpg"
        },
        {
            id:3,
            imgUrl:"https://www.yovoyagin.com/uploads/0000/76/2022/04/07/sri-dalada-maligawa-temple-of-the-tooth-relic.jpg"
        },
    ]
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <ImageBackground 
                    source={{uri: imageList[selectedImage].imgUrl}} 
                    style={styles.coverImg}>
                </ImageBackground>
            </View>
            <View style={styles.upperContainer}>
                <BackBtnContainer/>
                <View style={styles.imageGrid}>
                    {imageList.map((data,index)=>{
                        return(
                            <TouchableOpacity style={[data.id==selectedImage?styles.imageBoxSelected:styles.imageBox]} 
                                key={index}
                                onPress={()=>setSelectedImage(data.id)}
                            
                            >
                                <Image
                                    source={{uri: data.imgUrl}} 
                                    style={styles.imageBoximg}
                                />
                            </TouchableOpacity>

                        )
                    })}

                </View>
            </View>
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.lowerContainer}>
                    <View style={styles.mainLocationContainer}>
                        <Image
                            source={require("../../assets/utils/mapMarker.png")}
                            style={styles.mapIcon}
                        />
                        <Text style={styles.mainLocationTxt}>Kandy, Sri Lanka</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleTxt}>Temple of tooth</Text>
                    </View>
                    <View style={styles.locationAndRatings}>
                        <View style={styles.distContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={require("../../assets/utils/starIcon.png")}
                                    style={styles.starIcon}
                                />
                            </View>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.detailsHeading}>Ratings</Text>
                                <Text style={styles.detailsBody}>3/5(4.2k)</Text>
                            </View>
                        </View>
                        <View style={styles.distContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={require("../../assets/utils/distanceIcon.png")}
                                    style={styles.distanceIcon}
                                />
                            </View>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.detailsHeading}>Distance</Text>
                                <Text style={styles.detailsBody}>3Km</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.contentBody}>
                            <Text style={styles.contentTxt}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est vel odio elementum non id venenatis, 
                                elementum. Enim augue velit tristique eu viverra. Massa.
                            </Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default Description

const styles = StyleSheet.create({
    mainContainer:{
        display:"flex",
        height:parameters.SCREEN_HEIGHT,
        alignItems:'center'
    },
    upperContainer:{
        display:'flex',
        height:parameters.SCREEN_HEIGHT/2,
        // paddingTop:parameters.statusBarHeight,
        width:parameters.SCREEN_WIDTH,
        alignItems:'center',
        // backgroundColor:'yellow'
    },
    imageContainer:{
        position:"absolute",
        top:0,
        display:'flex',
        height:parameters.SCREEN_HEIGHT/2,
        width:parameters.SCREEN_WIDTH,
        alignItems:'center',
        // backgroundColor:'yellow'
    },
    coverImg:{
        height:"100%",
        width:"100%",
        opacity:0.9
    },
    lowerContainer:{
        marginBottom:20,
        display:"flex",
        width:parameters.SCREEN_WIDTH,
        alignItems:"center",
    },
    scrollViewContainer:{
        display: "flex",
    },
    mainLocationContainer:{
        width:"100%",
        height:60,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:15
    },
    mapIcon:{
        width:20,
        height:20,
        tintColor:"orange",
        marginRight:20,
    },
    mainLocationTxt:{
        fontSize:20,
        fontWeight:"200",
    },
    titleContainer:{
        width:"100%",
        height:80,
        display:"flex",
        justifyContent:"center",
        paddingLeft:15
    },
    titleTxt:{
        fontSize:36,
        fontWeight:"300"
    },
    locationAndRatings:{
        width:"100%",
        height:80,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:15
    },
    distContainer:{
        width:"40%",
        height:"100%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        marginRight:20,
    },
    iconContainer:{
        display:"flex",
        width:"40%",
        height:"80%",
        justifyContent:'center',
        alignItems:"center",
        borderRadius:50,
        backgroundColor:colors.midBoxWhite,
        marginRight:10,
    },
    starIcon:{
        width:"50%",
        height:"50%",
        tintColor:"orange"
    },
    distanceIcon:{
        width:"50%",
        height:"50%"
    },
    detailsContainer:{
        display:'flex',
        width:"50%",
        height:'100%',
        justifyContent:"center"
    },
    detailsHeading:{
        fontSize:20,
        color:colors.grey2
    },
    detailsBody:{
        fontSize:16
    },
    imageGrid:{
        width:70,
        display:"flex",
        backgroundColor:colors.midBoxWhite,
        borderRadius:10,
        alignSelf:"flex-end",
        marginRight:15
    },
    imageBox:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:70,
        height:70,
        padding:5,
        opacity:0.7
    },
    imageBoxSelected:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        width:80,
        height:80,
        borderRadius:10,
        backgroundColor:colors.midBoxWhite,
        padding:5,
    },
    imageBoximg:{
        width:"100%",
        height:"100%",
        borderRadius:10
    },
    content:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:15
    },
    contentBody:{
        width:"100%",
        display:"flex",

    },
    contentTxt:{
        fontSize:20,
        fontWeight:"300",
        letterSpacing:2,
    }


})
