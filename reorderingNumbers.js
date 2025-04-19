function sorting(array) {
    let tempArray = [...array];
    let sortedList = [];

    while (tempArray.length > 0) {
        let max = tempArray[0];
        let index = 0;

        for (let i = 1; i < tempArray.length; i++) {
            if (tempArray[i] > max) {
                max = tempArray[i];
                index = i;
            }
        }

        sortedList.unshift(max);
        tempArray.splice(index, 1);
    }

    return sortedList;
}

function reorder(num) {
    const numString = String(num);
    const qtdNums = numString.length;

    const listNums = [];
    var sub = 0;
    for (let i = qtdNums - 1; i >= 0; i--) {
        let varNum = parseInt((num / 10 ** i) - sub);
        listNums.push(varNum);
        sub += varNum;
        sub *= 10;
    }

    const orderedNums = sorting(listNums);

    var result = 0;
    var subExpo = qtdNums - 1;
    for (let j = 0; j <= subExpo; j++) {
        result += orderedNums[subExpo - j] * (10 **(j));
    }

    return result;
}
