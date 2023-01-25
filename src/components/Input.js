import React, {useState} from 'react';
import Matrix from "./Matrix";

function Input({matrix, setMatrix}) {
    const [rangeM, setRangeM] = useState(4);
    const [rangeN, setRangeN] = useState(10);
    const [iterations, setIterations] = useState(5);

    function handleSubmit(e) {
        e.preventDefault()
        const arr = []
        for (let i = 0; i < rangeN; i++) {
            // for (let j = 0; j < rangeM; j++) {
            //     arr[i]=[]
            // }
            arr[i] = [1, 1, 2, 2]
        }
        console.log('executed')
        setMatrix(arr)
    }
    function handleIterations(e){
        e.preventDefault()
        const newArr = changing(matrix)
        console.log(newArr)

        setMatrix(newArr)
        setMatrix([...newArr])

    }
    function changing (arr){
        arr.map(item =>{
            const shuffledArray = item.sort((a, b) => 0.5 - Math.random());
            return shuffledArray
        })
        return arr
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" value={rangeN} onChange={(e)=> setRangeN(e.target.value)}/>
                <h2>Range N</h2>
                <button type={'submit'}>Run</button>
            </form>
            <form onSubmit={handleIterations}>
                <input type="number"/>
                <h2>Iterations</h2>
                <button type={'submit'}>Run</button>

            </form>
            <Matrix setMatrix={setMatrix} matrix={matrix}/>
        </div>
    );
}

export default Input;