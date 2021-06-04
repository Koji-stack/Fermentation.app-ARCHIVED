import dayjs from 'dayjs';
import {Emoji} from 'emoji-mart-native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {hoursDiff} from 'res/functions';
import Strings from 'res/strings';

const TempBlock = (props) => {
  return (
    <View style={styles.infoContainer}>
      <Emoji emoji={{id: 'thermometer'}} size={16} />
      <Text>{props.temp}</Text>
    </View>
  );
};

const TimeBlock = (props) => {
  return (
    <View style={styles.infoContainer}>
      <Emoji emoji={{id: 'alarm_clock'}} size={16} />
      <Text>{props.time}</Text>
    </View>
  );
};

const HumidBlock = (props) => {
  return (
    <View style={styles.infoContainer}>
      <Emoji emoji={{id: 'droplet'}} size={16} />
      <Text>{props.humid}</Text>
    </View>
  );
};

const NameBlock = (props) => {
  return (
    <View style={styles.infoContainer}>
      <Emoji emoji={{id: 'one'}} size={16} />
      <Text>{props.name}</Text>
    </View>
  );
};

const FermentCard = (props) => {
  let currentStep = props.currentStep - 1,
    step = props.steps[currentStep],
    stepDate = step.estimatedEndStep,
    stepDuration = step.durationStep,
    stepTemp = step.tempStep,
    remaining = Math.round(stepDuration - hoursDiff(stepDate)),
    timeSpent = '',
    temp = '',
    humidity = 'test';

  if (stepDate < dayjs()) {
    timeSpent = 'Step ended';
  } else {
    if (stepDuration < 49) {
      timeSpent = remaining + ' of ' + stepDuration + ' hours';
    } else {
      timeSpent =
        Math.round(remaining / 24) + ' of ' + stepDuration / 24 + ' days';
    }
  }

  if (typeof stepTemp[0] === 'number') {
    temp = step.tempStep[0] + '-' + step.tempStep[1] + '°C';
  } else {
    temp = Strings.noTempDefined;
  }

  return (
    <View>
      <View style={styles.chipContainer}>
        {step.controlSimpleStep.map((data, index) => (
          <Text style={styles.chipText} key={index}>
            {data}
          </Text>
        ))}
      </View>
      <View style={styles.lineContainer}>
        <NameBlock name={step.nameStep} />
        <TimeBlock time={timeSpent} />
      </View>
      <View style={styles.lineContainer}>
        <HumidBlock humid={humidity} />
        <TempBlock temp={temp} />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Edit" />
        <Button style={styles.button} title="Measure" />
        <Button style={styles.button} title="Capture" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chipText: {
    marginHorizontal: 2,
  },
  lineContainer: {
    flexDirection: 'row',
    borderTopColor: '#DEDEDE',
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flex: 2,
    marginBottom: 5,
  },
  secondLineContainer: {
    flexDirection: 'row',
    flex: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexGrow: 3,
    margin: 5,
  },
  button: {
    flexGrow: 1,
  },
});

export default FermentCard;
