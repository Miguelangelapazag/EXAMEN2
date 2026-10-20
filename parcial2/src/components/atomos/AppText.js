import react, { Children } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function AppText( {
    Children,
    variant = 'body',
    style,
  
  })
  {
    return (
        <Text style={[styles[variant], style]}>
            {Children}
        </Text>
    );
  }

  const styles = StyleSheet.create({
    heading: {
        fontSize: 29,
        fontWeight: '700',
        color: '#fff',
        lineHeight: 43,
    },
    body: {
        fontSize: 16,
        color: '#fff',
        lineHeight: 22,
    },
    