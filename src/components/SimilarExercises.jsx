import { Box, Stack, Typography } from "@mui/material";

import { HorizontalScrollbar, Loader } from ".";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={10} mt={15} textTransform="capitalize" fontWeight="bold">
        similar <span style={{ color: '#FF2625' }}>target muscle</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={10} mt={20} textTransform="capitalize" fontWeight="bold">
        similar <span style={{ color: '#FF2625' }}>equipment</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};
export default SimilarExercises;
