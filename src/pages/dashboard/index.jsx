import React from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Header";

export const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Painle de Controle"
          subTitle="Bem vindo ao painel de controle"
        />
      </Box>
    </Box>
  );
};
