//constant look up time - O(1)
// constant insertion runtime - O(1)

//  hash tables are used to store data in form of
// key - string type and value-any datatype { key: 'arjun', value: 92064 }

// hash table is a simply table of a predetermined length
// in which each of the cells/buckets of table, holds a piece of data which has key and value

// we use array as our hashtable. each index of array will be a bucket(s)

// while inserting {key:'arjun',value:123} will do --
// hashmethod using key so that will get index number based on that place our data in to the buckets(indexes of array)

// while get('arjun') also we do again hashmethod so that will get its buckets value

function HashTable(size) {
    this.buckets = Array(size);
    this.totalBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

// hash method to get index/bucket of table
// modulus and charCodeAt of string method is used
HashTable.prototype.hash = function (key) {
    let total = 0;
    let length = 0;
    while (length < key.length) {
        total += key.charCodeAt(length);
        length++;
    }
    let bucket = total % this.totalBuckets;
    return bucket;
};

// if no bucket
// if only one bucket  there
// if the multiple buckets are there in same hash index number

HashTable.prototype.insert = function (key, value) {
    let index = this.hash(key);
    console.log('index', index);
    if (!this.buckets[index]) {
        this.buckets[index] = new HashNode(key, value);
    }
    // checking the first bucket instead checking on next linked buckets
    /* else if (this.buckets[index].key === key) {
        this.buckets[index].value = value;
    } */
    else {
        let currentNode = this.buckets[index];
        while (currentNode.next) {
            // update the insert if key is same input
            /* if (currentNode.next.key === key) {
                currentNode.next.value = value;
                return;
            } */
            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key, value);
    }
};

HashTable.prototype.get = function (key) {
    let index = this.hash(key);
    console.log('index', index);
    let currentNode = this.buckets[index];
    while (currentNode) {
        if (currentNode.key === key) {
            console.log(currentNode.value);
            return currentNode.value;
        }
        currentNode = currentNode.next;
    }
    return null;
};

HashTable.prototype.retrieveAll = function () {
    let buckets = [];
    for (let i = 0; i < this.totalBuckets; i++) {
        let currentNode = this.buckets[i];
        while (currentNode) {
            buckets.push(currentNode);
            currentNode = currentNode.next;
        }
    }
    return buckets;
};

let myHT = new HashTable(30);

myHT.insert('dean', 'deana@yahoo.com');
myHT.insert('megan', 'megan@gmail.com');
myHT.insert('Dean', 'deana@outlook.com');
myHT.insert('Dean', 'deanamachine@gamil.com'); //-- for update
console.log(myHT.get('dean'));
console.log(myHT.get('12'));
console.log(myHT);
console.log(myHT.retrieveAll());
