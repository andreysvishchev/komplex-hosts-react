import React, {ChangeEvent, useState} from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import EditableInput from "../forms/components/EditInput/EditableInput";

type PropsType = {
    title: string
    comment: string
    open: boolean
    setOpen: (open: boolean) => void
}

const EquipModal = (props: PropsType) => {

    const [value, setValue] = useState<string>(props.title)
    const handleClose = () => {
        props.setOpen(false)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    const saveComment = () => {

    }

    return (
        <Modal
            open={props.open}
            onClose={handleClose}>
            <Box sx={modal}>
                <button onClick={handleClose} className={s.close}/>
                <div className={s.caption}>{props.title}</div>
                <textarea onChange={onChangeHandler} className={s.textarea} value={value}></textarea>
                <div className={s.row}>
                    <button onClick={handleClose} className={s.cancel}>Отмена</button>
                    <button className={s.save} onClick={saveComment}>Сохранить
                    </button>
                </div>
            </Box>
        </Modal>
    );
};

export default EquipModal;