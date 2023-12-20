import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import _ from 'lodash';
import { useRouter } from 'next/router'; 
import './GIF.css';
import { Search, Heart } from 'react-feather';
import LikedGIFs from './LikedGifs';

const Loader = () => (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
);

const GIF = () => {
  const [gifData, setGifData] = useState([]);
  const [likedGifs, setLikedGifs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/');
    } else {
      fetchGifs();
    }
  }, []);
  

  const fetchGifs = async (query) => {
    setLoading(true);
    const apiKey = "0iXcCc7D18MoEf30qer51CbtN2O9YseS";
    
    try {
      const response = await axios.get(
        query
          ? `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=15`
          : `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=55`
      );
      
      setGifData(response.data.data);
    } catch (error) {
      console.error('Error fetching Giphy API:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = _.debounce((query) => {
    setSearchQuery(query);
    fetchGifs(query);
  }, 300);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/logout');
      router.push('/');
    } catch (error) {
      console.error('Error logging out:', error.response?.data?.error || 'Unknown error');
    }
  };

  const toggleLike = (gifId) => {
    setLikedGifs((prevLikedGifs) => {
      const isLiked = prevLikedGifs.includes(gifId);

      if (isLiked) {
        return prevLikedGifs.filter((id) => id !== gifId);
      } else {
        return [...prevLikedGifs, gifId];
      }
    });
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <div className='containerGif'>
      <Link href="/LikedGifs" className="liked">
        <Heart size={15} /> Liked GIFs
      </Link>

      <h1>GIF Gallery</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search GIFs..."
          value={searchQuery}
          onChange={handleInputChange}
          className="search-input"
        />
        <button className="search-button" onClick={() => handleSearch(searchQuery)}>
          <Search size={24} />
        </button>
      </div>

      {loading && <Loader />}

      <div className='gif-container ' style={{ display: 'flex', flexWrap: 'wrap' }}>
        {gifData.map((gif) => (
          <div className='gif-item' key={gif.id} style={{ margin: '10px', textAlign: 'center' }}>
            <img
              className='gif-image'
              src={gif.images.fixed_height.url}
              alt={gif.title}
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <button onClick={() => toggleLike(gif.id)} className="like-button">
              <Heart size={20} fill={likedGifs.includes(gif.id) ? 'red' : 'white'} />
            </button>
          </div>
        ))}
      </div>

      <Link href="/" className="logout" onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
};

export default GIF;
