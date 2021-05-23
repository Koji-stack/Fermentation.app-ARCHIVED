// IngredientTextInput
// Custom TextInput for regular text component made to fit in Formik components and refractor for simplicity sake.
// Since our form for registering ferment WILL be long and complex, we chose to simplify and spread it out for readability.

// The main point of all of this : onChangeText={(text) => onChange(name)(text)}
// This allows us to dynamically add new custom fields and track the state separatly using Formik magic without complex store manipulation.

// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

import {Button, StyleSheet, View} from 'react-native';
import React from 'react';
import Strings from 'res/strings';
import FormTextInput from 'inputformik/FormTextInput.js';
import {Field} from 'formik';

const IngredientTextInput = (props) => {
  const {
    form: {values},
  } = props;
  return (
    <>
      {values.ingredients.map((ingredients, index) => (
        <View key={index} style={styles.container}>
          <Field
            key={`ingredients.${index}.nameIngredient`}
            name={`ingredients.${index}.nameIngredient`}
            component={FormTextInput}
            placeholder={Strings.placeholderIngredient}
            multiline={false}
            sizeStyle={'regular'}
          />
          <Field
            key={`ingredients.${index}.quantity`}
            name={`ingredients.${index}.quantity`}
            component={FormTextInput}
            placeholder={Strings.placeholderQuantity}
            multiline={false}
            sizeStyle={'regular'}
          />
          <Button
            key={`ingredients.${index}.remove`}
            title="-"
            onPress={() => {
              props.remove(index);
            }}
          />
        </View>
      ))}
      <Button
        title={Strings.scrMnAddIngButton}
        onPress={() => {
          props.push({
            nameIngredient: '',
            quantity: '',
          });
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default IngredientTextInput;
