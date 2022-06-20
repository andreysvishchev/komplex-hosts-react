import React, {ChangeEvent, useState} from 'react';
import {Box, Modal} from "@mui/material";
import {ConfidantType, editConfidantAC} from "../../reducers/confidantReducer";
import FormInput from "../forms/components/FormInput/FormInput";
import s from './Modal.module.scss'
import {modal} from "../../style/style";
import EditableInput from "../forms/components/EditInput/EditableInput";
import {useDispatch} from "react-redux";

type PropsType = {
    title: string
    open: boolean
    setOpen: (open: boolean) => void
    model: ConfidantType
}

const ConfidantModal = (props: PropsType) => {

    const handleClose = () => props.setOpen(false);
    const [name, setName] = useState<string>(props.model.name)
    const [passport, setPassport] = useState<string>(props.model.passport)
    const [tel, setTel] = useState<string>(props.model.tel)

    const dispatch = useDispatch()

    const nameHandler = (value: string) => {
        setName(value)
    }
    const passportHandler = (value: string) => {
        setPassport(value)
    }

    const telHandler = (value: string) => {
        setTel(value)
    }

    const editConfidant = (name: string, passport: string, tel: string) =>  {
        dispatch(editConfidantAC(props.model.id, name, passport, tel))
        props.setOpen(false)
    }

    return (
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modal}>
                <button onClick={handleClose} className={s.close}></button>
                <div className={s.caption}>{props.title} </div>
                <EditableInput caption={'ФИО'} placeholder={'Введите ФИО'} value={name} setValue={nameHandler}/>
                <EditableInput caption={'Серия и номер паспорта'} placeholder={'Введите серию и номер паспорта'}
                               value={passport} setValue={passportHandler}/>
                <EditableInput caption={'ФИО'} placeholder={'Введите телефон'} value={tel} setValue={telHandler}/>
                <div className={s.row}>
                    <button onClick={handleClose} className={s.cansel}>Отмена</button>
                    <button onClick={()=>editConfidant(name, passport, tel)} className={s.save}>Сохранить</button>
                </div>
            </Box>
        </Modal>
    );
};

export default ConfidantModal;