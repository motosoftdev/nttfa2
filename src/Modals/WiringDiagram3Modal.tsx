import React from 'react';
import { RootStackParams } from '../Navigation';
import { StylesContext } from '../shared/StylesContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenView } from '../shared/ScreenView';
import { View } from 'react-native';
//import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import TypicalWiringConfiguration3 from '../SVGs/TypicalWiringConfiguration3';
import { Card, Button } from "@rneui/themed";



type WiringDiagram3ModalScreenProps = NativeStackScreenProps<RootStackParams, 'WiringDiagram3Modal'>;

export const WiringDiagram3Modal = ({ route, navigation }: WiringDiagram3ModalScreenProps) => {
  const styles = React.useContext(StylesContext);

  return (
    <ScreenView>
      <ScrollView horizontal={true}>
      <Card>
      <View>
      <TypicalWiringConfiguration3 width={600} height={550} />
      </View>
      <View style={styles.flexAlignCenter}>
      <Button 
      title="Close" 
      onPress={() => navigation.goBack()} 
      buttonStyle = {styles.orangeBtn}
      />
      </View>
      </Card>
      </ScrollView>
    </ScreenView>
  );
};