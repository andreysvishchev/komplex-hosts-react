import React from 'react';
import s from './Rent.module.scss'
const Rent = () => {


    return (
        <div className={s.wrap}>
            <span className={s.error}>Услуга заблокирована</span>
            <div className={s.disabled}>
                <div className={s.top}>
                    <h4 className={s.caption}>Аренда места</h4>
                    <span className={s.number}>253/893.156</span>
                    <a href="#" className={s.info}>?</a>
                </div>
                <div className="rent__table table">
                    <div className="table__captions">
                        <h6 className="table__caption">Наименование услуги</h6>
                        <h6 className="table__caption">Цена</h6>
                        <h6 className="table__caption">Кол-во</h6>
                        <h6 className="table__caption">Сумма</h6>
                    </div>
                    <div className="table__row">
                        <div className="table__column service-name">Аренда места,<span>Unit</span></div>
                        <div className="table__column service-price">1500₽</div>
                        <div className="table__column service-amount">2</div>
                        <div className="table__column service-sum">3000₽</div>
                    </div>
                </div>
                <div className="rent__bot">
                    <div className="rent__data">
                        <span className="rent__data-caption">Дата подключения:</span>
                        <strong className="rent__data-num">21.05.2017</strong>
                    </div>
                    <div className="rent__price">
                        <span className="rent__price-caption">Итого:</span>
                        <strong className="rent__price-sum">3 300 ₽</strong>
                    </div>
                </div>
                <a href="#" className="rent__more button light">Подробнее</a>
            </div>
        </div>
    );
};

export default Rent;