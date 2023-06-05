import React from 'react'
import image1 from '../../Assets/Gallery/01.jpeg';
import image2 from '../../Assets/Gallery/02.jpeg';
import image3 from '../../Assets/Gallery/04.jpeg';
import image4 from '../../Assets/Gallery/05.jpeg';
import image5 from '../../Assets/Gallery/07.jpeg';
import image6 from '../../Assets/Gallery/10.jpeg';
import image7 from '../../Assets/Gallery/11.jpg';
import image8 from '../../Assets/Gallery/12.jpeg';
import image9 from '../../Assets/Gallery/13.jpg';
import image10 from '../../Assets/Gallery/14.jpg';
import image11 from '../../Assets/Gallery/15.jpg';
import image12 from '../../Assets/Gallery/16.jpg';
import image13 from '../../Assets/Gallery/17.JPG';
import image14 from '../../Assets/Gallery/18.JPG';
import image15 from '../../Assets/Gallery/19.JPG';
import image16 from '../../Assets/Gallery/20.JPG';
import './GalleryStyles.css'
const GalleryImages = () => {
    return (
        <>
            <div className="img-container">
                <img src={image1} alt="gallery-images" className="gallery-img" />
                <img src={image2} alt="gallery-images" className="gallery-img" />
                <img src={image3} alt="gallery-images" className="gallery-img" />
                <img src={image4} alt="gallery-images" className="gallery-img" />
            </div>
            <div className="img-container">
                <img src={image5} alt="gallery-images" className="gallery-img" />
                <img src={image6} alt="gallery-images" className="gallery-img" />
                <img src={image7} alt="gallery-images" className="gallery-img" />
                <img src={image8} alt="gallery-images" className="gallery-img" />
            </div>
            <div className="img-container">
                <img src={image9} alt="gallery-images" className="gallery-img" />
                <img src={image10} alt="gallery-images" className="gallery-img" />
                <img src={image11} alt="gallery-images" className="gallery-img" />
                <img src={image12} alt="gallery-images" className="gallery-img" />
            </div>
            <div className="img-container">
                <img src={image13} alt="gallery-images" className="gallery-img" />
                <img src={image14} alt="gallery-images" className="gallery-img" />
                <img src={image15} alt="gallery-images" className="gallery-img" />
                <img src={image16} alt="gallery-images" className="gallery-img" />
            </div>
        </>
    )
}

export default GalleryImages;