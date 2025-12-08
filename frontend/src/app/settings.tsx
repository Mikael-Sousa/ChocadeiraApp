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
      icon: "theme-light-dark",
      title: "Tema",
      status: "",
      hiddenStatus: "02:00",
    },
    {
      icon: "bell-outline",
      title: "Notificações",
      status: "",
      hiddenStatus: "02:00",
    },
    {
      icon: "translate",
      title: "Idioma",
      status: "",
      hiddenStatus: "02:00",
    },
    {
      icon: "account-cog-outline",
      title: "Conta",
      status: "",
      hiddenStatus: "02:00",
    },
    {
      icon: "information-outline",
      title: "Sobre",
      status: "",
      hiddenStatus: "02:00",
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
          <InfoHeader icon="cog" title="Configurações" />
          <InfoCard data={list} showModal={false} showMenu={true} title={""}/>
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
