import React from 'react';
import s from "../../Lk.module.scss";


type PropsType = {
    title: string
    text: string
    img?: string[]
}

const FaqAccordion = (props: PropsType) => {
    return (
        <div className={s.quest}>
            <div className={s.quest__title}>{props.title}</div>
            <div className={s.quest__text}>
                <p>{props.text}</p>
                {props.img?.length !== 0 &&
                <div className={s.quest__images}>
                    {
                        props.img?.map((el, i)=> {
                            console.log(el)
                            return (
                                <img key={i} src={el} alt="здесь могла бы быть картинка"/>
                            )
                        })
                    }

                </div>
                }
            </div>

        </div>
    );
};

export default FaqAccordion;