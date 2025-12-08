import { Inter_400Regular, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InfoCard, { Item } from "../components/InfoCard";
import InfoHeader from "../components/InfoHeader";

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
      icon: "calendar-month",
      title: "06/01/2026",
      status: "",
      hiddenStatus: "02:00",
    },
    {
      icon: "calendar",
      title: "05/01/2026",
      status: "",
      hiddenStatus: "20 dias",
    },
    {
      icon: "calendar-today",
      title: "04/01/2026",
      status: "",
      hiddenStatus: "6/dia",
    },
    {
      icon: "calendar-week",
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
    {
      icon: "calendar-week-outline",
      title: "03/01/2026",
      status: "",
      hiddenStatus: "Aberta",
    },
    {
      icon: "calendar-today-outline",
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
          <InfoCard data={list} showModal={false} showMenu={false} title={""}/>
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
    alignItems: "center",
  },
});
