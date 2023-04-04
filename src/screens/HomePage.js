import {React,useState} from 'react'
import { ScrollView, StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import { colors, parameters,globalStyles } from '../globals/styles'
import { Searchbar } from 'react-native-paper';
import NotificationContainer from '../components/NotificationContainer';
const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const items=[
        {id:1,imgUrl:"https://cdn-0.digitaltravelcouple.com/wp-content/uploads/2020/01/hikkaduwa-beach-drone-1.jpg?ezimgfmt=rs%3Adevice%2Frscb19-1",name:"Hikkaduwa"},
        {id:2,imgUrl:"https://cdn-0.digitaltravelcouple.com/wp-content/uploads/2020/01/hikkaduwa-beach-drone-1.jpg?ezimgfmt=rs%3Adevice%2Frscb19-1",name:"Kandy"},
        {id:3,imgUrl:"https://cdn-0.digitaltravelcouple.com/wp-content/uploads/2020/01/hikkaduwa-beach-drone-1.jpg?ezimgfmt=rs%3Adevice%2Frscb19-1",name:"AnuradhaPura"},
        {id:4,imgUrl:"https://cdn-0.digitaltravelcouple.com/wp-content/uploads/2020/01/hikkaduwa-beach-drone-1.jpg?ezimgfmt=rs%3Adevice%2Frscb19-1",name:"Galle"},
        {id:5,imgUrl:"https://cdn-0.digitaltravelcouple.com/wp-content/uploads/2020/01/hikkaduwa-beach-drone-1.jpg?ezimgfmt=rs%3Adevice%2Frscb19-1",name:"Unawatuna"},
        {id:6,imgUrl:"https://cdn-0.digitaltravelcouple.com/wp-content/uploads/2020/01/hikkaduwa-beach-drone-1.jpg?ezimgfmt=rs%3Adevice%2Frscb19-1",name:"Mirissa"},
    ];
    const onChangeSearch = (query)=> setSearchQuery(query);
    return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.upperContainer}>
                    <View style={styles.notificationContainer}>
                        <NotificationContainer/>
                    </View>
                    <View style={styles.searchbarContainer}>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                        />
                    </View>
                    <View style={styles.startJourneyContainer}>
                        <TouchableOpacity style={globalStyles.button1}>
                            <Text style={globalStyles.button1Text}>Start Journey</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
                <View style={styles.lowerContainer}>
                    <Text style={styles.popularTrips}>Popular Trips</Text>
                    <View style={styles.grid}>
                        {items.map((data)=>{
                            return(<View key={data.id} style={styles.item}>
                                <Image source={{uri: data.imgUrl}} style={styles.itemImg} />
                                <Text style={styles.itemName}>{data.name}</Text>
                            </View> )
                        })}
                        
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    mainContainer:{
        display:"flex",
        backgroundColor:colors.midBoxWhite,
        height:parameters.SCREEN_HEIGHT,
        paddingTop:parameters.statusBarHeight,
        alignItems:'center'
    },
    scrollViewContainer:{
        display: "flex",
    },
    upperContainer:{
        display:'flex',
        height:parameters.SCREEN_HEIGHT/3,
        width:parameters.SCREEN_WIDTH,
        alignItems:'center',
    },
    notificationContainer:{
        flex:1,
        display:"flex",
        // paddingTop: "56.25%",
    },
    searchbarContainer:{
        flex:2,
        height:parameters.SCREEN_HEIGHT/6,
        width:parameters.SCREEN_WIDTH,
        alignItems:"center",
        justifyContent:"center",
        padding:15,
        display:"flex",
    },
    startJourneyContainer:{
        flex:2,
        display:"flex",
        justifyContent:"center",
        alignItems:'center'
    },
    grid: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:"center",
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
      },
      item: {
        display:"flex",
        margin:10,
        height:parameters.SCREEN_HEIGHT/4,
        width: '45%',
        borderRadius:10,
    },
    itemImg:{
        width:"100%",
        height:"100%",
        borderRadius:10,
        borderWidth:0
    },
    itemName:{
        position:'absolute',
        left:"10%",
        bottom:"10%",
        fontFamily:"Roboto",
        fontSize:18,
        color:colors.midBoxWhite,
        fontWeight:"800"

    },
    lowerContainer:{
        marginBottom:80,
        //   backgroundColor:'yellow'
    },
    popularTrips:{
        margin:15,
        fontFamily:"Roboto",
        fontSize:20,
        fontWeight:"800"
    }
})
