import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type ArrowButtonProps = {
  title: string;
};

export default function ArrowButton({ title }: ArrowButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => alert("Pressionado!")}
        style={styles.btn}
      >
        <Text style={styles.title}>{title === "left"? "<" : ">" }</Text>
      </Pressable>
    </View>
  );
}
