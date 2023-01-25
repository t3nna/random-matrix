import React from 'react';

function MatrixItem({item}) {
    return (
        <li className={'matrix-row'}>
            {
                item.map((item, index) => (
                    <span key={index}>{item}</span>
                ))
            }
        </li>
    );
}

export default MatrixItem;