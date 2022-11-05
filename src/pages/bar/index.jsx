import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { Barchart } from "../../components/BarChart";

export const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Barra de gráficos" subTitle="Barra de gráfico simples" />
      <Box height="75vh">
        <Barchart />
      </Box>
    </Box>
  );
};
