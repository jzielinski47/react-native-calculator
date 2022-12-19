import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { colors } from '../styles/colorpallette';

const CustomButton = ({ title, onPress }) => {

    const getColor = name => {
        if (name === 'C') return { color: colors.error };
        else if (isNaN(name)) return { color: colors.white87 }
        else return { color: colors.primary }
    }

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={[styles.text, getColor(title)]}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: { padding: 10, width: Dimensions.get('window').width / 5, height: Dimensions.get('window').width / 5, borderRadius: 250, backgroundColor: colors.panel, justifyContent: 'center', alignItems: 'center', margin: 5 },
    text: { fontSize: 26 },
});

export default CustomButton