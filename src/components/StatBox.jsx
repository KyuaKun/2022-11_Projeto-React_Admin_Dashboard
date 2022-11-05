import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";
import { ProgressCircle } from "./ProgressCircle";

export const StatBox = ({ title, subTitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        {icon}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            colors: colors.gray[100],
          }}
        >
          {title}
        </Typography>

        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            colors: colors.greenAccent[100],
          }}
        >
          {subTitle}
        </Typography>
        <Typography
          variant="h5"
          fontWeight="italic"
          sx={{
            colors: colors.greenAccent[600],
          }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};
