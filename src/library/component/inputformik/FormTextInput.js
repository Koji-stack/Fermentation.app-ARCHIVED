// FormTextInput
//This a custom bigger text input specifically styled to match header exceptations, usually meant for ferment titles and heavy titles.
// Since our form for registering ferment WILL be long and complex, we chose to simplify and spread it out for readability.

// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const FormTextInput = (props) => {
  // Formik sends in the props that automagically connects the Input form with the
  // general Formik Context (provided within the AddFerment screen with <Formik> component)
  const {
    field: {name, onBlur, onChange, value},
    form: {setFieldTouched},
    sizeStyle,
    ...inputProps
  } = props;

  let inputStyle = 10;
  switch (sizeStyle) {
    case 'header':
      inputStyle = 25;
      break;
    case 'subheader':
      inputStyle = 17;
      break;
    case 'regular':
      inputStyle = 12;
      break;
    default:
      console.log('default on FormTextInput switch');
  }
  // The onChange(name)(text) is specific to Formik allows us to send in from the parent component a "name" prop that serves as an ID ;
  // The text is the value put in by the user.
  // setFieldTouched is a Formik hook and onBlur allow the parent component to be aware of which Input is in interaction with the user.

  return (
    <>
      <TextInput
        style={[styles.textinput, {fontSize: inputStyle}]}
        multiline={props.multiline}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default FormTextInput;
