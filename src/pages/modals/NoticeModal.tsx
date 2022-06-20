import React from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";

type PropsType = {
    message: string
    open: boolean
    setOpen: (open: boolean) => void
}

const NoticeModal = (props: PropsType) => {
    const handleClose = () => props.setOpen(false);
    return (
        <div>
            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modal}>
                    <div className={s.notice}>
                        <div className={s.message}>{props.message}</div>
                        <button onClick={handleClose} className={s.success}>Ок</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default NoticeModal;