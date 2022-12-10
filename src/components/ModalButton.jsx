import React from 'react';
import { useState } from 'react';
import Background from './Background';

function ModalButton(props) {
    let [modal, setModal] = useState(true);
    return (
        <div>
            <button class="w-14 h-14 rounded-full  bg-buttonBg" onClick={() => {
                setModal(!modal);
            }}>버튼</button>
            {modal === true ? <Background></Background> : null}
        </div>
    );
}

export default ModalButton;