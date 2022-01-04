import React from 'react';
import '../style/css/global.css';

const InputText = (type="text") => {
    return (
        <div>
            <input type={type} className='input' />
        </div>
    )
}

export default InputText
