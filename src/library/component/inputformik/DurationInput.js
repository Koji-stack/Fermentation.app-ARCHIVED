// DurationInput
// A custom made input reliant on rn-gesture-handler to scroll and add a number
// It is a group of 3 fields (number of hours, days, and month) which produce one data at the end
// No matter what the user chooses, the final result is translated in the smallest unit usually used in fermentation : hours

// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Strings from 'res/strings';

const DurationInput = (props) => {
  const {
    field: {name},
    form: {setFieldValue},
  } = props;

  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [month, setMonth] = useState(0);

  const onMonthChange = (e) => {
    // This comment work for the two following function (onDay and onHour)
    // The position of the finger on the vertical axis defines the number
    // We chose that the user has to go up to increase and down to decrease
    // The function helps display the current number to the user, so he knows in realtime where is at
    if (e.nativeEvent.y > 0) {
      setMonth(0);
    } else if (e.nativeEvent.y < -120) {
      setMonth(12);
    } else {
      setMonth(Math.round(e.nativeEvent.y * -0.1));
    }
  };

  const onDayChange = (e) => {
    if (e.nativeEvent.y > 0) {
      setDay(0);
    } else if (e.nativeEvent.y < -310) {
      setDay(31);
    } else {
      setDay(Math.round(e.nativeEvent.y * -0.1));
    }
  };

  const onHourChange = (e) => {
    if (e.nativeEvent.y > 0) {
      setHour(0);
    } else if (e.nativeEvent.y < -240) {
      setHour(24);
    } else {
      setHour(Math.round(e.nativeEvent.y * -0.1));
    }
  };

  const onStateChange = (e) => {
    if (e.nativeEvent.state === State.END) {
      setFieldValue(name, hour + month * 744 + day * 24);
    }
  };

  console.log(props);

  return (
    <View style={styles.durationContainer}>
      <View style={styles.countingContainers}>
        <Text>{Strings.month}</Text>
        <PanGestureHandler
          onHandlerStateChange={onStateChange}
          onGestureEvent={onMonthChange}>
          <Text style={styles.counting}>{month}</Text>
        </PanGestureHandler>
      </View>

      <View style={styles.countingContainers}>
        <Text>{Strings.day}</Text>
        <PanGestureHandler
          onHandlerStateChange={onStateChange}
          onGestureEvent={onDayChange}>
          <Text style={styles.counting}>{day}</Text>
        </PanGestureHandler>
      </View>

      <View style={styles.countingContainers}>
        <Text>{Strings.hour}</Text>
        <PanGestureHandler
          onHandlerStateChange={onStateChange}
          onGestureEvent={onHourChange}>
          <Text style={styles.counting}>{hour}</Text>
        </PanGestureHandler>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  durationContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  countingContainers: {
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'column',
    margin: 5,
  },
  counting: {
    fontSize: 20,
  },
});

export default DurationInput;
