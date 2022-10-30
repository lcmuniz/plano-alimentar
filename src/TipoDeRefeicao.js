import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";

import Separator from "./Separator";
import { useStore } from "./store";
import refeicao1 from "../assets/refeicao1.jpg";

export default function App({ navigation }) {
  const setTipoDeRefeicao = useStore((state) => state.setTipoDeRefeicao);

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={refeicao1} style={styles.image} resizeMode="cover" />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setTipoDeRefeicao("C");
          navigation.navigate("DiaDaSemana");
        }}
      >
        <Text style={{ color: "white" }}>Café da Manhã</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setTipoDeRefeicao("LM");
          navigation.navigate("DiaDaSemana");
        }}
      >
        <Text style={{ color: "white" }}>Lanche da Manhã</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setTipoDeRefeicao("A");
          navigation.navigate("DiaDaSemana");
        }}
      >
        <Text style={{ color: "white" }}>Almoço</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setTipoDeRefeicao("LT");
          navigation.navigate("DiaDaSemana");
        }}
      >
        <Text style={{ color: "white" }}>Lanche da Tarde</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setTipoDeRefeicao("J");
          navigation.navigate("DiaDaSemana");
        }}
      >
        <Text style={{ color: "white" }}>Jantar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  imageView: {
    flex: 0.5,
    backgroundColor: "white",
    marginBottom: 10,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
