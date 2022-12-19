import { View, Text } from 'react-native'
import React, { useState } from 'react'


const Intelligence = () => {

    const [firstNum, setFirstNum] = useState('')
    const [secondNum, setSecondNum] = useState('')
    const [operation, setOperation] = useState('')
    const [result, setResult] = useState(null)

    const handleNumberPress = (num) => {
        setFirstNum(firstNum + num)
    }

    const handleOperationPress = (op) => {
        setOperation(op);
        setSecondNum(firstNum);
        setFirstNum('');
    }

    const clear = () => {
        setFirstNum('')
        setSecondNum('')
        setOperation('')
        setResult(null)
    }

    return (
        <View>
            <Text>Calculator</Text>
        </View>
    )
}

export default Intelligence