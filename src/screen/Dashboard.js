// Main Screen

import React from 'react';
import {Button, View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Strings from 'res/strings';
import ferment from 'res/tempdata.js';
import FermentCard from 'ui/FermentCard.js';
import {useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {hoursDiff, timeRemaining} from 'res/functions.js';

const Dashboard = () => {
  const navigation = useNavigation();
  const [activeSections, setActiveSections] = useState([]);

  const emoji = require('node-emoji');

  const renderHeader = (section, index, isActive) => {
    let stepNumber = section.currentStep - 1,
      width = '0%',
      progressWidth =
        100 -
        Math.round(
          (hoursDiff(section.steps[stepNumber].estimatedEndStep) /
            section.steps[stepNumber].durationStep) *
            100,
        );

    if (progressWidth > 100) {
      width = '100%';
    } else {
      width = progressWidth + '%';
    }

    return (
      <View style={styles.headerContainer}>
        <View style={styles.progressBackground} />
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={[StyleSheet.absoluteFill, {backgroundColor: '#DEDEDE', width}]}
        />
        <Text>
          {emoji.get('alarm_clock')}
          {section.fermentName} - Step n°{section.currentStep} -{' '}
          {timeRemaining(
            section.steps[stepNumber].estimatedEndStep,
            section.steps[stepNumber].durationStep,
          )}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <Accordion
        activeSections={activeSections}
        sections={ferment}
        renderHeader={renderHeader}
        renderContent={FermentCard}
        touchableComponent={TouchableOpacity}
        duration={800}
        onChange={(sections) => {
          setActiveSections(sections.includes(undefined) ? [] : sections);
        }}
      />
      <Button
        onPress={() => navigation.navigate('AddFerment')}
        title={Strings.scrMnAddButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    position: 'relative',
    fontSize: 15,
  },
  headerContainer: {
    width: '100%',
    position: 'relative',
    margin: 1,
    height: 35,
  },
  progressBackground: {
    height: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
  },
});

export default Dashboard;
