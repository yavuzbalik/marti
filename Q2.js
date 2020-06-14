const arr = [1, 4, 6, 9, 12, 14, 13, 11, 43, 21, 14, 13]

const arrayReverse = (array) => {
    let l = array.length
    let i = 0


    for (i; i < l / 2; i++) {
        let temp = array[i];
        array[i] = array[l - i - 1];
        array[l - i - 1] = temp;
    }

    return arr;
}

console.log(arrayReverse(arr))