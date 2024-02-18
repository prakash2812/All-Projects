let result = [1, 1, 1, 2, 5, 3, 3, 4, 2, 5, 5, 2, , 2, 2];

let map = new Map();

result.forEach((ele) => {
    if (map.has(ele)) {
        map.set(ele, map.get(ele) + 1);
    } else {
        map.set(ele, 1);
    }
});
let final = Array.from(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2);

console.log(final);

console.log(Array.from(map));
console.log(Object.values(map));
for (let [key, val] of map) {
    console.log(key, val);
}

console.log(map);
