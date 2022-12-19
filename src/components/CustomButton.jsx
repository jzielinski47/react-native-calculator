import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../styles/colorpallette';
import React from 'react'

const CustomButton = ({ title, onPress, size, orientation }) => {

    const getColor = name => {
        if (name === 'C') return { color: colors.error };
        else if (isNaN(name)) return { color: colors.white87 }
        else return { color: colors.primary }
    }

    return (
        <TouchableOpacity style={[styles.button, { width: !orientation ? 2.5 * size : size, height: size }]} onPress={onPress}>
            <Text style={[!orientation ? { fontSize: 16 } : { fontSize: 24 }, getColor(title)]}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: { padding: 10, borderRadius: 250, backgroundColor: colors.panel, justifyContent: 'center', alignItems: 'center', margin: 5 },
});

export default CustomButton