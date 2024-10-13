import React from 'react';

const Caption = ({ caption }) => {
    if (caption) {
        return (
            <div className="caption"> <p className="mt-2">{caption}</p></div>
            
        );
    } else {
        return null;
    }
};
export default Caption;
