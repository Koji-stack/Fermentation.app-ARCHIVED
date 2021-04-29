// Main Screen

import React from 'react';
import {Button, View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Strings from 'res/strings';
import ferment from 'res/tempdata.js';
import FermentCard from 'ui/FermentCard.js';

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={ferment}
        renderItem={FermentCard}
        keyExtractor={(item) => item.id}
      />
      <Button
        onPress={() => navigation.navigate('AddFerment')}
        title={Strings.scrMnAddButton}
      />
    </View>
  );
};

export default Dashboard;
