import React from 'react';

const Card = ({ details }) => {
  return (
    <div className='Card'>
      <div className='CardPoster'>
        <a href={details.url} target={'_blank'}>
          <img src={details.images.jpg.small_image_url} alt={details.title} />
        </a>
      </div>
      <div className='CardDetail'>
        <h3>{details.title}</h3>
      </div>
    </div>
  );
};

export default Card;
