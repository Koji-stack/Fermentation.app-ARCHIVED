import dayjs from 'dayjs';
import {Emoji} from 'emoji-mart-native';
import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Chip} from 'react-native-paper';
import {hoursDiff} from 'res/functions';
import Strings from 'res/strings';

const CardButton = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Emoji emoji={{id: 'pencil'}} size={16} />
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Emoji emoji={{id: 'microscope'}} size={16} />
        <Text>Mesure</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Emoji emoji={{id: 'camera'}} size={16} />
        <Text>Capture</Text>
      </TouchableOpacity>
    </View>
  );
};

const TempBlock = (props) => {
  if (props.temp === Strings.noTempDefined) {
    return null;
  }
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
  if (props.humid === '') {
    return null;
  }
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

const NextStep = (props) => {
  if (props.time === 'Step ended') {
    return <Button title={'Push to go next step'} />;
  }
  return null;
};

const FermentCard = (props) => {
  let currentStep = props.currentStep - 1,
    secondLineRender = true,
    step = props.steps[currentStep],
    remaining = Math.round(
      step.durationStep - hoursDiff(step.estimatedEndStep),
    ),
    timeSpent = '',
    temp = '',
    humidity = '';

  if (step.estimatedEndStep < dayjs()) {
    timeSpent = 'Step ended';
  } else {
    if (step.durationStep < 49) {
      timeSpent = remaining + ' of ' + step.durationStep + ' hours';
    } else {
      timeSpent =
        Math.round(remaining / 24) + ' of ' + step.durationStep / 24 + ' days';
    }
  }

  if (typeof step.tempStep[0] === 'number') {
    temp = step.tempStep[0] + '-' + step.tempStep[1] + '°C';
  } else {
    temp = Strings.noTempDefined;
  }

  if (temp === Strings.noTempDefined && humidity === '') {
    secondLineRender = false;
  }

  return (
    <View>
      <NextStep time={timeSpent} />
      <View style={styles.chipContainer}>
        {step.controlSimpleStep.map((data, index) => (
          <Chip key={index} style={styles.chipText}>
            {data}
          </Chip>
        ))}
      </View>
      <View style={styles.lineContainer}>
        <TimeBlock time={timeSpent} />
        <NameBlock name={step.nameStep} />
      </View>
      {secondLineRender ? (
        <View style={styles.secondLineContainer}>
          <HumidBlock humid={humidity} />
          <TempBlock temp={temp} />
        </View>
      ) : (
        <View />
      )}
      <CardButton />
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    justifyContent: 'center',
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
    flexDirection: 'row',
  },
});

export default FermentCard;
