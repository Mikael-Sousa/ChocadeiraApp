import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
};

export default function App({ title, icon }: Props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
