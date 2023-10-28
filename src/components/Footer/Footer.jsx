//materialUI
import { Container, Typography, Link, Grid, Box } from '@mui/material';
//iconos
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      mt={10}
      component='footer'
      sx={{
        position: 'sticky',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 4,
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={15}
        >
          <Grid
            item
            xs={12}
            sm={4}
          >
            <Typography
              variant='h6'
              color='text.primary'
              gutterBottom
            >
              About Us
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
            >
              We are F-STORE company, dedicated to providing the best (we can)
              service to our customers.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
          >
            <Typography
              variant='h6'
              color='text.primary'
              gutterBottom
            >
              Contact Us
            </Typography>
            <Typography
              mb={2}
              variant='body2'
              color='text.secondary'
            >
              In the home of Bag End located at 1 Bagshot Row, in Hobbiton,
              which is in the Shire, which is in Middle-earth, which is in Arda.
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              mb={2}
            >
              Email: contact@fstore.com
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
            >
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
          >
            <Typography
              variant='h6'
              color='text.primary'
              gutterBottom
            >
              Follow Us
            </Typography>
            <Link
              href='https://www.facebook.com/'
              color='inherit'
            >
              <Facebook />
            </Link>
            <Link
              href='https://www.instagram.com/'
              color='inherit'
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link
              href='https://www.twitter.com/'
              color='inherit'
            >
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography
            variant='body2'
            color='text.secondary'
            align='center'
          >
            {'Copyright © '}
            <Link
              color='inherit'
              href='https://f-store.com/'
            >
              F-STORE
            </Link>{' '}
            {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
