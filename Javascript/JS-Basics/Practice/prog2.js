// ----------------------sum of numbers from n1 to n2 --------------------------
const sumNumbers = (num1, num2) => {
    let max = Math.max(num1, num2)
    let min = Math.min(num1, num2)
    let sum = 0
    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum
}

console.log(sumNumbers(9, 1))

// ---------------------------------- prime numbers  ------------------------

const primeNo = (num) => {
    for (let i = 0; i <= max; i++) {
        if (i === 0 || i === 1) {
            continue
        }
        let primeflag = true
        for (let j = 2; j <= i / 2; j++) {
            if (i % j === 0) {
                primeflag = false
                break
            }
        }
        if (primeflag) {
            console.log(i)
        }
    }
}

primeNo(20)

// -------------------------------------------------------------------------------------------
