import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { Text, View } from "react-native";
import ArrowButton from "../ArrowButton";
import ChartCard from "../ChartCard";
import { styles } from "./styles";

type Props = {
    title: string;
    indexSelected: number;
    setIndexSelected: React.Dispatch<React.SetStateAction<number>>;
    data: number[][];
};


export default function App({ indexSelected, setIndexSelected, data, title}: Props) {
    useEffect(() => {
        SystemUI.setBackgroundColorAsync("#121212");
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.content1}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.content2}>
                <ArrowButton title="left" setIndexSelected={setIndexSelected} />
                <ChartCard indexSelected={indexSelected} data={data}/>
                <ArrowButton title="right" setIndexSelected={setIndexSelected} />
            </View>
        </View>
    );
}
