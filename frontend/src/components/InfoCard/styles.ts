import { StyleSheet } from "react-native";
import { COLORS } from "@/src/theme/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundMain,
    },
    content: {
        flexDirection: "row",
        padding: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: COLORS.background,
    },
    icon: {
        fontSize: 28,
        color: COLORS.primary,
    },
    title: {
        color: COLORS.primary,
    }
});