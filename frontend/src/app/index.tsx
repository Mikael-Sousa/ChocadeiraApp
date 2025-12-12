import { Inter_400Regular, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InfoCard, { Item } from "../components/InfoCard";
import InfoHeader from '../components/InfoHeader';

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
      icon: "wifi",      
      title: "Wi-Fi",
      status: "",
      hiddenStatus: "",
      connection: true,
    },
    {
      icon: "bluetooth",  
      title: "Bluetooth",
      status: "",
      hiddenStatus: "",
      connection: false,
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
          <InfoHeader title="Chokedex" />
          <InfoCard data={listConnection} showModal={false} showMenu={false} title={"Conexão"} />
          <InfoCard data={listCurrences} showModal={true} showMenu={false} title={"Ultima conexão"} situations={[]}/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
});

