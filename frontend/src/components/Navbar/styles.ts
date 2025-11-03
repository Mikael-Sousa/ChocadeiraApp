import { StyleSheet } from "react-native";
import { COLORS } from "@/src/theme/styles";

export const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    width: "100%",         // <- largura total
    backgroundColor: COLORS.background,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    position: "absolute",  // <- fixa no fundo
    bottom: 0,       
  },
  icon: {
    fontSize: 28,
    color: COLORS.primary,
  },
});