import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NewsContext } from "../App";
import "./components.css";
import Navbar from "./Navbar";

const PersonalizedNewsFeed = () => {
  const [source, setSource] = useState([]);
  let news = React.useContext(NewsContext).news;
  let sources = [...new Set(news?.map((item) => item?.source?.name))];

  const handleChange = (e)=>{
    setSource([...source,e])
  }

  return (
    <>
      <Navbar />
      <Container fixed>
        <Typography variant="h2" component="h3" align="center">
          Personalized News Feed
        </Typography>
        <FormGroup className="personalizedNewsFeed">
          <FormControlLabel
            className="checkbox"
            control={<Checkbox />}
            label={'All'}
          />

          {sources.map(item => (
            <FormControlLabel
              className="checkbox"
              control={
                <Checkbox
                  onChange={e => handleChange(e.target.value)}
                  value={item}
                />
              }
              label={item}
            />
          ))}
        </FormGroup>
        <div className="feed-content">
          {news.map(news => (
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={news.urlToImage}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    <b>Title: </b>
                    {news.title}
                  </Typography>
                  <Typography variant="body2">{news.description}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    <b>Author: </b>
                    {news.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <b>Source: </b>
                    {news.source.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <b>Published At: </b>
                    {news.publishedAt}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default PersonalizedNewsFeed;
