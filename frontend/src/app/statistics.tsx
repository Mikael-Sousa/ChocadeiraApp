import { Inter_400Regular, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InfoCard, { Item } from "../components/InfoCard";
import InfoHeader from "../components/InfoHeader";
import Navbar from "../components/Navbar";
import { COLORS } from "../theme/styles";

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
    {
      icon: "clock-outline",
      title: "Tempo Ligado",
      status: "",
      hiddenStatus: "02:00",
    },
    {
      icon: "egg-outline",
      title: "Tempo p/ Eclosão",
      status: "",
      hiddenStatus: "20 dias",
    },
    {
      icon: "sync",
      title: "Giros Diários",
      status: "",
      hiddenStatus: "6/dia",
    },
    {
      icon: "door-open",
      title: "Estado da Porta",
      status: "",
      hiddenStatus: "Aberta",
    },
    {
      icon: "calendar-month-outline",
      title: "Data Prevista",
      status: "",
      hiddenStatus: "01/01/2026",
    },
    
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        edges={["top", "bottom"]}
        onLayout={onLayoutRootView}
      >
        <View style={styles.content}>
          <InfoHeader icon={"chart-box-outline"} title={"Dados Gerais"}/>
          <InfoCard data={list} showModal={true} title={""} />
          <Navbar />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundMain,
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
