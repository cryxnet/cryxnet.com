// Privacy Policy
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Privacy() {
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
      <Typography variant="h1">Privacy Policy</Typography>
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="p">
          This privacy policy sets out how cryxnet.com ("i", "we" or "us") uses
          and protects any information that you give us when you use this
          website/application. We are committed to ensuring that your privacy is
          protected. Should we ask you to provide certain information by which
          you can be identified when using this website/application, you can be
          assured that it will only be used in accordance with this privacy
          statement. We do not collect any personally identifiable information
          from you when you use this website/application. We do not use cookies
          or any other tracking technologies to collect information about your
          browsing behavior. We use Cloudflare and Vercel to host and protect
          this website/application, and we rely on their privacy policies and
          practices to protect any data that is processed through their
          services. We do not have access to any personal information that may
          be collected by these third-party providers. We have made this
          website/application open source on GitHub. Any information that you
          provide through GitHub will be subject to their privacy policy and
          terms of service. We may update this privacy policy from time to time
          by posting a new version on this website/application. You should check
          this page occasionally to ensure that you are happy with any changes.
        </Typography>
      </Box>
    </Box>
  );
}
