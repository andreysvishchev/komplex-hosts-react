import React from 'react';
import s from '../Lk.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../store/store";
import {NoticeType, readNoticeAC} from "../../../reducers/noticeReducer";
import NoticeAccordion from "../components/noticeAccordion/NoticeAccordion";

const Notice = () => {

    const notice = useSelector<RootStateType, NoticeType[]>(state => state.notice)
    const dispatch = useDispatch()

    const readNotice = (noticeId:number)=> {
        dispatch(readNoticeAC(noticeId))
    }


    return (
        <div className={s.wrap}>
            <div className={s.top}>
                <div className={s.col}>
                    <div className={s.caption}>Уведомления</div>
                    <button className={s.tooltip}>?</button>
                </div>
                <button className={s.button}>Прочитать всё</button>
            </div>
            <div className={s.notices}>
                {

                        notice.map((el, i) => {
                            return (
                                <NoticeAccordion key={el.id}
                                                 title={el.title}
                                                 date={el.date}
                                                 text={el.text}
                                                 unread={el.unread}
                                                 readNotice={()=>readNotice(el.id)}
                                />
                            )
                        })


                }

            </div>
            <button className={s.show}>Развернуть все уведомления</button>
        </div>
    );
};

export default Notice;