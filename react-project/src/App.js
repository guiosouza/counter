import "./App.css";
import "@fontsource/inter";
import CustomStepper from "./components/CustomStepper";
import { Grid } from "@mui/joy";
import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import LinearProgressWithLabel from "./components/LinearProgressWithLabel";
import MediaCover from "./components/MediaCover";

function App() {
  const [progress, setProgress] = React.useState(0);

  return (
    <Grid container spacing={3} sx={{ flexGrow: 1 }}>
      <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }} mt={4}>
        <Card variant="outlined">
          <CardContent>
            <CustomStepper progress={progress} />
          </CardContent>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sx={{ display: "flex", justifyContent: "center" }}
        mt={4}
        p={4}
      >
        <MediaCover />
      </Grid>
      <Grid
        xs={12}
        sx={{ display: "flex", justifyContent: "center" }}
        mt={0}
        p={4}
      >
        <LinearProgressWithLabel onProgress={setProgress} />
      </Grid>
      <Grid
        xs={12}
        sx={{ display: "flex", justifyContent: "center" }}
        mt={0}
        p={4}
      >
      </Grid>
    </Grid>
  );
}

export default App;
