import React, {useState, useEffect} from 'react'

const Home = () => {
  let [news, setNews] = useState([]); 

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
  }, [news]);


  const BASE_URL = 'https://admin.ikar-thinktank.org/api';
  const getNews = () => {
    fetch(`${BASE_URL}/news`)
      .then(response => response.json())
      .then(data => {
        setNews(data);
      })
  };
  return (
    <div>{news}</div>
  )
}

export default Home