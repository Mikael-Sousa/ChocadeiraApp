import React, { useCallback } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import Navbar from "../components/Navbar";
import InfoCard from '../components/InfoCard';
import StatusHeader from '../components/StatusHeader';
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";

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

  type IconName =
    | "thermometer"
    | "water"
    | "cloud";

  type Item = {
    icon: IconName;
    title: string;
    status: string;
  };

  const list: Item[] = [
    { icon: "thermometer", title: "Umidade", status: "37,5 °C" },
    { icon: "water", title: "Temperatura Água", status: "37,5 °C" },
    { icon: "cloud", title: "Temperatura Ar", status: "37,5 °C" },
  ]

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "bottom"]} onLayout={onLayoutRootView}>
        <View style={styles.content}>
          <StatusHeader />
          <InfoCard data={list} />
          <Navbar />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

