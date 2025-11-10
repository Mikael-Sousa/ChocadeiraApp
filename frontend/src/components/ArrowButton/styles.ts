import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "@/src/theme/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    },

    btn: {
        backgroundColor: COLORS.background,
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 8,
        borderColor: COLORS.primary,
        borderWidth: 2
    },

    title: {
        color: COLORS.primary,
        fontSize: FONTS.fontSize1,
        fontFamily: FONTS.fontMain
    },

});