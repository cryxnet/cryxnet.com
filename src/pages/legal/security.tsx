// Security
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TermsOfUse() {
  return (
    <Box
      sx={{
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 20,
      }}
    >
      <Typography variant="h1">Security</Typography>
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="h3">Introduction</Typography>
        <Typography variant="p">
          This page is dedicated to providing a clear and transparent way for
          users to report any security vulnerabilities or issues they may find
          on our website. We take security seriously and appreciate any reports
          that help us improve our site's security and protect our users' data.
        </Typography>
      </Box>
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="h3">Reporting a Security Issue</Typography>
        <Typography variant="p">
          If you believe you have found a security vulnerability on our website,
          please report it to us as soon as possible by emailing us at
          <a href="mailto:cryxnet@proton.me"> cryxnet@proton.me</a>. Please
          include the following information in your report:
          <ul>
            <li>A detailed description of the vulnerability or issue</li>
            <li>The steps you took to discover the vulnerability or issue</li>
            <li>
              Any relevant information or evidence that could help us reproduce
              the issue
            </li>
            <li>
              Your contact information, so we can follow up with you regarding
              the issue
            </li>
          </ul>
          We will acknowledge receipt of your report within 2 - 5 business days
          and will work to address the issue as quickly as possible. Please note
          that we do not offer any monetary compensation for security reports.
        </Typography>
      </Box>
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="h3">Responsible Disclosure</Typography>
        <Typography variant="p">
          We encourage responsible disclosure of any security vulnerabilities or
          issues. As such, we ask that you do not publicly disclose any
          vulnerabilities or issues until we have had a reasonable amount of
          time to investigate and address them. We commit to working with
          security researchers to understand and address reported
          vulnerabilities in a timely manner.
        </Typography>
      </Box>

      <Box sx={{ marginTop: 5 }}>
        <Typography variant="h3">Conclusion</Typography>
        <Typography variant="p">
          We take the security of our website and our users' data seriously. We
          appreciate the efforts of the security community to help us identify
          and address any potential security issues. Thank you for helping us
          keep our website safe and secure!
        </Typography>
      </Box>
    </Box>
  );
}
