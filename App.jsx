import { View, SafeAreaView, StyleSheet, Dimensions, Text } from 'react-native';
import { colors } from './src/styles/colorpallette';
import React, { useState, useEffect } from 'react';
import CustomButton from './src/components/CustomButton';

const App = () => {

  const isPortrait = () => Dimensions.get('screen').height >= Dimensions.get('screen').width;

  const [orientation, setOrientation] = useState(isPortrait());
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  const [delimiter, setDelimiter] = useState(6)

  useEffect(() => { Dimensions.addEventListener("change", () => setOrientation(isPortrait())) }, [])

  useEffect(() => {
    setScreenWidth(Dimensions.get('window').width)
    setDelimiter(orientation ? 6 : 18)
  }, [orientation])

  const [input, setInput] = useState([]);
  const [result, setResult] = useState();

  const count = () => setResult(eval(input.join("")))

  const clear = () => { setInput([]); setResult(); }

  const remove = () => setInput(input.slice(0, -1))

  const updateDisplay = (op) => {

    const possibleStandardOps = ['+', '-', '/', '*']
    const lastOperation = input[input.length - 1]
    if (possibleStandardOps.includes(op) && possibleStandardOps.includes(lastOperation)) return;

    setInput([...input, op])

    // isNaN(op)
  }

  const cutLength = (string, len) => string ? string.toString().slice(0, len) : null

  const pow = () => setResult(Math.pow(eval(input.join("")), 2));
  const sqrt = () => setResult(Math.sqrt(eval(input.join("")), 2));
  const sin = () => setResult(Math.sin(eval(input.join(""))));
  const cos = () => setResult(Math.cos(eval(input.join(""))));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.text}>{input}</Text>
        <Text style={styles.result}>{cutLength(result, 12)}</Text>
      </View>
      <View style={styles.panel}>
        <View style={styles.column}>
          <CustomButton title={'C'} onPress={() => clear()} size={screenWidth / delimiter} orientation={orientation} />
          <CustomButton title={'7'} onPress={() => updateDisplay('7')} size={screenWidth / delimiter} orientation={orientation} />
          <CustomButton title={'4'} onPress={() => updateDisplay('4')} size={screenWidth / delimiter} orientation={orientation} />
          <CustomButton title={'1'} onPress={() => updateDisplay('1')} size={screenWidth / delimiter} orientation={orientation} />
          <CustomButton title={'.'} onPress={() => updateDisplay('.')} size={screenWidth / delimiter} orientation={orientation} />
        </View>

        <View style={styles.column}>
          <CustomButton title={'( )'} onPress={() => updateDisplay('')} size={screenWidth / delimiter} orientation={orientation} />
          <CustomButton title={'8'} onPress={() => updateDisplay('8')} size={screenWidth / delimiter} orientation={orientation} />
          <CustomButton title={'5'} onPress={() => updateDisplay('5')} size={screenWidth / delimiter} orientation={orientation} />
          <CustomButton title={'2'} onPress={() => updateDisplay('2')} size={screenWidth / delimiter} orientation={orientation} />
          <CustomButton title={'0'} onPress={() => updateDisplay('0')} size={screenWidth / delimiter} orientation={orientation} />
        </View>

        <View style={styles.column}>
          <CustomButton title={'[ ]'} onPress={() => updateDisplay('')} size={screenWidth / delimiter} orientation={orientation} />
          <CustomButton title={'9'} onPress={() => updateDisplay('9')} size={screenWidth / delimiter} orientation={orientation} />
          <CustomButton title={'6'} onPress={() => updateDisplay('6')} size={screenWidth / delimiter} orientation={orientation} />
          <CustomButton title={'3'} onPress={() => updateDisplay('3')} size={screenWidth / delimiter} orientation={orientation} />
          <CustomButton title={'='} onPress={() => count()} size={screenWidth / delimiter} orientation={orientation} />
        </View>

        {!orientation ? (
          <View style={styles.column}>
            <CustomButton title={'[ ]'} onPress={() => updateDisplay('')} size={screenWidth / delimiter} orientation={orientation} />
            <CustomButton title={'Sqrt'} onPress={() => sqrt()} size={screenWidth / delimiter} orientation={orientation} />
            <CustomButton title={'Pow'} onPress={() => pow()} size={screenWidth / delimiter} orientation={orientation} />
            <CustomButton title={'Sin'} onPress={() => sin()} size={screenWidth / delimiter} orientation={orientation} />
            <CustomButton title={'Cos'} onPress={() => cos()} size={screenWidth / delimiter} orientation={orientation} />
          </View>
        ) : null}

        <View style={styles.column}>
          <CustomButton title={'Del'} onPress={() => remove()} size={screenWidth / delimiter} orientation={orientation} />
          <CustomButton title={'/'} onPress={() => updateDisplay('/')} size={screenWidth / delimiter} orientation={orientation} />
          <CustomButton title={'*'} onPress={() => updateDisplay('*')} size={screenWidth / delimiter} orientation={orientation} />
          <CustomButton title={'-'} onPress={() => updateDisplay('-')} size={screenWidth / delimiter} orientation={orientation} />
          <CustomButton title={'+'} onPress={() => updateDisplay('+')} size={screenWidth / delimiter} orientation={orientation} />
        </View>
      </View>


    </SafeAreaView>
  );

};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' },
  display: { flex: 1, width: '100%', margin: 10, padding: 20, justifyContent: 'center', alignItems: 'flex-end' },
  panel: { flex: 2, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', width: '100%', padding: 10, },
  column: { flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' },
  text: { color: colors.white60, fontSize: 36, overflow: 'hidden' },
  result: { color: colors.white87, fontSize: 48, width: '100%', textAlign: 'right' },
  btnsPanel: { flex: 1.8, flexDirection: 'column', width: 'delimiter0%', justifyContent: 'center', alignItems: 'center' }
});
