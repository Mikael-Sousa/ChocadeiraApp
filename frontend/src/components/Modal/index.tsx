import React from "react";
import { Modal, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export type IconName =
  | "thermometer"
  | "water"
  | "time-outline"
  | "hourglass-outline"
  | "sync-outline"
  | "lock-open-outline"
  | "calendar-outline"
  | "cloud";

export type Item = {
  icon: IconName;
  title: string;
  status: string;
  hiddenStatus: string;
};

type Props = {
  visible: boolean;
  setVisible: (value: boolean) => void;
  data: Item[];
  selectedItem: number;
};

export default function AppModal({ visible, setVisible, data, selectedItem }: Props) {
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{data[selectedItem].title}</Text>
            <Text style={styles.modalValue}>{data[selectedItem].hiddenStatus}</Text>
            <Pressable style={styles.closeButton} onPress={() => setVisible(false)}>
              <Ionicons name="close" style={styles.icon} />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
