import create from "zustand";
import refeicoes from "./data";

const refeicoesx = [];
const useStore = create((set) => ({
  tipoDeRefeicao: "C",
  diaDaSemana: 1,
  getRefeicao: (tr, ds) => {
    const ref = refeicoes.filter((r) => r.id === tr + ds);
    return ref.length > 0 ? ref[0] : { id: "0" };
  },
  setTipoDeRefeicao: (valor) => set((state) => ({ tipoDeRefeicao: valor })),
  setDiaDaSemana: (valor) => set((state) => ({ diaDaSemana: valor })),
  setRefeicao: (valor) => set((state) => ({ refeicao: valor })),
}));

export { useStore };
