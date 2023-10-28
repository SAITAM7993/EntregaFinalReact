//materialUI
import { Box, Typography, Stack } from '@mui/material';

//imagenes
import programmer1 from '../../../assets/img/programmer-1.jpg';

//componentes personalizados
import Title from '../../Title/Title';

const About = () => {
  return (
    <>
      <Title title='ABOUT US' />

      <Box sx={{ width: '100%' }}>
        <Stack
          spacing={5}
          direction='column'
          useFlexGap
          flexWrap='wrap'
        >
          <Typography variant='body1'>
            We are F-STORE company, dedicated to providing the best (we can)
            service to our customers.
          </Typography>
          <Typography variant='h5'>
            Our story
            <Typography
              mt={2}
              variant='body1'
            >
              Founded in 2015, F-STORE (Fake-Store) was born out of a passion
              for NOT sell products. Our founder, Matias Sanguinet, started this
              journey to bring average-quality, affordable fake products to some
              people.
            </Typography>
          </Typography>

          <Typography variant='h5'>
            Mission and Values
            <Typography
              mt={2}
              variant='body1'
            >
              At F-STORE, our mission is simple: to provide NOTHING that exceeds
              expectations, and to do so with some integrity, a bit of
              transparency, and zero commitment to environmental sustainability.
            </Typography>
          </Typography>

          <Typography variant='h5'>
            Our team
            <Typography
              variant='body1'
              my={2}
            >
              Meet the faces behind F-STORE. Our team is made up of ONLY ONE
              dedicated individual who bring diverse expertise to the table,
              from product design to customer support.
            </Typography>
            <Box
              component='img'
              sx={{
                height: 250,

                maxHeight: { xs: 150, md: 250 },
                maxWidth: { xs: 250, md: 400 },
              }}
              alt='programmer crying.'
              src={programmer1}
            />
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default About;
