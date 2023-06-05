import React from "react";
import { Modal } from "@material-ui/core";
import "./CoursesStyles.css";
import Data from './CourseData';

const CourseDetails = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(Data);
  return (
    <div>
      <button className="course-info-btn" onClick={handleOpen}>
        Course Info
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="course-details-container">
          <h1> Course Data Here </h1>
        </div>
      </Modal>
    </div>
  );
};

export default CourseDetails;
