import { Container, Grid, List, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import BlogIcon from '@mui/icons-material/LocalLibrary';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

const FooterWrapper = styled('footer')(({ theme }) => ({
  backgroundColor: '#010101',
  color: '#fff',
  padding: theme.spacing(3, 0),
  fontFamily: "'Comfortaa', cursive;",
  display: 'flex',
  flexDirection: 'column',
  '& $FooterCol': {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(1, 0),
  },

  '& $SocialLink': {
    margin: theme.spacing(1),
    backgroundColor: '#fff',
    color: '#212121',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    transition: 'all 0.5s ease',
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: '#fff',
    },
  },
}));

const FooterCol = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexBasis: '100%',
  },
}));

const FooterTitle = styled('h4')(({ theme }) => ({
  fontSize: 18,
  fontWeight: 500,
  textTransform: 'capitalize',
  position: 'relative',
  marginBottom: theme.spacing(2),
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: -8,
    width: 30,
    height: 2,
    backgroundColor: 'red',
  },
}));

const FooterLink = styled('a')(({ theme }) => ({
  color: '#fff',
  fontSize: 14,
  fontWeight: 300,
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: 'grey',
    paddingLeft: theme.spacing(1),
  },
}));

const SocialLink = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  color: '#fff',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  transition: 'all 0.5s ease',
  '&:hover': {
    color: 'white',
    backgroundColor: 'grey',
  },
}));

export default function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} md={4}>
            <FooterCol>
              <FooterTitle>General</FooterTitle>
              <List>
                <ListItem disableGutters>
                  <FooterLink href="/#aboutme">About me</FooterLink>
                </ListItem>
                <ListItem disableGutters>
                  <FooterLink href="/#companies">Companies</FooterLink>
                </ListItem>
                <ListItem disableGutters>
                  <FooterLink href="/#skills">Skills</FooterLink>
                </ListItem>
                <ListItem disableGutters>
                  <FooterLink href="/#projects">Projects</FooterLink>
                </ListItem>
              </List>
            </FooterCol>
          </Grid>
          <Grid item xs={12} md={4}>
            <FooterCol>
              <FooterTitle>Legal</FooterTitle>
              <List>
                <ListItem disableGutters>
                  <FooterLink href="/legal/tou">Terms of Use</FooterLink>
                </ListItem>
                <ListItem disableGutters>
                  <FooterLink href="/legal/disclaimer">Disclaimer</FooterLink>
                </ListItem>
                <ListItem disableGutters>
                  <FooterLink href="/legal/privacy">Privacy</FooterLink>
                </ListItem>
                <ListItem disableGutters>
                  <FooterLink href="/legal/security">Security</FooterLink>
                </ListItem>
              </List>
            </FooterCol>
          </Grid>
          <Grid item xs={12} md={4}>
            <FooterCol>
              <FooterTitle>Connect with me</FooterTitle>
              <List>
                <ListItem disableGutters>
                  <SocialLink href="https://github.com/cryxnet">
                    <GitHubIcon />
                  </SocialLink>
                  <SocialLink href="https://www.linkedin.com/in/ruben-manser/">
                    <LinkedInIcon />
                  </SocialLink>
                  <SocialLink href="https://github.com/cryxnet">
                    <BlogIcon />
                  </SocialLink>
                  <SocialLink href="mailto:cryxnet@proton.me">
                    <MailIcon />
                  </SocialLink>
                </ListItem>
              </List>
            </FooterCol>
          </Grid>
        </Grid>
        <Typography variant="subtitle2" align="center">
          © {new Date().getFullYear()} CRYXNET. All rights reserved.
        </Typography>
      </Container>
    </FooterWrapper>
  );
}
