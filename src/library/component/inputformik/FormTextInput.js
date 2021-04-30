// FormTextInput
//This a custom bigger text input specifically styled to match header exceptations, usually meant for ferment titles and heavy titles.
// Since our form for registering ferment WILL be long and complex, we chose to simplify and spread it out for readability.

// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

import React from 'react';
import styled from 'styled-components/native';

const FormTextInput = (props) => {
  // Formik sends in the props that automagically connects the Input form with the
  // general Formik Context (provided within the AddFerment screen with <Formik> component)
  const {
    field: {name, onBlur, onChange, value},
    form: {setFieldTouched},
    sizeStyle,
    ...inputProps
  } = props;

  let inputStyle = '10px';
  switch (sizeStyle) {
    case 'header':
      inputStyle = '25px';
      break;
    case 'subheader':
      inputStyle = '17px';
      break;
    case 'regular':
      inputStyle = '12px';
      break;
    default:
      console.log('default on FormTextInput switch');
  }
  // The onChange(name)(text) is specific to Formik allows us to send in from the parent component a "name" prop that serves as an ID ;
  // The text is the value put in by the user.
  // setFieldTouched is a Formik hook and onBlur allow the parent component to be aware of which Input is in interaction with the user.

  return (
    <>
      <StyledTextInput
        multiline={props.multiline}
        inputStyle={inputStyle}
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

const StyledTextInput = styled.TextInput`
  color: ${(props) => props.theme.main};
  font-size: ${(props) => props.inputStyle};
  margin-left: auto;
  margin-right: auto;
`;

export default FormTextInput;
