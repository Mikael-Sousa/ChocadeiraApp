import { View } from 'react-native';
import InfoCard from '../components/InfoCard';
import Navbar from "../components/Navbar";
import { COLORS } from '../theme/styles';
import ChartCard from '../components/ChartCard';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.backgroundMain }}>
      <ChartCard /> 
      <InfoCard />
      <Navbar />
    </View>
  );
}
