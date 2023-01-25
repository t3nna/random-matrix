import React from 'react';
import MatrixItem from "./MatrixItem";

function Matrix({matrix, setMatrix}) {
    return (
        <div>
            <ul className={'matrix'}>
                {
                    matrix.map((item, index) => (
                        <MatrixItem item={item} key={index}/>
                    ))
                }

            </ul>
        </div>
    );
}

export default Matrix;