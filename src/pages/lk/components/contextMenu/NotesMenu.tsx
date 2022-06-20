import React, {MutableRefObject, useState} from 'react';
import s from './ContextMenu.module.scss'
import {useOnClickOutside} from "../../../../function/useOnClickOutside";
import {useDispatch} from "react-redux";
import {deleteAllConfidant} from "../../../../reducers/confidantReducer";
import ConfidantModal from "../../../modals/ConfidantModal";
import ConfirmModal from "../../../modals/ConfirmModal";


type NotesMenuPropsType = {
    notBtn?: boolean
}

const NotesMenu = (props: NotesMenuPropsType) => {
    const [toggle, setToggle] = useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [openNotesModal, setOpenNotesModalModal] = React.useState(false);
    const myRef = React.useRef() as MutableRefObject<HTMLDivElement>


    const openConfirmModal = () => {
        setOpenModal(true)
    }
    const openNotesModalHandler = () => {

    }


    useOnClickOutside(myRef, () => setToggle(false))

    return (
        <div className={s.wrap} ref={myRef}>
            <button className={toggle ? `${s.burger} ${s.isOpen}` : s.burger}
                    onClick={() => setToggle(!toggle)}>
                <span/>
                <span/>
                <span/>
            </button>
            <div className={toggle ? `${s.menu} ${s.isOpen}` : s.menu}>
                <button onClick={openNotesModalHandler} className={s.button}>Добавить</button>
                <button onClick={openConfirmModal} className={s.button}>Удалить все</button>
            </div>

            <ConfirmModal
                notes={true}
                open={openModal}
                setOpen={setOpenModal}
                messages={'Вы уверены, что хотите удалить все заметки?'}/>
        </div>

    );
};

export default NotesMenu;