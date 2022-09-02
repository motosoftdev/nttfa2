import React from 'react';
import { RootStackParamsList } from '../Navigation';
import { StylesContext } from '../shared/StylesContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenView } from '../shared/ScreenView';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import TypicalWiringConfiguration2 from '../SVGs/TypicalWiringConfiguration2';
import { Card } from "@rneui/themed";



type WiringDiagram2ModalScreenProps = NativeStackScreenProps<RootStackParamsList, 'WiringDiagram2Modal'>;

export const WiringDiagram2Modal = ({ route, navigation }: WiringDiagram2ModalScreenProps) => {
  const styles = React.useContext(StylesContext);

  return (
    <ScreenView>
      <ScrollView horizontal={true}>
      <Card>
      <View>
      <TypicalWiringConfiguration2 width={600} height={550} />
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