import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { LineAxisOutlined } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import SkillCard from './skillCard';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: 'theme.palette.text.secondary',
  height: 60,
  lineHeight: '60px',
  backgroundColor: 'rgb(219, 219, 219)',
}));

interface Skills {
  [key: string]: string[];
}

const skills: Skills = {
  programming: ['TypeScript', 'Java', 'Python', 'C/C++'],
  blockchain: [
    'Solidity',
    'Web3.js',
    'Ethers',
    'MetaMask',
    'Alchemy',
    'HardHat',
  ],
  cybersecurity: [
    'OWASP',
    'Penetration Testing',
    'Burp Suite',
    'Metasploit',
    'Social Engineering',
    'Incident Handling',
    'Implementing Detection Systems',
    'Exploit Development',
    'Reporting',
    'Red Teaming',
    'Forensic',
  ],
  tools: [
    'Git',
    'Azure',
    'MySQL',
    'MongoDB',
    'Neo4j',
    'CI/CD',
    'Visual Studio Code',
    'Atom',
    'IntelliJ IDEA',
  ],

  OS: ['Windows', 'Debian', 'Ubuntu', 'TailsOS', 'Kali Linux', 'ParrotOS'],
  web: ['NextJS', 'ReactJS', 'HTML', 'CSS', 'JS'],
};

const cardHeight = 200;

export default function SkillsBoard() {
  return (
    <Box>
      <Grid
        container
        spacing={5}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        {Object.keys(skills).map((skill: string) => (
          // eslint-disable-next-line react/jsx-key
          <Grid item sm={12} md={4} display="flex" justifyContent="center">
            <SkillCard skillName={skill} topics={skills[skill]} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
