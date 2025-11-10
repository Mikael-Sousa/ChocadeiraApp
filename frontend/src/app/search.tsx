import React from "react";
import { View, Text } from "react-native";
import Navbar from "../components/Navbar";

export default function SearchScreen() {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{color: "#dadadaff"}}>Tela de Pesquisa</Text>
      <Navbar />
    </View>
  );
}
