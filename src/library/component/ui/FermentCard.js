import React from 'react';
import {View, Text} from 'react-native';

const FermentCard = (data) => {
  return (
    <View>
      <Text>{data.item.fermentName}</Text>
    </View>
  );
};

export default FermentCard;
