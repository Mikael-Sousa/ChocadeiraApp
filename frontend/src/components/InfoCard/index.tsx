import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

type IconName =
        | "thermometer"
        | "water"
        | "cloud";

    type Item = {
        icon: IconName;
        title: string;
        status: string;
    };

type Props = {
  data: Item[];
};
export default function InfoCard({data} : Props) {

    return (
        <View style={styles.container}>
            {data.map((item, index) => (
                <View style={styles.content} key={index}>
                    <Ionicons name={item.icon} style={styles.icon} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.status}>{item.status}</Text>
                </View>
            ))}
        </View>
    );
}
