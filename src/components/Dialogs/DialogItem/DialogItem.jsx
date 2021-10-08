import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs' + props.id
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Elena'},
        {id: 4, name: 'Jenya'},
        {id: 5, name: 'Roma'},
        {id: 6, name: 'Dima'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hey'},
        {id: 3, message: 'How'},
        {id: 4, message: 'Now'},
        {id: 5, message: 'Ky'},
        {id: 6, message: 'Zdarova'}
    ]

    let dialogsElements = dialogs.map ( d => <DialogItem name={d.name} id={d.id} /> )
    let messagesElements = messages.map ( m => <Message message={m.message} /> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
)
}

export default Dialogs;