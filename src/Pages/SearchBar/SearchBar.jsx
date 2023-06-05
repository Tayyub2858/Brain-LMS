import React,{useState}  from 'react';
import { Modal } from '@material-ui/core';
// import { AiOutlineCloseCircle } from "react-icons/ai";
import {FaSearch} from 'react-icons/fa'
import './SearchBarStyle.css';

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (

    <>
      <div>
        <button className='nav-btn' disabled id='popup' onClick={handleOpen}><FaSearch/></button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className='search-modal'
        >
          {/* <div className="search-container">
            <button onClick={handleClose} className="fotget-close"><AiOutlineCloseCircle /></button>

            <div className='search-box'>
              <h1 className='search-title'>Log In to your Account</h1>
              <br />
              <input
                className='input-text'
                type="email"
                placeholder="Search this site..."
              ></input>
              <br />
              <button className='search-btn'>SEARCH</button>
            </div>
          </div> */}
          <h1>Hello word</h1>
        </Modal>
      </div>


    </>

  )
}

export default SearchBar;