import { StatusBar, StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import { colors } from './src/styles/colorpallette';

const App = () => {
  return (
    <View style={presets.container}>
      <View style={{ flex: 1 }}>
        <Text style={presets.text}>Display</Text>
      </View>
      <View style={presets.btnsPanel}>

        <View style={presets.row}>
          <CustomButton title={'C'} onPress={() => console.log('3')} />
          <CustomButton title={'( )'} onPress={() => console.log('3')} />
          <CustomButton title={'%'} onPress={() => console.log('3')} />
          <CustomButton title={'/'} onPress={() => console.log('3')} />
        </View>

        <View style={presets.row}>
          <CustomButton title={'7'} onPress={() => console.log('3')} />
          <CustomButton title={'8'} onPress={() => console.log('3')} />
          <CustomButton title={'9'} onPress={() => console.log('3')} />
          <CustomButton title={'*'} onPress={() => console.log('3')} />
        </View>

        <View style={presets.row}>
          <CustomButton title={'4'} onPress={() => console.log('3')} />
          <CustomButton title={'5'} onPress={() => console.log('3')} />
          <CustomButton title={'6'} onPress={() => console.log('3')} />
          <CustomButton title={'-'} onPress={() => console.log('3')} />
        </View>

        <View style={presets.row}>
          <CustomButton title={'1'} onPress={() => console.log('3')} />
          <CustomButton title={'2'} onPress={() => console.log('3')} />
          <CustomButton title={'3'} onPress={() => console.log('3')} />
          <CustomButton title={'+'} onPress={() => console.log('3')} />
        </View>

        <View style={presets.row}>
          <CustomButton title={'+/-'} onPress={() => console.log('3')} />
          <CustomButton title={'0'} onPress={() => console.log('3')} />
          <CustomButton title={','} onPress={() => console.log('3')} />
          <CustomButton title={'='} onPress={() => console.log('3')} />
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default App

const presets = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' },
  row: { flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' },
  text: { color: 'white' },
  btnsPanel: { flex: 1.8, flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }
});
