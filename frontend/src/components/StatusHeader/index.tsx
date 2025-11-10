import { View, Text } from "react-native";
import { styles } from "./styles";
import ChartCard from "../ChartCard";
import { Ionicons } from "@expo/vector-icons";
import ArrowButton from "../ArrowButton";
import { useEffect } from "react";
import * as SystemUI from "expo-system-ui";


export default function App() {
    useEffect(() => {
        SystemUI.setBackgroundColorAsync("#121212");
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.content1}>
                <Ionicons name="checkmark-circle" style={styles.icon} />
                <Text style={styles.title}>Tudo certo</Text>
            </View>
            <View style={styles.content2}>
                <ArrowButton title="left" />
                <ChartCard />
                <ArrowButton title="right" />
            </View>
        </View>
    );
}
