import React, {MutableRefObject, useState} from 'react';
import s from './TableMenu.module.scss'

import {useOnClickOutside} from "../../../../function/useOnClickOutside";
import ConfidantModal from "../../../modals/ConfidantModal";
import {ConfidantType} from "../../../../reducers/confidantReducer";

type TableMenuPropsType = {
    callBack: () => void
    name: string
    passport: string
    tel: string
    id: string
}

const TableMenu = (props: TableMenuPropsType) => {

    const [open, setOpen] = useState(false);
    const ref = React.useRef() as MutableRefObject<HTMLDivElement>

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => setOpenModal(true);

    const onClickHandler = () => {
        props.callBack()
    }

    useOnClickOutside(ref, () => setOpen(false))

    return (
        <div className={s.wrap} ref={ref}>
            <button className={open ? `${s.dots} ${s.isOpen}` : s.dots} onClick={() => setOpen(!open)}>
                <span/>
                <span/>
                <span/>
            </button>
            <div className={open ? `${s.menu} ${s.isOpen}` : s.menu}>
                <button onClick={handleOpen} className={s.button}>Изменить</button>
                <button onClick={onClickHandler} className={s.button}>Удалить</button>
            </div>
            <ConfidantModal title={'Изменить доверенное лицо'}
                            open={openModal}
                            setOpen={setOpenModal}
                            name={props.name}
                            passport={props.passport}
                            tel={props.tel}
                            id={props.id}
            />
        </div>

    );
};

export default TableMenu;



