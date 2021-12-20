// https://www.youtube.com/watch?v=7HolHe7Gqbw -- ui dot dev
// https://www.youtube.com/watch?v=fbpXQ0e8Mp8&list=PLyuRouwmQCjkYdv4VjuIbvcMZVWSdOm58&index=68
// https://www.youtube.com/watch?v=nnwD5Lwwqdo&t=316s  -- wds

class Monster {
    constructor(name) {
        console.log(this)
        this.name = name
    }
    walk() {
        console.log(`${this.name}:: walk`)
    }
    attack() {
        console.log(`${this.name} :: attack`)
    }
}

class FlyingMonster extends Monster {
    fly() {
        console.log(`${this.name}::flying`)
    }
}
class SwimmingMonster extends Monster {
    swim() {
        console.log(`${this.name} :: flying`)
    }
}

const bear = new Monster('bear');
bear.attack()
bear.walk()

const eagle = new FlyingMonster('eagle')
eagle.attack()
eagle.walk()
eagle.fly()

const shark = new SwimmingMonster('shark')
shark.attack()
shark.walk()
shark.swim()

// --------------------------------------------------------------------------------

// --------------------------------- composition ----------------------------------------------------------------

// just create all factorial functions(create objects inside that methods) for methods 
function fly({ name }) {
    return {
        fly: () => console.log(`${name},flying`)
    }
}
function swim({ name }) {
    return {
        swim: () => console.log(`${name},swim`)
    }
}

function walkAttack({ name }) {
    return {
        walk: () => console.log(`${name},walk`),
        attack: () => console.log(`${name},attack`)
    }
}

function flyingMonster(name) {
    const monster = { name: name }
    return {
        ...monster,
        ...fly(monster),
        ...swim(monster),
        ...walkAttack(monster)
    }
}
function swimmingMonster(name) {
    const monster = { name: name }
    return {
        ...monster,
        ...swim(monster),
        ...fly(monster),
        ...walkAttack(monster)
    }
}

let eagle = flyingMonster('eagle')
eagle.attack()
eagle.fly()
eagle.swim()
eagle.walk()

let shark = swimmingMonster('shark')
shark.attack()
shark.fly()
shark.swim()
shark.walk()