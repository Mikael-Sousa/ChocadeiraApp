import React, { useCallback } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import Navbar from "../components/Navbar";
import InfoCard from '../components/InfoCard';
import InfoHeader from "../components/InfoHeader"

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
        { icon: "thermometer", title: "Tempo Ligado", status: "02:00 hrs" },
        { icon: "water", title: "Tempo Estimado Da Eclosao", status: "3 dias" },
        { icon: "cloud", title: "Quantidade de Giros", status: "37,5 °C" },
        { icon: "cloud", title: "Estado da porta", status: "37,5 °C" },
        { icon: "cloud", title: "Data Prevista", status: "37,5 °C" },

    ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "bottom"]} onLayout={onLayoutRootView}>
        <View style={styles.content}>
          <InfoHeader />
          <InfoCard data={list}/>
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

