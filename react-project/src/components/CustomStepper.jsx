import * as React from "react";
import Stepper from "@mui/joy/Stepper";
import Step, { stepClasses } from "@mui/joy/Step";
import StepIndicator, { stepIndicatorClasses } from "@mui/joy/StepIndicator";
import Typography, { typographyClasses } from "@mui/joy/Typography";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import SdCardAlert from "@mui/icons-material/SdCardAlert";

export default function CustomStepper({ progress }) {
  const steps = [
    { label: "Day 2", day: 2 },
    { label: "Day 4", day: 4 },
    { label: "Day 6", day: 6 },
    { label: "Day 10", day: 10 },
    { label: "Day 17", day: 17 },
    { label: "Day 25", day: 25 },
    { label: "Day 32", day: 32 },
    { label: "Day 54", day: 54 },
    { label: "Day 90", day: 90 },
    { label: "Day 111", day: 111 },
    { label: "Day 120", day: 120 },
  ];

  const currentDay = Math.floor((progress / 100) * 120); // Progresso em dias

  return (
    <Stepper
      orientation="vertical"
      sx={{
        "--Stepper-verticalGap": "2.5rem",
        "--StepIndicator-size": "2.5rem",
        "--Step-gap": "1rem",
        "--Step-connectorInset": "0.5rem",
        "--Step-connectorRadius": "1rem",
        "--Step-connectorThickness": "4px",
        "--joy-palette-success-solidBg": "var(--joy-palette-success-400)",
        [`& .${stepClasses.completed}`]: {
          "&::after": { bgcolor: "success.solidBg" },
        },
        [`& .${stepClasses.active}`]: {
          [`& .${stepIndicatorClasses.root}`]: {
            border: "4px solid",
            borderColor: "#fff",
            boxShadow: (theme) =>
              `0 0 0 1px ${theme.vars.palette.primary[500]}`,
          },
        },
        [`& .${stepClasses.disabled} *`]: {
          color: "neutral.softDisabledColor",
        },
        [`& .${typographyClasses["title-sm"]}`]: {
          textTransform: "uppercase",
          letterSpacing: "1px",
          fontSize: "10px",
        },
      }}
    >
      {steps.map((step, index) => (
        <Step
          key={index}
          completed={currentDay >= step.day}
          active={
            currentDay < step.day &&
            (index === 0 || currentDay >= steps[index - 1].day)
          }
          indicator={
            currentDay >= step.day ? (
              <StepIndicator variant="solid" color="success">
                <CheckRoundedIcon />
              </StepIndicator>
            ) : currentDay < step.day && steps[index - 1] && currentDay >= steps[index - 1].day ? (
              <StepIndicator variant="solid" color="primary">
                <SdCardAlert />
              </StepIndicator>
            ) : (
              <StepIndicator variant="solid" color="neutral">
                <CheckRoundedIcon />
              </StepIndicator>
            )
          }
        >
          <div>
            <Typography level="title-sm">Step {index + 1}</Typography>
            {step.label}
          </div>
        </Step>
      ))}
    </Stepper>
  );
}
