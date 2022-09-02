import React from 'react';
import { RootStackParams } from '../Navigation';
import { StylesContext } from '../shared/StylesContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenView } from '../shared/ScreenView';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Card } from "@rneui/themed";


type HeatDetectorModalScreenProps = NativeStackScreenProps<RootStackParams, 'HeatDetectorModal'>;

export const HeatDetectorModalScreen = ({ route, navigation }: HeatDetectorModalScreenProps) => {
  const styles = React.useContext(StylesContext);

  return (
    <ScreenView>
      <Card>
        <View>
          <Text>
            This figure shows the spacing requirements for heat detectors per NFPA 72.  UL 521 specifies a 50’ spacing while NFPA 72 states not to exceed this distance.
            Therefore the maximum spacing is 50’. The figure above indicates graphically the spacing criteria per NFPA 72. “S” is the listed spacing per UL 521.
            Therefore no heat detector shall be spaced more than 50’ apart, no more than 25’ from walls and no space on the ceiling shall be no more than 35’ from a heat detector.
          </Text>
        </View>
        <View style={styles.flexAlignCenter}>
        <Button 
        title="Close" 
        onPress={() => navigation.goBack()} 
        buttonStyle={styles.orangeBtn} 
        />
        </View>
      </Card>
    </ScreenView>
  );
};