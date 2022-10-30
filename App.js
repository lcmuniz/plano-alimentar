import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DiaDaSemana from "./src/DiaDaSemana";
import TipoDeRefeicao from "./src/TipoDeRefeicao";
import Refeicao from "./src/Refeicao";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TipoDeRefeicao"
          options={{ title: "Tipo de Refeição" }}
          component={TipoDeRefeicao}
        />
        <Stack.Screen
          name="DiaDaSemana"
          options={{ title: "Dia da Semana" }}
          component={DiaDaSemana}
        />
        <Stack.Screen
          name="Refeicao"
          options={{ title: "Refeição" }}
          component={Refeicao}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
