import React from 'react';
import './style.css';

import { FaStar } from 'react-icons/fa';

const Card = ({ details }) => {
  return (
    <div className='Card'>
      <div className='CardPoster'>
        <a href={details.url} target={'_blank'} title={details.title}>
          <img src={details.images.jpg.large_image_url} alt={details.title} />
        </a>
      </div>
      <div className='CardDetail'>
        <h3>
          <a href={details.url} target={'_blank'} title={details.title}>
            {details.title}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Card;
