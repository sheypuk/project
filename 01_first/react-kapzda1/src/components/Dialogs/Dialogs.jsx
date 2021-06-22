import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' +  s.active}>
                    Roman
                </div>
                <div className={s.dialog}>
                    Alena
                </div>
                <div className={s.dialog}>
                    Oleg
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Alecsandr
                </div>
            </div>

        <div className={s.messages}>
            <div className={s.dialog}>Hi</div>
            <div className={s.dialog}>How are your doin</div>
            <div className={s.dialog}>Yo</div>
        </div>
        </div>
    )
}

export default Dialogs;