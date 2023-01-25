const array = [
    [1,1,2,2],
    [1,1,2,2],
    [1,1,2,2],
    [1,1,2,2],
    [1,1,2,2],
    [1,1,2,2],
    [1,1,2,2],
    [1,1,2,2],
    [1,1,2,2],
]

let s = [1,2,5,7]

s.map(item => console.log(item, '+++++++'))



function changing (abc){

    abc.map(item =>{
        const shuffledArray = item.sort((a, b) => 0.5 - Math.random());
        return shuffledArray
    })

    return abc

}

changing(array)


