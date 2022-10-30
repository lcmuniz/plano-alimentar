import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useStore } from "./store";
import Separator from "./Separator";

const createTitulo = (tr, ds) => {
  const tipos = [
    { id: "C", nome: "Café da Manhã" },
    { id: "LM", nome: "Lanche da Manhã" },
    { id: "A", nome: "Almoço" },
    { id: "LT", nome: "Lanche da Tarde" },
    { id: "J", nome: "Jantar" },
  ];
  const dias = [
    { id: 1, nome: "Domingo" },
    { id: 2, nome: "Segunda" },
    { id: 3, nome: "Terça" },
    { id: 4, nome: "Quarta" },
    { id: 5, nome: "Quinta" },
    { id: 6, nome: "Sexta" },
    { id: 7, nome: "Sábado" },
  ];
  const tipo = tipos.find((t) => t.id === tr);
  const dia = dias.find((d) => d.id === ds);
  return `${tipo.nome} - ${dia.nome}`;
};

export default function App() {
  const tipoDeRefeicao = useStore((state) => state.tipoDeRefeicao);
  const diaDaSemana = useStore((state) => state.diaDaSemana);
  const getRefeicao = useStore((state) => state.getRefeicao);

  const [titulo, setTitulo] = useState("");
  const [refeicao, setRefeicao] = useState({
    id: "0",
    alimentos: [],
  });

  useEffect(() => {
    const ref = getRefeicao(tipoDeRefeicao, diaDaSemana);
    setTitulo(createTitulo(tipoDeRefeicao, diaDaSemana));
    setRefeicao(ref);
  }, []);

  const Item = ({ item }) => {
    let style;
    if (item.startsWith("GRUPO")) {
      style = styles.itemGrupo;
    } else {
      style = styles.item;
    }
    return (
      <View>
        <View style={style}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
        <Separator />
      </View>
    );
  };
  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titulo}</Text>
      <FlatList
        data={refeicao.alimentos}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
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
  item: {
    backgroundColor: "#ccf",
    padding: 10,
  },
  itemGrupo: {
    backgroundColor: "#cfc",
    padding: 10,
  },
  itemText: {
    fontSize: 20,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
});
