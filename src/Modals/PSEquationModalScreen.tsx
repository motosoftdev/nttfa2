import React from 'react';
import { RootStackParams } from '../Navigation';
import { StylesContext } from '../shared/StylesContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenView } from '../shared/ScreenView';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Card } from "@rneui/themed";


type PSEquationModalScreenProps = NativeStackScreenProps<RootStackParams, 'PSEquationModal'>;

export const PSEquationModalScreen = ({ route, navigation }: PSEquationModalScreenProps) => {
  const styles = React.useContext(StylesContext);

  return (
    <ScreenView>
      <Card containerStyle={{ width: "100%" }}>
      <View style={styles.flexCenter}>
        <Text style={[styles.label, { textAlign: 'center', width: '100%' }]}>
          Battery Size (Amp Hours) =
        </Text>
        <Text style={{ paddingBottom: 10, width: '100%', textAlign: 'center' }}>1.25 ((24 * NormalCurrent) + (.08333 * AlarmCurrent))</Text>
        <Button
          title="Close"
          onPress={() => navigation.goBack()}
          buttonStyle={styles.orangeBtn}
        />
        </View>
      </Card>
    </ScreenView>
  );
}