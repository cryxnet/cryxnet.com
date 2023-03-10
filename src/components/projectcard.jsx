import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#bf0024',
    },
  },
});

export default function ProjectCard({ image, title, content, url }) {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          width: { sm: 11, md: 400 },
          ':hover': {
            boxShadow: 20,
          },
          boxShadow: 5,
          borderRadius: '10px',
          background: '#dbdbdb',
          boxShadow: '20px 20px 60px #bababa, -20px -20px 60px #fcfcfc',
        }}
      >
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="900"
          >
            {title}
          </Typography>
          <Typography variant="body2">{content}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={url} target="_blank">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
