// Disclaimer
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TermsOfUse() {
  return (
    <Box
      sx={{
        marginTop: 20,
        textAlign: 'center',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 20,
      }}
    >
      <Typography variant="h1">Disclaimer</Typography>
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="p">
          The information provided on this website is for educational and
          informational purposes only. The content presented here may include
          information about hacking and other cybersecurity-related topics that
          could be used to engage in illegal activities. The creators of this
          website do not condone or encourage any illegal activities or use of
          the information presented for any illegal purposes. It is your
          responsibility to ensure that your actions comply with all applicable
          laws and regulations. The creators of this website will not be held
          liable for any damages or legal issues that may arise from the use of
          the information provided here.
        </Typography>
      </Box>
    </Box>
  );
}
