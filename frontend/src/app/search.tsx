import React, { useCallback } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import Navbar from "../components/Navbar";
import InfoCard, { Item } from '../components/InfoCard';
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

  const list: Item[] = [
    { icon: "time-outline", title: "Tempo Ligado", status: "", hiddenStatus: "02:00" },
    { icon: "hourglass-outline", title: "Tempo p/ a Eclosão", status: "", hiddenStatus: "20 dias"},
    { icon: "sync-outline", title: "Quantidade de Giros", status: "", hiddenStatus: "6/dia"},
    { icon: "lock-open-outline", title: "Estado da Porta", status: "", hiddenStatus: "aberta"},
    { icon: "calendar-outline", title: "Data Prevista", status: "", hiddenStatus: "01/01/2026"},
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "bottom"]} onLayout={onLayoutRootView}>
        <View style={styles.content}>
          <InfoHeader />
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

