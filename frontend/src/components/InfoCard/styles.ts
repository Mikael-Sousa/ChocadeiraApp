import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "@/src/theme/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundMain,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: "space-between",
        width: "100%",
        bottom: 60,
    },
    content: {
        flexDirection: "row",
        padding: 20,
        borderRadius: 8,
        alignItems: "center",
        flex: 1,
        marginVertical: 5,
        backgroundColor: COLORS.background,
        justifyContent: "space-between",
        fontFamily: FONTS.fontMain,
    },
    icon: {
        fontSize: 28,
        color: COLORS.primary,
    },
    title: {
        color: COLORS.primary,
        fontFamily: FONTS.fontMain,
        fontSize: FONTS.fontSize1,
    },

    status: {
        color: COLORS.primary,
        fontFamily: FONTS.fontMain,
        fontSize: FONTS.fontSize1,
    },
});