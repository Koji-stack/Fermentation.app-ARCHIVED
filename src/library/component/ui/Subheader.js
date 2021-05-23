// Subheader
// Classic reusable subheader component that is meant to encapsulate custom Text sent from other components
// Usually meant for under titles and complementary but important informations

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Subheader = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.subheader}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: 'black',
  },
  text: {
    fontSize: 20,
  },
});

export default Subheader;
