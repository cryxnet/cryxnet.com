import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const theme = createTheme({
  typography: {
    fontFamily: "'Ubuntu Condensed', sans-serif",
  },
});

interface SkillCardProps {
  skillName: string;
  topics: string[];
  height: number; // Define the expand property here
}

export default function SkillCard({ skillName, topics }: SkillCardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          backgroundColor: 'rgb(219, 219, 219)',
          width: '20rem',
          borderRadius: '10px',
          background: ' #dbdbdb',
          boxShadow: '20px 20px 60px #bababa, -20px -20px 60px #fcfcfc',
        }}
      >
        <CardContent
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 'bolder',
          }}
        >
          <Typography variant="h5" style={{ marginTop: 15 }}>
            {skillName}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <List>
              {topics.map((topic) => (
                <ListItem>
                  <ListItemText>{topic}</ListItemText>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Collapse>
      </Card>
    </ThemeProvider>
  );
}
