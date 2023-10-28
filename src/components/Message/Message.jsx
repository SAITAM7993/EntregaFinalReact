//materialUI
import { Alert, Stack, Snackbar } from '@mui/material';

//otros
import { useState } from 'react';

//type: error, warning, info, success
const Message = ({ type, message }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2}>
      <Snackbar
        open={open}
        sx={{ width: '30%', height: '100%' }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert
          variant='filled'
          onClose={handleClose}
          severity={type}
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Message;
