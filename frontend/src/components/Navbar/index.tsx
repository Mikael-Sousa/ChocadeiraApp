import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export default function Navbar() {
    const icons: ("home" | "search" | "notifications" | "settings" | "person")[] = [
        "home",
        "search",
        "notifications",
        "settings",
        "person",
    ];



    return (
        <View style={styles.navbar}>
            {icons.map((icon, index) => (
                <Ionicons key={index} name={icon} style={styles.icon} />
            ))}
        </View>
    );
}
