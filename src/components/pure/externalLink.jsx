import React from 'react';

const ExternalLink = ({ link }) => {
    if (link) {
        return <div className='externalLink'>
            <a
                href={"https://www." + link}
                rel="noopener noreferrer"
                target="_blank">
                <span>⮞ </span>
                {link}
            </a>
        </div>

    }
    return null;
}

export default ExternalLink;