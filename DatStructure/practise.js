function binarySearch(array, key) {
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;

    while (low <= high) {
        mid = Math.floor((low + high) / 2, 10);
        element = array[mid];
        if (element < key) {
            low = mid + 1;
        } else if (element > key) {
            high = mid - 1;
        } else {
            console.log(mid);
        }
    }
    return -1;
}
// binarySearch([1, 23, 43, 56, 128, 21], 43);

function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function (value) {
    let newBST = new BST(value);
    if (value <= this.value) {
        if (!this.left) this.left = newBST;
        else this.left.insert(value);
    } else if (value > this.value) {
        if (!this.right) {
            this.right = newBST;
        } else {
            this.right.insert(value);
        }
    }
};

BST.prototype.contains = function (value) {
    if (value === this.value) {
        console.log(value, true);
        return true;
    }
    if (value <= this.value) {
        if (!this.left) return false;
        else this.left.contains(value);
    }
    if (value > this.value) {
        if (!this.right) return false;
        else this.right.contains(value);
    }
};

let bs = new BST(50);
bs.insert(30);
bs.insert(40);
bs.insert(60);
bs.insert(70);
console.log(bs);
console.log(bs.contains(20));
