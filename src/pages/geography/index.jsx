import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { Geochart } from "../../components/GeoChart";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

export const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geográfico" subTitle="Mapa Mundi" />
      <Box
        height="75vh"
        border={`1px solid ${colors.gray[100]}`}
        borderRadius="4px"
      >
        <Geochart />
      </Box>
    </Box>
  );
};
