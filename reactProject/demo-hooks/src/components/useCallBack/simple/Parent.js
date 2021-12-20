import React, { useState, useCallback } from 'react'
import Title from './Title'
import Counter from './Counter'
import Button from './Button'

const Parent = () => {
    const [age, setAge] = useState(() => 27)
    const [salary, setSalary] = useState(() => 5000)

    const ageHandler = useCallback(() => {
        setAge(prevAge => prevAge + 1)
    }, [age])

    const salaryHandler = useCallback(() => {
        setSalary(prevSal => prevSal + 1000)
    }, [salary])
    return (
        <div>
            <Title />
            <Counter text="age" count={age} />
            <Button handleClick={ageHandler}>Age update</Button>
            <Counter text="salary" count={salary} />
            <Button handleClick={salaryHandler}>Salary Update</Button>
        </div>
    )
}

export default Parent
