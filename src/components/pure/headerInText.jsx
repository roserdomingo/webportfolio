import React from 'react';

const HeaderInText = ({ header }) => {
    if (header) {
        return <div
            className="headerInsideText">
            <b>{header}</b>
        </div>

    } else {
        return null;
    }
}

export default HeaderInText;