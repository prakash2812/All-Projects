let user = 1234;

const res = Array.from(String(user), (x) => +x);

console.log(res);
async function add() {
    console.log(1);
    const sec = await new Promise((res) => res(2));
    console.log(sec);
    console.log(3);
}
add();

function load(path, cb) {
    cb(null, path);
}

// load("./test.js",(err,data)=>{
//   if(err!==null){
//     return
//   }
//   console.log(data)
// })

function verify(fn) {
    return (path) => {
        return new Promise((resolve, reject) => {
            fn(path, (err, data) => {
                if (err !== null) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    };
}

let load2 = verify(load);

load2('./test.js')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log('err', err);
    });

function poly(params) {
    if (params.length <= 1) {
        return true;
    }
    if (params[0] === params[params.length - 1]) {
        return poly(params.slice(1, -1));
    } else {
        return false;
    }
}

console.log(poly('madam'));
console.log(poly('madamwe'));


let name = 'arjun';

function rev(name) {
    return !name?"":name.slice(-1) + rev(name.slice(0, -1));
}

console.log(rev("name"));

function sub() {
    try {
        Object.keys()?.map(item => item)
    } catch (error) {
        console.log('tesing error',error)
    }
}
