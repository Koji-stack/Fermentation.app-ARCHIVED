// AppFerment Screen
// This is the Screen and higher parent component that collects the data when the user decides to add a new ferment to his list
// The Formik library helps us automagically create a local state proper to the form, which will help us only call Redux when needed.
// The other main advantage is that it allows us to encapsulate more easily and to render a readable and accessible code.

import React from 'react';
import Subheader from 'ui/Subheader.js';
import IngredientTextInput from 'inputformik/IngredientTextInput';
import RegularDateInput from 'inputformik/RegularDateInput';
import FormTextInput from 'inputformik/FormTextInput';
import StepsContainer from 'inputformik/StepsContainer';
import Strings from 'res/strings';
import {ScrollView, Button} from 'react-native';
import {Field, FieldArray, Formik} from 'formik';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

const AddFermentScreen = () => {
  const submit = (prop) => {
    prop.steps[0].estimatedEndDate = dayjs(prop.date).add(
      prop.steps[0].durationStep,
      'hour',
    );
    console.log(prop.steps[0]);
  };
  return (
    <ScrollView>
      {/* The Formik library helps us organize the gathering of our data in one place to simplify control, test,
      and create new data */}
      <Formik
        initialValues={{
          fermentName: '',
          fermentType: '',
          date: new Date(),
          ingredients: [{nameIngredient: '', quantity: ''}],
          currentStep: 1,
          steps: [
            {
              nameStep: '',
              durationStep: '',
              tempStep: '',
              controlSimpleStep: [],
              commentStep: '',
              estimatedEndDate: '',
              effectiveEndDate: '',
            },
          ],
        }}
        onSubmit={(values) => submit(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            {/* This field call for a specifically tailored TextInput <FormTextInput> to gather the main name of the ferment */}
            <Field
              component={FormTextInput}
              name="fermentName"
              placeholder={Strings.afNameFerment}
              multiline={false}
              sizeStyle={'header'}
            />
            <Subheader subheader={Strings.afTypeFerment} />

            {/* This field call for a specifically tailored TextInput <FormTextInput> to gather the type of the ferment */}
            <Field
              component={FormTextInput}
              name="fermentType"
              placeholder={Strings.afTypeFerment}
              multiline={false}
              sizeStyle={'subheader'}
            />

            <Subheader subheader={'Ferment start date'} />

            {/* This field call for a specifically tailored TextInput <RegularDateInput> to gather the date when the ferment began
            it contains the DatePicker component */}
            <Field component={RegularDateInput} name="date" />

            <Subheader subheader={Strings.afIngredient} />

            {/* This fieldarray is made to have a dynamic field generation to add a large amount of different ingredient
            <IngredientTextInput> is itself reliant on <FormTextInput> */}
            <FieldArray name="ingredients" component={IngredientTextInput} />

            <Subheader subheader={Strings.afSteps} />

            {/* This field is the big boy. Its an array of an array of sorts. Quite nested, it is the main point of difficulty here.
            This is a collapsible form within the bigger form. It can be dynamically generated in order to add as many steps as needed.
            The point is for the fermenter to create a procedural recipe reflecting closely his practice. */}
            <FieldArray name="steps" component={StepsContainer} />

            <Button onPress={handleSubmit} title={Strings.scrMnAddButton} />
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default AddFermentScreen;
