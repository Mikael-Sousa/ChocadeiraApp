import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
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
  showModal: boolean;
};

export default function InfoCard({ data, showModal }: Props) {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const contentList = (
    <>
      {data.map((item, index) => (
        <Pressable
          style={styles.content}
          key={index}
          onPress={() => {
            if (showModal) {
              setVisible(true);
              setSelectedItem(index);
            }
          }}
        >
          <MaterialCommunityIcons name={item.icon} style={styles.icon} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.status}>{item.status}</Text>
        </Pressable>
      ))}
    </>
  );

  return (
    <View style={[styles.container, { flex: 1 }]}>
      {data.length >= 6 ? (
        <ScrollView>{contentList}</ScrollView>
      ) : (
        <>{contentList}</>
      )}

      <AppModal
        visible={visible}
        setVisible={setVisible}
        data={data}
        selectedItem={selectedItem}
      />
    </View>
  );
}
