import React from 'react';
import { RootStackParams } from '../Navigation';
import { StylesContext } from '../shared/StylesContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenView } from '../shared/ScreenView';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Card } from "@rneui/themed";


type SmokeDetectorModalScreenProps = NativeStackScreenProps<RootStackParams, 'SmokeDetectorModal'>;

export const SmokeDetectorModalScreen = ({ route, navigation }: SmokeDetectorModalScreenProps) => {
  const styles = React.useContext(StylesContext);

  return (
    <ScreenView>
      <Card>
      <View>
        <Text style={{paddingBottom: 10}}>
        The same rules apply to smoke detectors. Smoke detectors do not have a UL listed spacing. NFPA 72 states that a spacing of 30’ is permissible. 
        This is referred to as a “Selected Spacing”. Therefore no smoke detector shall be spaced more than 30’ apart, no more than 15’ from walls and 
        no space on the ceiling shall be no more than 21’ from a smoke detector.
        </Text>
      </View>
      <View style={styles.flexAlignCenter}>
      <Button 
      title="Close" 
      onPress={() => navigation.goBack()} 
      buttonStyle = {styles.orangeBtn}
      />
      </View>
      </Card>
    </ScreenView>
  );
};