import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { Pizzachart } from "../../components/PizzaChart";

export const Pizza = () => {
  return (
    <Box m="20px">
      <Header title="Gráfico em Pizza" subTitle="Barra de gráfico simples" />
      <Box height="75vh">
        <Pizzachart />
      </Box>
    </Box>
  );
};
