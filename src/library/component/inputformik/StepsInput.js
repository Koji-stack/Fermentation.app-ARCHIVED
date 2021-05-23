// StepsInput
// This is the component that, in a way, is the form within the form
// It contains all the specific input and will become larger in the future
// So the StepsInput rather is used to have lighter files and code samples.

// This component ONLY WORKS within a <Formik> component and as a child of a <FieldArray> component.

import React from 'react';
import FormTextInput from 'inputformik/FormTextInput.js';
import TemperatureInput from 'inputformik/TemperatureInput.js';
import {Field} from 'formik';
import Subheader from 'ui/Subheader.js';
import DurationInput from 'inputformik/DurationInput.js';
import TagContainer from 'inputformik/TagContainer.js';
import Strings from 'res/strings';
import {StyleSheet, View} from 'react-native';

const StepsInput = (section, index, isActive) => {
  return (
    <View key={index} style={styles.container}>
      <Field
        key={`steps.${index}.nameStep`}
        name={`steps.${index}.nameStep`}
        placeholder={Strings.afNameStep}
        component={FormTextInput}
        multiline={false}
        sizeStyle={'subheader'}
      />
      <Subheader subheader={Strings.temperature} />
      <Field
        key={`steps.${index}.tempStep`}
        name={`steps.${index}.tempStep`}
        component={TemperatureInput}
      />

      <Subheader subheader={Strings.duration} />
      <Field
        key={`steps.${index}.durationStep`}
        name={`steps.${index}.durationStep`}
        component={DurationInput}
      />

      <Subheader subheader={Strings.simpleControls} />
      <Field
        key={`steps.${index}.controlSimpleStep`}
        name={`steps.${index}.controlSimpleStep`}
        component={TagContainer}
      />
      <Subheader subheader={Strings.comment} />
      <Field
        key={`steps.${index}.commentStep`}
        name={`steps.${index}.commentStep`}
        placeholder={Strings.placeholderComment}
        component={FormTextInput}
        multiline={true}
        sizeStyle={'regular'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderRadius: 20,
    margin: 10,
  },
});

export default StepsInput;
