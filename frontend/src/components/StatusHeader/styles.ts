import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "@/src/theme/styles";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 60,
        margin: 10,
        gap: 20,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.background,
        width: "100%",
    },

    title: {
        color: COLORS.primary,
        fontSize: FONTS.fontSize2,
        fontFamily: FONTS.fontMain
    },

    icon: {
        fontSize: FONTS.fontSize3,
        color: COLORS.primary,
    },

    content1: {
        flexDirection: "row",        
        alignItems: "center",       
        justifyContent: "center",
        width: "100%",               
        backgroundColor: COLORS.background,
    },

    content2: {
        flexDirection: "row",        // 🔹 coloca os itens lado a lado
        alignItems: "center",        // 🔹 centraliza verticalmente
        justifyContent: "space-evenly",
        width: "100%",               // 🔹 garante que ocupe toda a largura
        backgroundColor: COLORS.background,
    },
});