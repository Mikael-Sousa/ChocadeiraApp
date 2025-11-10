import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "@/src/theme/styles";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",    
        padding: 60,
        margin: 30,
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

});