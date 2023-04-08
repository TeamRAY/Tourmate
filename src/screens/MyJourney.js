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
    const[capturedDate,setCapturedDate]=useState(selectedDates[0].date);
    const setSelectedDate=(item)=>{
        console.log(item);
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
                    {/* {selectedDates.map((data)=>{
                        return(<View style={styles.dayButton}>
                            <Text style={styles.dayText}>Day {data.id}</Text> 
                        </View>)
                    })} */}
                <FlatList
                    horizontal={true}
                    data={selectedDates}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>

            </View>
            <View style={styles.lowerContainer}>

            </View>
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
    }
})
