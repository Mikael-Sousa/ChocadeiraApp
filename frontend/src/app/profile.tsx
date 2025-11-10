import React from "react";
import { View, Text } from "react-native";
import Navbar from "../components/Navbar";

export default function ProfileScreen() {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{color: "#dadadaff"}}>Tela de Perfil</Text>
      <Navbar />
    </View>
  );
}
