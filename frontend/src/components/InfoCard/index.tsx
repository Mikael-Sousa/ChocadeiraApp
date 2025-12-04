import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import AppModal from "../Modal";
import { styles } from "./styles";

export type IconName =
  | "thermometer"
  | "water"
  | "egg-outline"
  | "clock-outline"
  | "sync"
  | "door-open"
  | "calendar-month-outline"
  | "weather-windy"
  | "bluetooth"
  | "wifi"
  | "numeric"
  | "view-dashboard-outline";

export type Item = {
  icon: IconName;
  title: string;
  status: string;
  hiddenStatus: string;
};

type Props = {
  data: Item[];
  showModal: boolean;
  title: string;
};

export default function InfoCard({ data, showModal, title }: Props) {
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
      <Text style={styles.title}>{title}</Text>
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
