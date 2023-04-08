import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image } from 'react-native'
import { Searchbar } from 'react-native-paper';
import MapView, { Callout, Marker,mapStyle } from "react-native-maps";
import { colors, parameters,globalStyles } from '../globals/styles'

const MapScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = (query)=> setSearchQuery(query);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.searchbarContainer}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 6.902333307966652,
                    longitude: 79.8611743548024,
                    latitudeDelta: 0.007,
                    longitudeDelta: 0.008,
                }}
                showsUserLocation={true}
                customMapStyle={mapStyle}
                followsUserLocation={true}
            >
                
            </MapView>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    mainContainer:{
        display:"flex",
        backgroundColor:colors.midBoxWhite,
        height:parameters.SCREEN_HEIGHT,
        // paddingTop:parameters.statusBarHeight,
        alignItems:'center'
    },
    map: {
        width: parameters.SCREEN_WIDTH,
        height: parameters.SCREEN_HEIGHT,
    },
    searchbarContainer:{
        position: "absolute",
        display: "flex",
        top: 30,
        alignSelf: "center",
        alignItems: "center",
        elevation: 10,
        zIndex: 1000,
        width: parameters.SCREEN_WIDTH,
        padding:20,
        // borderRadius: 15,
        elevation: 5,
    },
})
