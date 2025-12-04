import React from "react";
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { chartProps, styles } from "./styles";

type Props = {
  indexSelected: number;
  data: number[][];
};

export default function ChartCard({ indexSelected, data }: Props) {
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: ["1", "2", "3", "4", "5"],
          datasets: [{ data: data[indexSelected] }],
        }}
        {...chartProps}
        style={styles.chart}
      />
    </View>
  );
}
