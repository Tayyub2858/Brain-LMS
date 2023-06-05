import React from 'react';
import './GalleryStyle.css';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import GalleryData from './GalleryData';
import { MdModeEditOutline, MdDelete } from 'react-icons/md'
import Drwaradminpanal from '../../Pages/Drwaradminpanal/Drwaradminpanal'

const Gallery = () => {
    return (
        <>
            <Drwaradminpanal componentsName={"Gallery"} />
            <div className="galler-container">
                <div className="gallery-header">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="gallery">
                                <h1 className='gallery-title'>Gallery</h1>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="add-new-gallery">
                                <Link to='/Contact/Addcontact'><button className='add-new-gallery-btn'>Add Gallery</button></Link>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="gallery-images">
                    <Grid container >
                        {GalleryData && GalleryData.length > 0 && GalleryData.map((image, index) => (
                            <Grid item xs={12} sm={12} md={3}>
                                <div class="show-image">
                                    {/* <img src={image.img} className='gallery-img-styling' /> */}
                                    <button class="update" title='Edit'><MdModeEditOutline /></button>
                                    <button class="delete" title='Delete'><MdDelete /></button>
                                </div>
                            </Grid>
                        ))
                        }
                    </Grid>
                </div>
            </div>

        </>
    )
}

export default Gallery