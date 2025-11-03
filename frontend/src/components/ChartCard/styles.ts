import { StyleSheet } from "react-native";
import { COLORS } from "@/src/theme/styles";

export const styles = StyleSheet.create({
    content: {
        padding: 80,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.background,
    },

    title: {
        color: COLORS.primary,
    }
});