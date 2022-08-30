import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from './Navigation';
import ResistorColorCodeSVG from './SVGs/ResistorColorCodeSVG';
import { StylesContext } from './shared/StylesContext';
import { ScreenView } from './shared/ScreenView';
import { Button, Icon } from 'react-native-elements';
import { Card } from "@rneui/themed";

type ResistorColorCodesProps = NativeStackScreenProps<RootStackParams, 'ResistorColorCodes'>;

const ResistorColorCodesScreen = ({ route, navigation }: ResistorColorCodesProps) => {
  const styles = React.useContext(StylesContext);

  return (
    <ScreenView>
      <Card containerStyle={{ width: '100%' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.screenTitle}>Resistor Color Codes</Text>
          <ResistorColorCodeSVG width={400} height={350} />
          <Button
            buttonStyle={{ backgroundColor: 'white' }}
            icon={
              <Icon
                name="zoom-in"
                size={30}
                color="black" 
                tvParallaxProperties={undefined}              
                />
            }
            onPress={() => {
              navigation.navigate('ResistorColorCodesModal', {
                returnPath: 'ResistorColorCodes',
              });
            }} />
        </View>
      </Card>
    </ScreenView>
  );
}

export default ResistorColorCodesScreen;