/* Binary search Tree */
// it contains collection of elements which are connected eachother
// it has two child nodes for parent node, left node and right node

// each node will be a BST
function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
/* insert node in binary search tree */
BST.prototype.insert = function (value) {
    if (value <= this.value) {
        if (!this.left) {
            this.left = new BST(value);
        } else {
            this.left.insert(value);
        }
    } else if (value > this.value) {
        if (!this.right) {
            this.right = new BST(value);
        } else {
            this.right.insert(value);
        }
    }
};

/* Contains method of binary search */
BST.prototype.contains = function (value) {
    if (value === this.value) {
        console.log(true);
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
/* travel all the left and right child nodes of binary tree */
/* instead travesing down the process each node but in  */
BST.prototype.depthFirstTraversal = function (cb) {
    cb(this.value); //-- pre ordered/ flows from start node to all nodes of left and right
    if (this.left) {
        this.left.depthFirstTraversal(cb);
    }
    cb(this.value); //in line order // ascending to decending
    if (this.right) {
        this.right.depthFirstTraversal(cb);
    }
    cb(this.value); //post-ordered
};

/* Breadth travelsal its horizontal cut of each node */
/* will traverse down each node level by level */
BST.prototype.breadthFirstTraversal = function (cb1) {
    let queue = [this];
    while (queue.length) {
        let node = queue.shift();
        cb1(node);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
};

/*  */
BST.prototype.getMinVal = function () {
    if (this.left) {
        this.left.getMinVal();
    } else console.log('min val', this.value);

    /*  let queue = [this];
  while (queue.length) {
    let node = queue.shift();
    if (node.left) queue.push(node.left);
    else {
      console.log("Min Val", node.value);
      return node.value;
    }
  } */
};

/*  */
BST.prototype.getMaxVal = function () {
    if (this.right) {
        this.right.getMaxVal();
    } else console.log('max val', this.value);
    /* let queue = [this];
  while (queue.length) {
    let node = queue.shift();
    if (node.right) queue.push(node.right);
    else {
      console.log("Max Val", node.value);
      return node.value;
    }
  } */
};

function cb(value) {
    console.log(value);
}
function cb1(node) {
    console.log(node.value);
}
let bst = new BST(50);
bst.insert(12);
bst.insert(122);
bst.insert(62);
bst.insert(32);
bst.insert(1);
bst.insert(56);
bst.insert(2);
bst.insert(132);
bst.insert(112);
bst.insert(21);
bst.insert(28);

// bst.contains(28);

bst.contains(219);
bst.depthFirstTraversal(cb);
bst.breadthFirstTraversal(cb1);
bst.getMinVal();
bst.getMaxVal();
