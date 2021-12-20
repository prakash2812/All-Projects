// character > Human > Same
// character > robot > x73
// character > cyborg > dolph
const character = {
    talk(...msg) {
        console.log(msg.join(''))
    }
}

const human = Object.create(character, {
    speed: { value: 8 }, name: { value: 'Hector' }
})
human.walk = function () {
    this.talk(this.name, 'walking')
}
human.eat = function () {
    this.talk(this.name, 'walking')
}

const robot = Object.create(character)
robot.speed = 8
robot.id = 'THX1123'

robot.drive = function () {
    this.talk(this.id, '\u26A1', 'driving')
}

robot.wifi = function () {
    this.talk(this.id, '\u26A1', 'connecting')

}

const sam = Object.create(human, { name: { value: 'samuel' } })
sam.walk()
sam.talk('Hell0 from samuel')

const x73 = Object.create(robot, { id: { value: 'x73' } })
x73.drive()
x73.wifi()

// ---------------------- composition -----------------------------------

const talker = (state) => ({
    talk: (...state) => {
        console.log(`${this.state}`)
    }
})

const walker = (state) => ({
    walk: () => {
        let nm = state.name || state.id
        console.log(nm, walking)
    }
})

const eater = (state) => ({
    eat: () => {
        let nm = state.name || state.id
        console.log(nm, eating)
    }
})

const driver = (state) => ({
    drive: () => {
        let nm = state.name || state.id
        console.log(nm, driving)
    }
})
const wifier = (state) => ({
    wifi: () => {
        let nm = state.name || state.id
        console.log(nm, wifing)
    }
})

const Person = (name, speed = 3) => {
    let state = {
        name,
        speed
    }

    return {
        ...state,
        ...walker(state),
        ...talker(state),
        ...eater(state)
    }
}

let bob = Person('bob')
bob.walk()
bob.talk('hello from bob')
bob.eat()

const Android = (id, speed = 6) => {
    let state = {
        id,
        speed
    }
    return Object.assign({},
        talker(state),
        driver(state),
        wifier(state));
};
let k45 = Android('k45');
k45.drive();
k45.wifi();

const Cyborg = (name, speed) => {
    let state = {
        name,
        speed
    };
    return Object.assign({},
        talker(state),
        walker(state),
        wifier(state));
};
let Dolph = Cyborg('Dolph', 9);
Dolph.walk();
Dolph.wifi();