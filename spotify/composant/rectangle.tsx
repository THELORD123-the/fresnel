import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RoundBoxProps {
  text: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: number;
}

const RoundBox: React.FC<RoundBoxProps> = ({
  text,
  width = 200,
  height = 100,
  backgroundColor = '#1DB954',
  textColor = 'white',
  borderRadius = 16,
}) => {
  return (
    <View
      style={[
        styles.box,
        {
          width,
          height,
          backgroundColor,
          borderRadius,
        },
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default RoundBox;
