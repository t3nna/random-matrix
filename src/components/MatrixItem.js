import React from 'react';

function MatrixItem({item}) {
    return (
        <li className={'matrix-row'}>
            {
                item.map((item, index) => (
                    <span key={index} style={item===1? {background: 'red'} :{background: 'blue'} }>{item}</span>
                ))
            }
        </li>
    );
}

export default MatrixItem;