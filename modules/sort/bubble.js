// 冒泡排序
// 交换相邻的两个元素，一趟循环把最大（或最小）的元素排在最边上。

// 实现数组中的元素交换

function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp; 
}
// 普通冒泡排序
function bubbleSort(array) {
    if (!array || array.length <= 0) {
        return;
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length - i; j++) {
            if (array[j] < array[j-1]) {
                swap(array, j, j-1);
            }
        }
    }
}
// 优化1： 当没有发生交换的时候证明已经排序完了

function bubbleSort1(array) {
    if (!array || array.length <= 0) {
        return;
    }
    let isSwap = false; 
    for (let i = 0; i < array.length; i++) {
        isSwap = false;
        for (let j = 1; j < array.length - i; j++) {
            if (array[j] < array[j-1]) {
                swap(array, j, j-1);
                isSwap = true;
            }
        }
        if (!isSwap) {
            break;
        }
    }
}
// 优化2：最后一次交换的位置的后面都是已排好序的
function bubbleSort2(array) {
    if (!array || array.length <= 0) {
        return;
    }
    let isSwap = false; 
    let lastChangeIdx = array.length;
    for (let i = 0; i < array.length; i++) {
        isSwap = false;
        let cIdx = 0;
        for (let j = 1; j < lastChangeIdx; j++) {
            if (array[j] < array[j-1]) {
                swap(array, j, j-1);
                isSwap = true;
                cIdx = j;
            }
        }
        // 记录最后一次交换的位置
        lastChangeIdx = cIdx;
        if (!isSwap) {
            break;
        }
    }

}

let array = [16,13,11,12,10];
console.log('================冒泡===================');
console.log('排序前：' + array.join(','));
bubbleSort2(array);
console.log('排序后：' + array.join(','));
console.log('======================================');