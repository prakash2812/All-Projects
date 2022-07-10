const oldState = {
    id: '0F8JIqi4zwvb77FGz6Wt',
    phone: '0700-3090279',
    lastName: 'Fiedler',
    firstName: 'Heinz Georg',
    location: [
        {
            state: 'Rheinland Pfalz',
            street: '4118, Schulstraße',
            city: 'Fellbach',
            timezone: '-7:00',
            country: 'Germany',
        },
        {
            street: '6786, Pecan Acres Ln',
            timezone: '+4:30',
            city: 'Perth',
            state: 'New South Wales',
            country: 'Australia',
        },
        {
            city: 'Porza',
            street: '9730, Rue Barrème',
            timezone: '-7:00',
            country: 'Switzerland',
            state: 'Ticino',
        },
    ],
    email: 'heinz-georg.fiedler@example.com',
    gender: 'male',
    title: 'mr',
    registerDate: '2020-03-07T00:42:32.221Z',
    picture: 'https://randomuser.me/api/portraits/men/81.jpg',
    dateOfBirth: '1974-03-12T21:15:08.878Z',
};

const newState = {
    id: '0F8JIqi4zwvb77FGz6Wt',
    phone: '0700-3090279',
    lastName: 'Fiedler',
    firstName: 'Heinz-Georg',
    location: [
        {
            state: 'Rheinland-Pfalz',
            street: '4118, Schulstraße',
            city: 'Fellbach',
            timezone: '-7:00',
            country: 'Germany',
        },
        {
            street: '6786, Pecan Acres Ln',
            timezone: '+4:30',
            city: 'Perth',
            state: 'South Wales',
            country: 'AUS',
        },
    ],
    email: 'heinz-georg.fiedler@gamil.com',
    gender: 'male',
    title: 'mr',
    registerDate: '2020-03-07T00:42:32.221Z',
    picture: 'https://randomuser.me/api/portraits/men/81.jpg',
    dateOfBirth: '1974-03-12T21:15:08.878Z',
};

let modifiedObj = {};
const compareFunc = (oldState = {}, newState = {}) => {
    const isArray = (arr) => Array.isArray(arr);
    const isObject = (obj) => typeof obj === 'object' && obj != null;

    if (isArray(oldState)) {
        let newArr = [];
        for (let i = 0; i < oldState.length; i++) {
            if (isArray(oldState[i]) || isObject(oldState[i])) {
                newArr.push(compareFunc(oldState[i], newState[i]));
            } else {
                if (oldState[key] !== newState[key]) {
                    modifiedObj[key] = newState[key];
                }
            }
        }
        return newArr;
    } else if (isObject(oldState) && isObject(newState)) {
        const newObj = {};
        for (let key of Object.keys(oldState)) {
            let value = oldState[key];
            if (isArray(value) || isObject(value)) {
                newObj[key] = compareFunc(value, newState[value]);
            } else {
                if (oldState[key] !== newState[key]) {
                    newObj[key] = newState[key];
                }
            }
        }
        return newObj;
    } else {
        if (oldState[key] !== newState[key]) {
            modifiedObj[key] = newState[key];
        }
    }
};

console.log(
    JSON.stringify(
        // Pass your result object here
        compareFunc(oldState, newState)
    )
);

// return modified properties only comparing old and new objects
let user = [1, 2, 3, 4, 5];

function fact(num) {
    return num === 0 || num === 1 ? 1 : num * fact(num - 1);
}
const fact1 = (num) => {
    const bigInt = BigInt(num);
    let result = 1n;
    for (let i = 1n; i <= bigInt; i++) {
        result *= bigInt;
    }
    return String(result);
};
// fact(90000);
console.log(fact1(90000));
