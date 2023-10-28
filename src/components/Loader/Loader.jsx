import { CircularProgress, Box } from '@mui/material';

const Loader = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{ width: '100%', height: 250 }}
    >
      <CircularProgress
        color='secondary'
        disableShrink
      />
    </Box>
  );
};

export default Loader;
