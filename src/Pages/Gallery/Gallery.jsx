import React from "react";
import './GalleryStyles.css'
import Nav from '../../Modules/Nav/Nav';
import Footer from "../../Modules/Footer/Footer";
import GalleryImages from "./GalleryImages";
import Loader from '../../Assets/Front-Page/Loader.gif'
const Gallery = () => {
    const [loader, setloader] = React.useState(true);
    React.useEffect(() => {
        setloader(true);
        setTimeout(() => {
            setloader(false);
        }, 4500);
    }, []);
    return (
        <>
            <Nav />
            <div className="gallery-container">
                <div className="heading-container">
                    <p className="gallery-title">
                        Gallery
                    </p>
                    <h1 className="gallery-heading">
                        WITNESS SOME OF OUR EXTRA-ORDINARY TRAINING SESSIONS
                    </h1>
                </div>
                {loader ? <div><img src={Loader} alt="loader" className="loader" /></div> :
                    (<GalleryImages />)
                }

            </div>
            <Footer />
        </>
    )
}
export default Gallery;