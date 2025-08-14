import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CercleTextProps {
  text: string;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
}

const CercleText: React.FC<CercleTextProps> = ({
  text,
  size = 80,
  backgroundColor = '#1DB954',
  textColor = 'white',
}) => {
  return (
    <View
      style={[
        styles.cercle,
        {
            width: size,
           height: size,
           borderRadius: size / 2,
           backgroundColor,
        },
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cercle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CercleText;
