// LikedGIFs.js
import React from 'react';

const LikedGIFs = ({ likedGifs }) => {
  return (
    <div>
      <h1>Liked GIFs</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {likedGifs && likedGifs.length > 0 ? (
          likedGifs.map((gif) => (
            <div key={gif.id} style={{ margin: '10px', textAlign: 'center' }}>
              <img
                src={gif.images?.fixed_height?.url}
                alt={gif.title}
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
          ))
        ) : (
          <p>No liked GIFs yet.</p>
        )}
      </div>
    </div>
  );
};

export default LikedGIFs;
