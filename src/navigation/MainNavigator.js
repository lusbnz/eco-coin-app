import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScanQRScreen from "../screens/ScanQRScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import PromoScreen from "../screens/PromoScreen";
import HistoryScreen from "../screens/HistoryScreen";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Promo":
                iconName = "barcode";
                break;
              case "Scan QR":
                iconName = "qr-code";
                break;
              case "History":
                iconName = "calendar";
                break;
              case "Profile":
                iconName = "person";
                break;
              default:
                iconName = "home";
            }

            return <Ionicons name={iconName} size={16} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Promo" component={PromoScreen} />
        <Tab.Screen name="Scan QR" component={ScanQRScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
