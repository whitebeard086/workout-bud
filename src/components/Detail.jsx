import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
      id: 1,
    },
    {
      icon: TargetImage,
      name: target,
      id: 2,
    },
    {
      icon: EquipmentImage,
      name: equipment,
      id: 3,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6" textTransform="capitalize">
          Exercises keep you strong. {name} is one of the best exercises to
          target your {target}. it will help you improve your mood and gain
          energy.
        </Typography>
        {extraDetail.map(({ icon, name, id }) => (
          <Stack key={id} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={icon}
                alt={name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
export default Detail;
