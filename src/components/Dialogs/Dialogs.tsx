import React from 'react';
import s from './Dialogs.module.css'

const Dialogs: (props: object) => JSX.Element = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Alex
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Vova
                </div>
                <div className={s.dialog}>
                    Petya
                </div>
                <div className={s.dialog}>
                    Evgen
                </div>
                <div className={s.dialog}>
                    Viktor
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
                <div className={s.dialog}>
                    Vasya
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    How are you?)
                </div>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    I am very tired
                </div>
            </div>
        </div>
    )
}
export default Dialogs;