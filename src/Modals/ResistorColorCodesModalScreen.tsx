import React from 'react';
import { RootStackParams } from '../Navigation';
import { StylesContext } from '../shared/StylesContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenView } from '../shared/ScreenView';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import ResistorColorCodeSVG from '../SVGs/ResistorColorCodeSVG';
import { Card } from "@rneui/themed";



type ResistorColorCodesModalScreenProps = NativeStackScreenProps<RootStackParams, 'ResistorColorCodesModal'>;

export const ResistorColorCodesModalScreen = ({ route, navigation }: ResistorColorCodesModalScreenProps) => {
  const styles = React.useContext(StylesContext);

  return (
    <ScreenView>
      <ScrollView horizontal={true}>
      <Card>
      <View>
      <ResistorColorCodeSVG width={750} height={700} />
      </View>
      <View style={styles.flexAlignCenter}>
      <Button 
      title="Close" 
      onPress={() => navigation.navigate(route.params.returnPath)} 
      buttonStyle = {styles.orangeBtn}
      />
      </View>
      </Card>
      </ScrollView>
    </ScreenView>
  );
};