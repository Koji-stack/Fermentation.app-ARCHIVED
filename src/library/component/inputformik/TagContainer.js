// TagContainer
// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

import {Field} from 'formik';
import React from 'react';
import Strings from 'res/strings';
import {Chip} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

const TagInput = (props) => {
  // Here is a Chip from RN PAPER Library that, when clicked on, change display (becomes darker)
  // And through the field and form sent through the props and the Set object from Javascript
  // We create a dynamic array that add or delete a value depending on wether or not the user selected it

  const {field, form} = props;

  return (
    <>
      <Chip
        {...field}
        selected={field.value.includes(props.data)}
        onPress={() => {
          const set = new Set(field.value);
          if (set.has(props.data)) {
            set.delete(props.data);
          } else {
            set.add(props.data);
          }
          form.setFieldValue(field.name, Array.from(set));
          form.setFieldTouched(field.name, true);
        }}>
        {props.data}
      </Chip>
    </>
  );
};

const TagContainer = (props) => {
  // The TagContainer receives the array of possible tags to select and through a .map function generates clickable Chips

  return (
    <View style={styles.control}>
      {Strings.simpleTagsName.map((data, index) => (
        <View key={index} style={styles.chipContain}>
          <Field
            name={props.field.name}
            key={props.field.name}
            component={TagInput}
            data={data}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  control: {
    flexDirection: 'row',
    margin: 5,
  },
  chipContain: {
    flexWrap: 'wrap',
  },
});

export default TagContainer;
