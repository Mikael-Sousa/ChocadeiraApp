import { View, Text } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import * as SystemUI from "expo-system-ui";


export default function App() {
    useEffect(() => {
        SystemUI.setBackgroundColorAsync("#121212");
    }, []);
    return (
        <View style={styles.container}>
            <Ionicons name="checkmark-circle" style={styles.icon} />
            <Text style={styles.title}>Dados Gerais </Text>
        </View>
    );
}
