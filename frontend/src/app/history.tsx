import React, { useCallback } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import Navbar from "../components/Navbar";
import InfoHeader from "../components/InfoHeader";
import InfoCard, { Item } from "../components/InfoCard";
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
      icon: "calendar-month-outline",
      title: "06/01/2026",
      status: "",
      hiddenStatus: "02:00",
    },
    {
      icon: "calendar-month-outline",
      title: "05/01/2026",
      status: "",
      hiddenStatus: "20 dias",
    },
    {
      icon: "calendar-month-outline",
      title: "04/01/2026",
      status: "",
      hiddenStatus: "6/dia",
    },
    {
      icon: "calendar-month-outline",
      title: "03/01/2026",
      status: "",
      hiddenStatus: "Aberta",
    },
    {
      icon: "calendar-month-outline",
      title: "02/01/2026",
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
          <InfoHeader icon="history" title="Historico" />
          <InfoCard data={list} showModal={false} title={""}/>
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
