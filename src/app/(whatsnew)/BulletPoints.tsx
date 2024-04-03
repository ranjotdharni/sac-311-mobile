import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import bulletPointsData from './patch.json';
import { globalFont } from '../../customs';

interface BulletPoints {
  points: string[];
}

const BulletPointDisplay: React.FC = () => {
  const data: BulletPoints = bulletPointsData;

  return (
    <View style={styles.container}>
      {data.points.map((point, index) => (
        <View key={index} style={styles.bulletPointContainer}>
          <Text style={styles.bulletPoint}>• {point}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: globalFont.chosenFont,
  },
  bulletPointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bulletPoint: {
    padding: 10,
    fontSize: 14,
    fontFamily: globalFont.chosenFont,
  },
});

export default BulletPointDisplay;
