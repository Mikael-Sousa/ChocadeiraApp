import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export default function InfoCard() {
    type IconName = 
        | "thermometer"
        | "water"
        | "cloud"
        | "egg";

    type Item = {
        icon: IconName;
        title: string;
        status: string;
    };

const list: Item[] = [
    { icon: "thermometer", title: "Temperatura", status: "37,5 °C" },
    { icon: "water", title: "Água", status: "500ml" },
    { icon: "cloud", title: "Ar", status: "Boa" },
    { icon: "egg", title: "Ovos", status: "6/dia" },
];

return (
    <View style={styles.container}>
        {list.map((item, index) => (
            <View style={styles.content} key={index}>
                <Ionicons name={item.icon} style={styles.icon}/>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.status}>{item.status}</Text>
            </View>
        ))}
    </View>
);
}
