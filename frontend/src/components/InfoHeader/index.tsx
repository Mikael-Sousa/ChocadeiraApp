import { View, Text } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="chart-box-outline" style={styles.icon} />
      <Text style={styles.title}>Dados Gerais</Text>
    </View>
  );
}
