// TemperatureInput
// Is meant to be custom made but now relies on the MultiSlider Library
// Allows us to create a slider for the user to select intuitively a range of temperature

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TemperatureInput = (props) => {
  const {
    field: {name},
    form: {setFieldValue},
  } = props;

  const [temp, setTemp] = useState(['*', '*']);

  let tempDisplay = temp[0] + ' - ' + temp[1] + '°C';

  return (
    <View style={styles.container}>
      <Text style={styles.tempDisplay}>{tempDisplay}</Text>
      <MultiSlider
        onValuesChangeFinish={(val) => setFieldValue(name, val)}
        onValuesChange={(vals) => setTemp(vals)}
        min={8}
        max={40}
        values={temp}
        minMarkerOverlapStepDistance={2}
        allowOverlap={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  tempDisplay: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 15,
  },
});

export default TemperatureInput;
