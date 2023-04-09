import React,{useState} from 'react'
import { ScrollView, StyleSheet, Text, View,TouchableOpacity,Image,FlatList,SafeAreaView } from 'react-native'
import { colors, parameters,globalStyles } from '../globals/styles'

const MyJourney = () => {

    const selectedDates=[
        {id:1,date:"2023-04-03"},
        {id:2,date:"2023-04-04"},
        {id:3,date:"2023-04-05"},
        {id:4,date:"2023-04-06"},
    ]
    const cardData=[
        {id:1,from:"08.00",to:"10.00",place:"Baraji dosai",category:"Breakfast"},
        {id:2,from:"10.15",to:"12.30",place:"Temple of Tooth",category:"Religous"},
        {id:3,from:"12.45",to:"13.30",place:"Peradeniya Garden",category:"Nature"},
    ]
    const[capturedDate,setCapturedDate]=useState(selectedDates[0].date);
    const setSelectedDate=(item)=>{
        setCapturedDate(item.date)
    }

    const Item=({item,onPress})=>(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.dayButton}>
                <Text style={styles.dayText}>Day {item.id}</Text> 
            </View>
        </TouchableOpacity>

    )
    const renderItem = ({item}) => {
        return (
          <Item
            item={item}
            onPress={() => setSelectedDate(item)}
          />
        );
      };
    return (
        <View style={styles.mainContainer}>
            <View style={styles.upperContainer}>
            <View style={styles.upperContainer1}>
                <Text style={styles.topic}>My Journey</Text>
                <View style={styles.dateContainer}>
                    <View style={styles.dateContainerLabel}>
                        <Text style={styles.dateText}>Currently Selected</Text> 
                    </View>
                    <Text style={styles.dateText}>{capturedDate}</Text> 
                </View>
            </View>
            <SafeAreaView style={styles.upperContainer2}>
                <FlatList
                    horizontal={true}
                    data={selectedDates}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>

            </View>
            <View style={styles.tableTitles}>
                <View style={styles.tableTitleField1}>
                    <Text style={styles.tableTitleText}>Time</Text> 
                </View>
                <View style={styles.tableTitleField2}>
                    <Text style={styles.tableTitleText}>Locations</Text> 
                </View>
            </View>
            
                <ScrollView>
                    <View style={styles.lowerContainer}>
                    {cardData.map((data)=>{
                        return(<View style={styles.itemAndTime}>
                            <View style={styles.time}>
                                <Text style={styles.timeText}>{data.from}</Text>
                                <Text style={styles.timeText}>{data.to}</Text>
                            </View>
                            <View style={[data.id%2==1?styles.itemCardOdd:styles.itemCardEven]}>
                                <View style={styles.placeContainer}>
                                    <Text style={styles.placeText}>{data.place}</Text>
                                    <TouchableOpacity>
                                        <Image source={require('../../assets/utils/more.png')} style={styles.moreIcon}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.catContainer}>
                                    <Text style={styles.catText}>{data.category}</Text>
                                </View>
                                <TouchableOpacity style={styles.mapLinkContainer}>
                                    <Image source={require('../../assets/utils/mapMarker.png')} style={styles.mapIcon}/>
                                    <Text style={styles.mapLinkText}>View in Map</Text>
                                </TouchableOpacity>
                            </View>
                        </View>)
                    })}
                    </View>
                </ScrollView>
        </View>
    )
}

export default MyJourney

const styles = StyleSheet.create({
    mainContainer:{
        display:"flex",
        backgroundColor:colors.midBoxWhite,
        height:parameters.SCREEN_HEIGHT,
        alignItems:'center'
    },
    scrollViewContainer:{
        display: "flex",
    },
    upperContainer:{
        display:'flex',
        height:parameters.SCREEN_HEIGHT/3,
        paddingTop:parameters.statusBarHeight,
        width:parameters.SCREEN_WIDTH,
        alignItems:'center',
        backgroundColor:colors.grey   
    },
    lowerContainer:{
        marginBottom:80,
        //   backgroundColor:'yellow'
    },
    topic:{
        fontFamily:"Roboto",
        fontWeight:"bold",
        fontSize:32,
        color:colors.midBoxWhite,
        marginBottom:30
    },
    dateContainer:{
        width:280,
        height:40,
        display:"flex",
        flexDirection:'row',
        // justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.midBoxWhite,
        borderRadius:50,
    },
    dateContainerLabel:{
        width:160,
        height:40,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.grey2,
        borderRadius:50,
        marginRight:15
    },
    dateText:{
        fontSize:18,
        fontWeight:"500"
    },
    upperContainer1:{
        width:"100%",
        height:"70%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    upperContainer2:{
        width:"100%",
        height:"30%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    dayButton:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:120,
        marginLeft:5,
        marginRight:5,
        height:40,
        borderRadius:50,
        borderWidth:1,
        borderColor:colors.midBoxWhite,
    },
    dayText:{
        fontSize:20,
        color:colors.midBoxWhite,
        fontWeight:"500"
    },
    tableTitles:{
        display:"flex",
        flexDirection:'row',
        width:parameters.SCREEN_WIDTH,
        height:70,
        justifyContent:"center",
    },
    tableTitleText:{
        fontSize:20,
        fontWeight:"800",
        fontFamily:"Roboto",
        color:colors.grey2,
    },
    tableTitleField1:{
        display:"flex",
        flexDirection:'row',
        alignItems:"center",
        width:"30%",
        backgroundColor:"white",
        paddingLeft:30
        
    },
    tableTitleField2:{
        display:"flex",
        flexDirection:'row',
        width:"65%",
        paddingLeft:30,
        alignItems:"center",
        backgroundColor:"white"
    },
    itemAndTime:{
        display:"flex",
        flexDirection:"row",
        justifyContent:'center',
        width:parameters.SCREEN_WIDTH,
        height:150,
        marginBottom:20
    },
    time:{
        display:"flex",
        justifyContent:'center',
        width:"30%",
        height:"100%",
        backgroundColor:"white",
        paddingLeft:30
    },
    itemCardOdd:{
        display:"flex",
        width:"65%",
        height:"100%",
        paddingLeft:30,
        paddingRight:10,
        backgroundColor:colors.grey,
        borderRadius:15
    },
    itemCardEven:{
        display:"flex",
        width:"65%",
        height:"100%",
        paddingLeft:30,
        paddingRight:10,
        backgroundColor:colors.grey2,
        borderRadius:15
    },
    timeText:{
        fontSize:18,
        marginBottom:5,
        fontWeight:"700",
        color:colors.grey2
    },
    placeContainer:{
        display:"flex",
        width:"100%",
        height:"40%",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
    },
    moreIcon:{
        width:20,
        height:20,
        tintColor:colors.midBoxWhite,
    },
    placeText:{
        fontSize:20,
        fontWeight:"700",
        color:colors.midBoxWhite
    },
    catContainer:{
        display:"flex",
        width:"100%",
        height:"15%",
        alignItems:"center",
        flexDirection:"row",
    },
    catText:{
        fontSize:18,
        fontWeight:"400",
        color:colors.midBoxWhite
    },
    mapLinkContainer:{
        display:"flex",
        width:"100%",
        height:"45%",
        alignItems:"center",
        flexDirection:"row",
    },
    mapIcon:{
        width:15,
        height:15,
        tintColor:colors.midBoxWhite,
        marginRight:5
    },
    mapLinkText:{
        fontSize:16,
        fontWeight:"400",
        color:colors.midBoxWhite
    }

})
