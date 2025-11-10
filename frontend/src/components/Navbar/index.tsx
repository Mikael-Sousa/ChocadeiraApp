import React from "react";
import { View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Href, useRouter } from "expo-router";


export default function Navbar() {
    const router = useRouter();

     type IconName = 
        | "home"
        | "stats-chart"
        | "notifications"
        | "thermometer"
        | "person";

    type Item = {
        icon: IconName;
        route: Href;
    };

const list: Item[] = [
    { icon: "home", route: "/" },
    { icon: "stats-chart", route: "/search" },
    { icon: "thermometer", route: "/settings" },
    { icon: "notifications", route: "/notifications" },
    { icon: "person", route: "/profile" },
];


    return (
        <View style={styles.navbar}>
            {list.map((item, index) => (
                <Pressable  key={index} onPress={() => router.push(item.route)}>
                    <Ionicons name={item.icon} style={styles.icon} />
                </Pressable>
            ))}
        </View>

    );
}
