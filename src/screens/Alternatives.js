import React from 'react'
import { StyleSheet, Text, View,Image,ScrollView,ImageBackground } from 'react-native'
import { colors, parameters,globalStyles } from '../globals/styles'
import BackBtnContainer from '../components/BackBtnContainer'
import { Rating } from 'react-native-ratings';

const Alternatives = () => {
    const alternativesArr=[
        {
            id:1,
            place:"Quin's Hotel",
            imgUrl:"https://cdn-0.digitaltravelcouple.com/wp-content/uploads/2020/01/hikkaduwa-beach-drone-1.jpg?ezimgfmt=rs%3Adevice%2Frscb19-1",
            category:"Hotel",
            OpenOrClose:"Open",
            ratings:3,
            address:"387/2/1,Gatabuwana,Piliyandala"
        },
        {
            id:2,
            place:"Quin's Hotel",
            imgUrl:"https://cdn-0.digitaltravelcouple.com/wp-content/uploads/2020/01/hikkaduwa-beach-drone-1.jpg?ezimgfmt=rs%3Adevice%2Frscb19-1",
            category:"Hotel",
            OpenOrClose:"Open",
            ratings:3,
            address:"387/2/1,Gatabuwana,Piliyandala"
        },
        {
            id:3,
            place:"Quin's Hotel",
            imgUrl:"https://cdn-0.digitaltravelcouple.com/wp-content/uploads/2020/01/hikkaduwa-beach-drone-1.jpg?ezimgfmt=rs%3Adevice%2Frscb19-1",
            category:"Hotel",
            OpenOrClose:"Open",
            ratings:3,
            address:"387/2/1,Gatabuwana,Piliyandala"
        },
        {
            id:4,
            place:"Quin's Hotel",
            imgUrl:"https://cdn-0.digitaltravelcouple.com/wp-content/uploads/2020/01/hikkaduwa-beach-drone-1.jpg?ezimgfmt=rs%3Adevice%2Frscb19-1",
            category:"Hotel",
            OpenOrClose:"Open",
            ratings:3,
            address:"387/2/1,Gatabuwana,Piliyandala"
        },
    ]
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <ImageBackground 
                source={{uri: "https://cdn-0.digitaltravelcouple.com/wp-content/uploads/2020/01/hikkaduwa-beach-drone-1.jpg?ezimgfmt=rs%3Adevice%2Frscb19-1"}} 
                style={styles.coverImg} >
                    {/* <LinearGradient 
                        colors={['#ffffff', '#ffffff']} 
                        style={{height : '100%', width : '100%'}}>

                    </LinearGradient> */}
                </ImageBackground>
            </View>
            <View style={styles.upperContainer}>
                <BackBtnContainer/>
                <Text style={styles.topic}>Alternatives</Text>
            </View>
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.lowerContainer}>
                    {alternativesArr.map((data)=>{
                        return(
                        <View style={styles.altCard} key={data.id}>
                            <View style={styles.leftpart}>
                                <Image source={{uri: data.imgUrl}} 
                                style={styles.cardImg} />
                            </View>
                            <View style={styles.rightPart}>
                                <View style={styles.placeContainer}>
                                    <Text style={styles.placeText}>{data.place}</Text>
                                    <Text style={styles.openText}>{data.OpenOrClose}</Text>
                                </View>
                                <View style={styles.categoryContainer}>
                                    <Text style={styles.categoryText}>{data.category}</Text>
                                </View>
                                <Rating
                                    onStartRating={data.ratings}
                                    ratingCount={5}
                                    imageSize={20}
                                    style={styles.ratingWidget}
                                />
                                <View style={styles.addressAndAddContainer}>
                                    <View style={styles.addressContainer}>
                                        <Image
                                            source={require("../../assets/utils/mapMarker.png")}
                                            style={styles.mapIcon}
                                        />
                                        <View style={styles.addressBox}>
                                            <Text style={styles.addressText}>{data.address}</Text>
                                        </View>
                                        
                                    </View>
                                    <View style={styles.addBtnContainer}>
                                        <Image
                                            source={require("../../assets/utils/addIcon.png")}
                                            style={styles.addIcon}
                                        />
                                    </View>
                                </View>
                            </View>
    
    
                        </View>
                        )
                    })}

                </View>
            </ScrollView>
        </View>
    )
}

export default Alternatives

const styles = StyleSheet.create({
    mainContainer:{
        display:"flex",
        height:parameters.SCREEN_HEIGHT,
        alignItems:'center'
    },
    upperContainer:{
        display:'flex',
        height:parameters.SCREEN_HEIGHT/4,
        // paddingTop:parameters.statusBarHeight,
        width:parameters.SCREEN_WIDTH,
        alignItems:'center',
        // backgroundColor:'yellow'
    },
    imageContainer:{
        position:"absolute",
        top:0,
        display:'flex',
        height:parameters.SCREEN_HEIGHT/4,
        width:parameters.SCREEN_WIDTH,
        alignItems:'center',
        // backgroundColor:'yellow'
    },
    coverImg:{
        height:"100%",
        width:"100%",
        opacity:0.7
    },
    topic:{
        fontFamily:"Roboto",
        fontWeight:"900",
        fontSize:36,
        color:colors.ThemeBlack,
        marginBottom:30
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
    altCard:{
        width:"90%",
        height:180,
        display:"flex",
        flexDirection:"row",
        borderRadius:10,
        marginTop:20,
        backgroundColor:colors.midBoxWhite,
    },
    leftpart:{
        width:"35%",
        height:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:'center',
        paddingTop:15,
        paddingBottom:15,
        paddingRight:10,
        paddingLeft:10,
    },
    cardImg:{
        width:"100%",
        height:"100%",
        borderRadius:10
    },
    rightPart:{
        width:"65%",
        height:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    placeContainer:{
        display:"flex",
        flexDirection:'row',
        width:"100%",
        height:"25%",
        alignItems:"center",
        paddingLeft:15,
    },
    placeText:{
        fontSize:24,
        fontWeight:"600",
        marginRight:25,
    },
    openText:{
        fontSize:20,
        fontWeight:"400",
    },
    categoryContainer:{
        display:"flex",
        flexDirection:'row',
        width:"100%",
        height:"15%",
        alignItems:"center",
        paddingLeft:15,
    },
    categoryText:{
        fontSize:18,
        fontWeight:"400",
    },
    ratingsContainer:{
        display:"flex",
        width:"100%",
        flexDirection:'row',
        justifyContent:"center",
        height:"20%",
        paddingLeft:0
        // backgroundColor:"blue"
    },
    ratingWidget:{
        display:"flex",
        justifyContent:"center",
        alignItems:"flex-start",
        width:"100%",
        height:"20%",
        paddingLeft:15,
    },
    addressAndAddContainer:{
        display:"flex",
        flexDirection:"row",
        width:'100%',
        height:"20%",
    },
    addressContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        width:"70%",
        height:"100%",
        paddingLeft:15,
        flexWrap:"wrap",
    },
    addressBox:{
        width:"80%",
        height:"100%"
    },
    addressText:{
        fontSize:16,
        fontWeight:"200"
    },
    mapIcon:{
        width:20,
        height:20,
        marginRight:10,
    },
    addBtnContainer:{
        width:"30%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    addIcon:{
        width:40,
        height:40
    }
})
