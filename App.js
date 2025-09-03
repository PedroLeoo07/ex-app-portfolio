// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

// Temporary simple screens until we create the full ones
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Leonardo.</Text>
      <Text style={{ color: '#f00', fontSize: 18, marginTop: 10 }}>Full-Stack Developer</Text>
      <Text style={{ color: '#ededed', textAlign: 'center', marginTop: 20, paddingHorizontal: 20 }}>
        Profissional com experiência em desenvolvimento web completo
      </Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000508' }}>
      <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold' }}>
        About <Text style={{ color: '#f00' }}>Me</Text>
      </Text>
    </View>
  );
}

function EducationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold' }}>
        My <Text style={{ color: '#f00' }}>Journey</Text>
      </Text>
    </View>
  );
}

function SkillsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000508' }}>
      <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold' }}>
        My <Text style={{ color: '#f00' }}>Skills</Text>
      </Text>
    </View>
  );
}

function ProjectsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold' }}>
        Recent <Text style={{ color: '#f00' }}>Projects</Text>
      </Text>
    </View>
  );
}

function ContactScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000508' }}>
      <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold' }}>
        Contact <Text style={{ color: '#f00' }}>Me!</Text>
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Home":
                iconName = focused ? "home" : "home-outline";
                break;
              case "About":
                iconName = focused ? "person" : "person-outline";
                break;
              case "Education":
                iconName = focused ? "school" : "school-outline";
                break;
              case "Skills":
                iconName = focused ? "code-slash" : "code-slash-outline";
                break;
              case "Projects":
                iconName = focused ? "folder" : "folder-outline";
                break;
              case "Contact":
                iconName = focused ? "mail" : "mail-outline";
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#f00000",
          tabBarInactiveTintColor: "#666",
          tabBarStyle: {
            backgroundColor: "#000",
            borderTopColor: "#f00000",
            borderTopWidth: 1,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Education" component={EducationScreen} />
        <Tab.Screen name="Skills" component={SkillsScreen} />
        <Tab.Screen name="Projects" component={ProjectsScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
