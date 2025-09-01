// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import EducationScreen from "./screens/EducationScreen";
import SkillsScreen from "./screens/SkillsScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import CertificationsScreen from "./screens/CertificationsScreen";
import ContactScreen from "./screens/ContactScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: "#111" },
          headerTintColor: "#fff",
          tabBarStyle: { backgroundColor: "#111" },
          tabBarActiveTintColor: "#1DA1F2",
          tabBarInactiveTintColor: "#aaa",
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "About":
                iconName = "person";
                break;
              case "Education":
                iconName = "school";
                break;
              case "Skills":
                iconName = "code";
                break;
              case "Projects":
                iconName = "folder";
                break;
              case "Certifications":
                iconName = "ribbon";
                break;
              case "Contact":
                iconName = "mail";
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Education" component={EducationScreen} />
        <Tab.Screen name="Skills" component={SkillsScreen} />
        <Tab.Screen name="Projects" component={ProjectsScreen} />
        <Tab.Screen name="Certifications" component={CertificationsScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
