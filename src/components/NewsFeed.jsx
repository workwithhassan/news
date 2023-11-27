import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import './components.css';
import Navbar from './Navbar';
import { NewsContext } from '../App';
import SearchIcon from '@mui/icons-material/Search';

const NewsFeed = () => {
  const [filterByAuthor, setFilterByAuthor] = useState('');
  const [filterByDate, setFilterByDate] = useState('');
  const [filterBySource, setFilterBySource] = useState('');
  let news = React.useContext(NewsContext).news;
  let filteredOutput = [];

  filteredOutput = news.filter(item => {
    if (filterByAuthor) {
      return item.author.toLowerCase().includes(filterByAuthor.toLowerCase());
    }
    if (filterBySource) {
      return item.source.name
        .toLowerCase()
        .includes(filterBySource.toLowerCase());
    }
    if (filterByDate) {
      return item.publishedAt
        .toLowerCase()
        .includes(filterByDate.toLowerCase());
    }
    return item;
  });

  return (
    <>
      <Navbar />
      <Container fixed>
        <Typography variant="h2" component="h3" align="center">
          News Feed
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <SearchIcon />
          <TextField
            sx={{ marginRight: '20px' }}
            id="input-with-sx"
            label="Search by Author"
            variant="standard"
            onChange={e => setFilterByAuthor(e.target.value)}
          />
          <SearchIcon />
          <TextField
            sx={{ marginRight: '20px' }}
            id="input-with-sx"
            label="Search by Source"
            variant="standard"
            onChange={e => setFilterBySource(e.target.value)}
          />
          <SearchIcon />
          <TextField
            sx={{ marginRight: '20px' }}
            id="input-with-sx"
            label="Search by Date"
            variant="standard"
            onChange={e => setFilterByDate(e.target.value)}
          />
        </Box>
        <div className="feed-content">
          {filteredOutput.map(news => (
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

export default NewsFeed;
