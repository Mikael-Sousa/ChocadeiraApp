import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type ArrowButtonProps = {
  title: string;
  setIndexSelected: React.Dispatch<React.SetStateAction<number>>;
};

export default function ArrowButton({ title, setIndexSelected }: ArrowButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
  setIndexSelected(prev => {
    const max = 2;
    const direction = title === "left" ? -1 : 1;

    const next = prev + direction;

    if (next < 0) return max;
    if (next > max) return 0;

    return next;
  })
}

        style={styles.btn}
      >
        <Text style={styles.title}>{title === "left" ? "<" : ">"}</Text>
      </Pressable>
    </View>
  );
}
