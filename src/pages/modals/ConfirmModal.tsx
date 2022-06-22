import React, {useState} from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import EditableInput from "../forms/components/EditInput/EditableInput";
import {ConfidantType, deleteAllConfidant, deleteConfidantAC} from "../../reducers/confidantReducer";
import NoticeModal from "./NoticeModal";
import {useDispatch} from "react-redux";
import {deleteAllNotes, deleteNoteAC} from "../../reducers/notesReducer";
import {openModalAC} from "../../reducers/modal-reducer";

type PropsType = {
    messages: string
    open: boolean
    setOpen: (open: boolean) => void
    deleteAll?: boolean
    notes?: boolean
    noteId?: string
    noteCaption?: string
    confidant?: boolean
    confidantId?: string
    confidantCaption?: string
}

const ConfirmModal = (props: PropsType) => {
    const handleClose = () => props.setOpen(false);
    const dispatch = useDispatch()

    const deleteConfidantsHandler = () => {
        props.setOpen(false);
        dispatch(deleteAllConfidant())
    }
    const deleteNotesHandler = () => {
        props.setOpen(false);
        dispatch(deleteAllNotes())
    }
    const deleteNoteHandler = () => {
        if (props.noteId) {
            props.setOpen(false)
            dispatch(deleteNoteAC(props.noteId))
        }
    }

    const deleteConfidantHandler = () => {
        if (props.confidantId) {
            props.setOpen(false)
            dispatch(deleteConfidantAC(props.confidantId))
            dispatch(openModalAC(true, 'gola'))
        }

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
                                <button onClick={props.deleteAll ? deleteConfidantsHandler : deleteConfidantHandler}
                                        className={s.save}>Ок</button>}
                            {props.notes &&
                                <button onClick={props.deleteAll ? deleteNotesHandler : deleteNoteHandler}
                                        className={s.save}>Ок</button>}
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default ConfirmModal;