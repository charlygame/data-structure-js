/*
 * 快速排序
 * 选一个基准，一个头指针一个尾指针，分别选取数据，
 * 遇到比基准小的放到基准的左边，比基准大的放到右边.
 * 分治思想
 */


 function quickSort(array, begin, end) {

    if (!array || array.length <= 0) {
        return;
    }
    // let begin = 0, end = array.length - 1;
    if (begin > end) {
        return;
    }
    let pivot = array[begin];
    let i = begin, j = end;
    while (i < j) {
        while (array[j] > pivot) {
            j = j - 1;
        }
        if (i < j) {
            array[i] = array[j];
        }
        while (array[i] < pivot) {
            i = i + 1;
        }
        if (i < j) {
            array[j] = array[i];
        }
    }
    array[j] = pivot;
    quickSort(array, begin, j - 1);
    quickSort(array,j + 1, end);
 }

let array = [6, 3, 2, 5, 4, 14, 12, 19];
console.log("================快排===================");
console.log('排序前：' + array.join(','));
quickSort(array, 0, array.length - 1);
console.log('排序后：' + array.join(','));
console.log("======================================");