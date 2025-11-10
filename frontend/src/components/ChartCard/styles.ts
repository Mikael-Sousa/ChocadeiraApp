// src/components/ChartCard/styles.ts
import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "@/src/theme/styles";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.backgroundMain,
    borderRadius: 14,

    marginVertical: 8,
    width: "60%",
    alignSelf: "center",
    elevation: 5,
  },

  title: {
    color: COLORS.primary,
    fontSize: 16,
    marginBottom: 6,
    fontWeight: "bold",
  },

  chart: {
    borderRadius: 12,
  },
});

export const chartProps = {
  width: screenWidth * 0.6,
  height: 80,
  withDots: true,
  withInnerLines: false,
  withOuterLines: false,
  withShadow: false,
  bezier: true,
  chartConfig: {
    backgroundColor: COLORS.background,
    backgroundGradientFrom: COLORS.background,
    backgroundGradientTo: COLORS.background,
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity * 0.8})`,
    propsForDots: {
      r: "4",
      strokeWidth: "2",
      stroke: COLORS.secondary,
    },
    propsForBackgroundLines: {
      strokeDasharray: "", // remove tracejado
    },
  },
};
