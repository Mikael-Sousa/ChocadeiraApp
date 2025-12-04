import { Inter_400Regular, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InfoCard, { Item } from "../components/InfoCard";
import InfoHeader from '../components/InfoHeader';
import Navbar from "../components/Navbar";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  const listConnection: Item[] = [
    {
      icon: "bluetooth",  
      title: "Bluetooth",
      status: "",
      hiddenStatus: "",
    },
    {
      icon: "wifi",      
      title: "Wi-Fi",
      status: "",
      hiddenStatus: "",
    },
  ]
  const listCurrences: Item[] = [
    {
      icon: "view-dashboard-outline",
      title: "204.225-70",
      status: "",
      hiddenStatus: "02:00 hrs",
    }
  ];


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "bottom"]} onLayout={onLayoutRootView}>
        <View style={styles.content}>
          <InfoHeader icon="egg-outline" title="Chokedex" />
          <InfoCard data={listConnection} showModal={false} title={"Conexão"} />
          <InfoCard data={listCurrences} showModal={true} title={"Ultima conexão"} />
          <Navbar />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
});

