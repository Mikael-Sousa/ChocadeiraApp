import React from "react";
import { View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Href, useRouter } from "expo-router";

export default function Navbar() {
  const router = useRouter();

  type IconName =
    | "home"
    | "chart-bar"
    | "thermometer"
    | "history"
    | "account";

  type Item = {
    icon: IconName;
    route: Href;
  };

  const list: Item[] = [
    { icon: "home", route: "/" },
    { icon: "chart-bar", route: "/search" },
    { icon: "thermometer", route: "/settings" },
    { icon: "history", route: "/notifications" },
    { icon: "account", route: "/profile" },
  ];

  return (
    <View style={styles.navbar}>
      {list.map((item, index) => (
        <Pressable key={index} onPress={() => router.push(item.route)}>
          <MaterialCommunityIcons
            name={item.icon}
            style={styles.icon}
          />
        </Pressable>
      ))}
    </View>
  );
}
