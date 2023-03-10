import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CompanyCard({ companyName, image, description }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card
      sx={{
        width: { sm: 300, md: 400 },
        ":hover": {
          boxShadow: 20,
        },
        boxShadow: 5,
        borderRadius: "10px",
        background: "#dbdbdb",
        boxShadow: "20px 20px 60px #bababa, -20px -20px 60px #fcfcfc",
      }}
      onMouseEnter={() => {
        {
          setExpanded(true);
        }
      }}
      onMouseLeave={() => {
        {
          setExpanded(false);
        }
      }}
    >
      <Box
        style={{
          height: "200px",
          margin: 15,
          display: "flex",
          alignItems: "center",
          justifycontent: "center",
        }}
      >
        <CardMedia
          component="img"
          height="auto"
          image={image}
          alt="Logo of Company"
        />
      </Box>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography fontWeight={800}>{companyName}</Typography>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
