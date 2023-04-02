import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../globals/styles";
import ProfilePage from "../screens/ProfilePage";
import HomePage from "../screens/HomePage";
import MyJourney from "../screens/MyJourney";
import MapScreen from "../screens/MapScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: colors.midBoxWhite,
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
      }}
      initialRouteName="Map"
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../assets/utils/HomeIcon.png")}
                style={{
                  width: focused ? 25 : 20,
                  height: focused ? 25 : 20,
                  tintColor: focused ? colors.orange : "#748c94",
                }}
              />
              <Text style={{ color: focused ? colors.orange : "#748c94" }}>
                Home Page
              </Text>
            </View>
          ),
        }}
      />
    <Tab.Screen
        name="MyJourney"
        component={MyJourney}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../assets/utils/myJourney.png")}
                style={{
                  width: focused ? 25 : 20,
                  height: focused ? 25 : 20,
                  tintColor: focused ? colors.orange : "#748c94",
                }}
              />
              <Text style={{ color: focused ? colors.orange : "#748c94" }}>
                My Journey
              </Text>
            </View>
          ),
        }}
      />
    <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../assets/utils/mapMarker.png")}
                style={{
                  width: focused ? 25 : 20,
                  height: focused ? 25 : 20,
                  tintColor: focused ? colors.orange : "#748c94",
                }}
              />
              <Text style={{ color: focused ? colors.orange : "#748c94" }}>
                Map
              </Text>
            </View>
          ),
        }}
      />
    <Tab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../assets/utils/profileIcon.png")}
                style={{
                  width: focused ? 25 : 20,
                  height: focused ? 25 : 20,
                  tintColor: focused ? colors.orange : "#748c94",
                }}
              />
              <Text style={{ color: focused ? colors.orange : "#748c94" }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.20,
    shadowRadius: 3.5,
    elevation: 5,
  },
});