import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { Linechart } from "../../components/LineChart";

export const Line = () => {
  return (
    <Box m="20px">
      <Header title="Gráfico em linhas" subTitle="Barra de gráfico simples" />
      <Box height="75vh">
        <Linechart />
      </Box>
    </Box>
  );
};
