import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

export default function LinearProgressWithLabel({ onProgress }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const calculateProgress = () => {
      const startDate = new Date('2024-08-31T20:00:00');
      const endDate = new Date('2024-12-31T00:00:00');
      const currentDate = new Date();

      const totalMinutes = (endDate - startDate) / 1000 / 60;
      const elapsedMinutes = (currentDate - startDate) / 1000 / 60;

      const progressPercentage = (elapsedMinutes / totalMinutes) * 100;

      return Math.min(progressPercentage, 100);
    };

    const timer = setInterval(() => {
      const newProgress = calculateProgress();
      setProgress(newProgress);
      if (onProgress) onProgress(newProgress);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [onProgress]);

  return (
    <Box
      sx={{
        bgcolor: 'white',
        width: '100%',
        padding: '8px',
      }}
    >
      <Typography
        level="body-xs"
        fontWeight="xl"
        textColor="black"
        sx={{ marginBottom: '8px' }}
      >
        Desafio de 120 dias: {progress.toFixed(6)}%
      </Typography>
      <LinearProgress
        determinate
        variant="outlined"
        color="neutral"
        size="sm"
        thickness={32}
        value={progress}
        sx={{
          '--LinearProgress-radius': '0px',
          '--LinearProgress-progressThickness': '24px',
          boxShadow: 'sm',
          borderColor: 'neutral.500',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Typography
          level="body-xs"
          fontWeight="xl"
          textColor="common.white"
          sx={{ mixBlendMode: 'difference' }}
        >
          {progress.toFixed(6)}%
        </Typography>
      </LinearProgress>
    </Box>
  );
}
