import React from "react";
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { styles, chartProps } from "./styles";

export default function ChartCard() {
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
          datasets: [{ data: [36.5, 37.0, 37.2, 37.5, 37.4, 37.8] }],
        }}
        {...chartProps}
        style={styles.chart} // 🔹 centraliza visualmente
      />
    </View>
  );
}
