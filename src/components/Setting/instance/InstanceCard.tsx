import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import MemoryIcon from "@mui/icons-material/Memory";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import CodeIcon from "@mui/icons-material/Code";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  serverVersion: string;
  uptime: string;
  startedAt: string;
  status: string;
  memory: string;
}

const BoxWithProps = ({ children }: { children: React.ReactNode }) => (
  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>{children}</Box>
);

const InfoBox = ({ icon, text }: { icon?: React.ReactNode; text: string }) => (
  <BoxWithProps>
    {icon}
    <Typography variant="body2" color="text.secondary">
      {text}
    </Typography>
  </BoxWithProps>
);
export default function InstanceCard({ ...rest }: Props) {
  const [startTime] = React.useState(new Date());

  const getStatusIcon = () => {
    const statusColor = rest.status === "Running" ? "green" : "#dd2c00";
    const Icon =
      rest.status === "Running" ? PlayCircleFilledIcon : PowerSettingsNewIcon;
    return <Icon sx={{ color: statusColor, mr: 1 }} />;
  };

  const navigate = useNavigate();
  const location = useLocation();

  const onClick = () => {
    const instancePath = `${location.pathname}/${rest.id}`;
    navigate(instancePath);
    window.location.reload();
  };

  return (
    <CardActionArea onClick={onClick}>
      <CardContent sx={{ height: "auto", backgroundColor: "#f3f3f3" }}>
        <Box sx={{ marginBottom: "1rem" }}>
          <Typography variant="h5" component="div">
            {rest.name}
          </Typography>
        </Box>

        <InfoBox
          icon={<MemoryIcon sx={{ marginRight: "0.5rem" }} />}
          text={`Memory: ${rest.memory}`}
        />

        <InfoBox icon={getStatusIcon()} text={`Uptime: ${rest.uptime}`} />

        <InfoBox
          icon={<AccessTimeIcon sx={{ marginRight: "0.5rem" }} />}
          text={`Started at: ${startTime.toLocaleString()}`}
        />

        <InfoBox
          icon={<CodeIcon sx={{ marginRight: "0.5rem" }} />}
          text={rest.serverVersion}
        />

        <Box>
          <Typography
            variant="body2"
            color={rest.status === "Running" ? "green" : "text.secondary"}
          >
            {rest.status}
          </Typography>
        </Box>
      </CardContent>
    </CardActionArea>
  );
}
export const AddCard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = () => {
    const instancePath = `${location.pathname}/add`;
    navigate(instancePath);
  };
  return (
    <CardActionArea
      sx={{
        backgroundColor: "#f0f0f0",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
      }}
      onClick={onClick}
    >
      <AddCircleOutlineIcon sx={{ fontSize: 55, color: "primary.main" }} />

      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ textAlign: "center" }}
      >
        Add a new instance
      </Typography>
    </CardActionArea>
  );
};
