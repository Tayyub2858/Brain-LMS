import { Modal } from "@material-ui/core";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import './ForgetPasswordStyle.css';
import ForgetPasswordInput from "./ForgetPasswordInput";
const ForgetPassword = () => {

    const{
        setemailAddress,
        emailAddress,
        Forget,
    }=ForgetPasswordInput();


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div>
                <button className='forgot-password' title="close" onClick={handleOpen}>Forget password</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className='login-modal'
                >
                    <div className="forget-container">
                        <button onClick={handleClose} className="fotget-close"><AiOutlineCloseCircle/></button>
                        <div className="forget-box">
                            <h1 className='signup-title'>Forget your password</h1>
                            <p className='forget-text'>Please Enter your correct Email , that send your password on your Email address</p>
                            <input
                                className='input-text'
                                type="email"
                                placeholder="Enter your email"
                                value={ emailAddress}
                                onChange={(e) => setemailAddress(e.target.value)}
                                required
                            ></input>
                                <br />
                                <br />
                            <button className='verifyemail-btn' onClick={Forget}>Verify your Email</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}
export default ForgetPassword;