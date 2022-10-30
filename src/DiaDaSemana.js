import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import Separator from "./Separator";
import { useStore } from "./store";
import refeicao2 from "../assets/refeicao2.png";

export default function App({ navigation }) {
  const setDiaDaSemana = useStore((state) => state.setDiaDaSemana);

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={refeicao2} style={styles.image} resizeMode="cover" />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setDiaDaSemana(1);
          navigation.navigate("Refeicao");
        }}
      >
        <Text style={{ color: "white" }}>Domingo</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setDiaDaSemana(2);
          navigation.navigate("Refeicao");
        }}
      >
        <Text style={{ color: "white" }}>Segunda</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setDiaDaSemana(3);
          navigation.navigate("Refeicao");
        }}
      >
        <Text style={{ color: "white" }}>Terça</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setDiaDaSemana(4);
          navigation.navigate("Refeicao");
        }}
      >
        <Text style={{ color: "white" }}>Quarta</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setDiaDaSemana(5);
          navigation.navigate("Refeicao");
        }}
      >
        <Text style={{ color: "white" }}>Quinta</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setDiaDaSemana(6);
          navigation.navigate("Refeicao");
        }}
      >
        <Text style={{ color: "white" }}>Sexta</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setDiaDaSemana(7);
          navigation.navigate("Refeicao");
        }}
      >
        <Text style={{ color: "white" }}>Sábado</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  imageView: {
    flex: 0.8,
    backgroundColor: "white",
    marginBottom: 10,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
