import React from 'react';
import './Gallerygril.css';

// Importing images
import img1 from '/src/assets/IMG-20240523-WA0001.jpg';
import img2 from '/src/assets/IMG_20240203_155833[1].jpg';
import img3 from '/src/assets/IMG-20240523-WA0003.jpg';
import img4 from '/src/assets/IMG-20240523-WA0004.jpg';
import img5 from '/src/assets/IMG-20240523-WA0005.jpg';
import img6 from '/src/assets/IMG-20240523-WA0006.jpg';
import img7 from '/src/assets/WhatsApp Image 2024-05-23 at 08.24.16_cf0f4554.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7];

const ImageGrid = () => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
