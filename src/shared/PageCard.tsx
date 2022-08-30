import React from 'react';

import { TouchableOpacity, Text, View } from 'react-native';

interface PageCardProps {
  name: string;
  onPress: (name: string) => void;
  image?: { source: string };
}

export const PageCard: React.FC<PageCardProps> = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View >
        
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};
