import { Box, useTheme, Typography } from "@mui/material";
import { Header } from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

export const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Perguntas Recorrentes" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Pergunta 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Pergunta 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Pergunta 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Pergunta 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Pergunta 5
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Pergunta 6
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Pergunta 7
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Pergunta 8
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Pergunta 9
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Pergunta 10
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
