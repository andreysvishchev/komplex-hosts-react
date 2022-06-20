import React from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import EditableInput from "../forms/components/EditInput/EditableInput";
import {ConfidantType, deleteAllConfidant} from "../../reducers/confidantReducer";
import NoticeModal from "./NoticeModal";
import {useDispatch} from "react-redux";
import {deleteAllNotes} from "../../reducers/notesReducer";

type PropsType = {
    messages: string
    open: boolean
    setOpen: (open: boolean) => void
    confidant?: boolean
    notes?: boolean
}

const ConfirmModal = (props: PropsType) => {
    const handleClose = () => props.setOpen(false);
    const [openNoticeModal, setOpenNoticeModal] = React.useState(false);

    const dispatch = useDispatch()

    const deleteConfidantsHandler = () => {
        props.setOpen(false);
        dispatch(deleteAllConfidant())
        setOpenNoticeModal(true)
    }
    const deleteNotesHandler = () => {
        props.setOpen(false);
        dispatch(deleteAllNotes())
        setOpenNoticeModal(true)
    }

    return (
        <div>
            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modal}>
                    <div className={s.confirm}>
                        <div className={s.message}>{props.messages}</div>
                        <div className={s.row}>
                            <button onClick={handleClose} className={s.cancel}>Отмена</button>
                            {props.confidant &&
                            <button onClick={deleteConfidantsHandler} className={s.save}>Ок</button>}
                            {props.notes && <button onClick={deleteNotesHandler} className={s.save}>Ок</button>}
                        </div>
                    </div>
                </Box>
            </Modal>
            {props.confidant && <NoticeModal
                message={'Все записи из таблицы “Доверенное лицо” удалены'}
                open={openNoticeModal}
                setOpen={setOpenNoticeModal}/>}
            {props.notes && <NoticeModal
                message={'Все заметки удалены'}
                open={openNoticeModal}
                setOpen={setOpenNoticeModal}/>}
        </div>
    );
};

export default ConfirmModal;