import { Inter_400Regular, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InfoCard, { Item } from "../components/InfoCard";
import StatusHeader from "../components/StatusHeader";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [indexSelected, setIndexSelected] = useState(0)

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  const dataTemp = [
    [36.5, 37.0, 37.2, 37.5, 37.4], // humidityTemp
    [32.5, 37.0, 39.2, 47.5, 51.4], // waterTemp
    [32.5, 37.0, 39.2, 39.5, 23.4], // airTemp
  ];

  const situations = dataTemp.map(row => {
  const valor = row[4];
  
  if (valor > 42) return "red";
  if (valor < 32) return "blue";
  return "ok";
});



  const list: Item[] = [
    {
      icon: "thermometer",
      title: "Umidade",
      status: `${dataTemp[0][4]} °C`,
      hiddenStatus: ""
    },
    {
      icon: "water",
      title: "Temp. da Agua",
      status: `${dataTemp[1][4]} °C`,
      hiddenStatus: ""
    },
    {
      icon: "weather-windy",
      title: "Temp. do Ar",
      status: `${dataTemp[2][4]} °C`,
      hiddenStatus: ""
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
          <StatusHeader
            title={list[indexSelected].title}
            indexSelected={indexSelected}
            setIndexSelected={setIndexSelected}
            data={dataTemp} />
          <InfoCard data={list} showModal={false} showMenu={false} title={""} situations={situations} />
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
