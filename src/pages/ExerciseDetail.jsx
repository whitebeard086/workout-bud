import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { getExercises, exerciseOptions } from "../utils/getExercises";
import { Detail, ExerciseVideos, SimilarExercises } from "../components";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await getExercises(
        `${exerciseDbUrl}/exercises/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};
export default ExerciseDetail;
