import React from "react";
import { View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Href, useRouter } from "expo-router";


export default function Navbar() {
    const router = useRouter();

     type IconName = 
        | "home"
        | "search"
        | "notifications"
        | "settings"
        | "person";

    type Item = {
        icon: IconName;
        route: Href;
    };

const list: Item[] = [
    { icon: "home", route: "/" },
    { icon: "search", route: "/search" },
    { icon: "notifications", route: "/notifications" },
    { icon: "settings", route: "/settings" },
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
