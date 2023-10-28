//materialUI
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Header = ({ title, subtitle }) => {
  const CustomBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '100px',
    color: '#FFFFFF',
    fontWeight: '500',

    [theme.breakpoints.down('sm')]: {
      fontSize: '48px',
    },
  }));

  const Subtitle = styled(Typography)(({ theme }) => ({
    fontSize: '32px',
    color: '#FFFFFF',
    fontWeight: '300',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  }));

  return (
    <>
      <Box
        height={300}
        sx={{
          background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
        }}
      >
        <CustomBox>
          <Box
            m={13}
            sx={{ flexGrow: 1 }}
          >
            <Subtitle
              variant='body2'
              noWrap={true}
            >
              {subtitle}
            </Subtitle>
            <Title
              variant='h1'
              noWrap={true}
            >
              {title}
            </Title>
          </Box>
        </CustomBox>
      </Box>
    </>
  );
};
export default Header;
{
  /* nowrap para que no se corten las palabras 
  background: 'linear-gradient(to right bottom, #430089, #82ffa1) hago que el fondo tenga un gradiente en vez de color fijo*/
}
