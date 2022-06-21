import React, {MutableRefObject, useState} from 'react';
import {useOnClickOutside} from "../../../../function/useOnClickOutside";
import s from './ContextMenu.module.scss'
import ConfirmModal from "../../../modals/ConfirmModal";

type PropsType = {
    callBack: () => void
    important: boolean
    text: string
    date: string
    noteId: string
}

const NoteMenu = (props: PropsType) => {
    const [open, setOpen] = useState(false);
    const [openConfirmModal, setOpenConfirmModal] = useState(false)
    const ref = React.useRef() as MutableRefObject<HTMLDivElement>

    const openConfirmModalHandler = () => {
        setOpenConfirmModal(true)
    }

    useOnClickOutside(ref, () => setOpen(false))

    return (
        <div className={s.dots} ref={ref}>
            <button className={open ? `${s.dots__btn} ${s.isOpen} ${s.blue}` : `${s.dots__btn} ${s.blue}`}
                    onClick={() => setOpen(!open)}>
                <span/>
                <span/>
                <span/>
            </button>
            <div data-menu='style' className={open ? `${s.dots__menu} ${s.isOpen}` : s.dots__menu}>
                <button className={s.button}>Изменить</button>
                <button onClick={openConfirmModalHandler} className={s.button}>Удалить</button>
            </div>
            <ConfirmModal
                notes={true}
                noteCaption={props.date}
                noteId={props.noteId}
                messages={`Вы уверены, что хотите удалить запись ${props.date}?`}
                deleteAll={false}
                open={openConfirmModal}
                setOpen={setOpenConfirmModal}/>
        </div>

    );
};

export default NoteMenu;