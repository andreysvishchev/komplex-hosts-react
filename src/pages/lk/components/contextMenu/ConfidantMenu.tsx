import React, {MutableRefObject, useState} from 'react';
import s from './ContextMenu.module.scss'
import {useOnClickOutside} from "../../../../function/useOnClickOutside";
import ConfidantModal from "../../../modals/ConfidantModal";
import ConfirmModal from "../../../modals/ConfirmModal";


type ContextMenuPropsType = {
    notBtn?: boolean
}

const ConfidantMenu = (props: ContextMenuPropsType) => {
    const [toggle, setToggle] = useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [openConfidantModal, setOpenConfidantModal] = React.useState(false);
    const myRef = React.useRef() as MutableRefObject<HTMLDivElement>


    const openConfirmModal = () => {
        setOpenModal(true)
    }
    const openConfModal = () => {
        setOpenConfidantModal(true)
    }


    useOnClickOutside(myRef, () => setToggle(false))

    return (
        <div className={s.wrap} ref={myRef}>
            <button className={toggle ? `${s.dark} ${s.isOpen} ${s.burger}` : `${s.dark} ${s.burger}`}
                    onClick={() => setToggle(!toggle)}>
                <span/>
                <span/>
                <span/>
            </button>
            <div className={toggle ? `${s.menu} ${s.isOpen}` : s.menu}>
                <button onClick={openConfModal} className={s.button}>Добавить</button>
                <button onClick={openConfirmModal} className={s.button}>Удалить все</button>
            </div>
            <ConfidantModal
                title={'Новое доверенное лицо'}
                open={openConfidantModal}
                setOpen={setOpenConfidantModal}
                name={''}
                passport={''}
                tel={''}
                new={true}
            />
            <ConfirmModal
                confidant={true}
                open={openModal}
                setOpen={setOpenModal}
                messages={'Вы уверены, что хотите удалить все записи из таблицы “Доверенное лицо”?'}/>
        </div>

    );
};

export default ConfidantMenu;