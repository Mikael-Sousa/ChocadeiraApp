import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import AppModal from "../Modal";

export type IconName =
  | "thermometer"
  | "water"
  | "egg-outline"
  | "clock-outline"
  | "sync"
  | "door-open"
  | "calendar-month-outline"
  | "weather-windy";

export type Item = {
  icon: IconName;
  title: string;
  status: string;
  hiddenStatus: string;
};

type Props = {
  data: Item[];
};

export default function InfoCard({ data }: Props) {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <Pressable
          style={styles.content}
          key={index}
          onPress={() => {
            setVisible(true);
            setSelectedItem(index);
          }}
        >
          <MaterialCommunityIcons name={item.icon} style={styles.icon} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.status}>{item.status}</Text>
        </Pressable>
      ))}
      <AppModal
        visible={visible}
        setVisible={setVisible}
        data={data}
        selectedItem={selectedItem}
      />
    </View>
  );
}
