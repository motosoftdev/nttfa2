import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from './Navigation';
import { StylesContext } from './shared/StylesContext';
import { ScreenView } from './shared/ScreenView';
import { Card } from "@rneui/themed";


type PowerSuppliesProps = NativeStackScreenProps<RootStackParams, 'PowerSupplies'>;

const PowerSuppliesScreen = ({ route, navigation }: PowerSuppliesProps) => {
  const styles = React.useContext(StylesContext);

  const [normalCurrent, setNormalCurrent] = React.useState('');
  const [alarmCurrent, setAlarmCurrent] = React.useState('');
  const [batterySize, setBatterySize] = React.useState(0);
  const [isValid, setIsValid] = useState(false);

  React.useEffect(() => {
    setIsValid((normalCurrent.trim().length !== 0) && (parseFloat(normalCurrent) > -1000) && (alarmCurrent.trim().length !== 0) && (parseFloat(alarmCurrent) > -1000));
  }, [normalCurrent, alarmCurrent]);

  const calculate = () => {
    setBatterySize(1.25 * ((24 * parseFloat(normalCurrent)) + (.08333 * parseFloat(alarmCurrent))))
  };
  return (
    <ScreenView>
      <Card containerStyle={{ width: "100%" }}>
        <View>
          <Text style={styles.screenTitle}>Power Supplies</Text>
          <Text>The secondary power supply is typically a battery (or batteries). Enter the Normal Current and Alarm Current to see the battery size.</Text>
          <View style={[styles.flexCenter, { paddingTop: 10 }]}>
            <Button
              title="View Equation"
              titleStyle={styles.flexCenter}
              buttonStyle={[styles.bgNttOrange, styles.flexCenter, { width: "100%" }]}
              onPress={() => {
                navigation.navigate('PSEquationModal', {
                  returnPath: 'PowerSupplies',
                });
              }} />
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 20 }}>
            <Text style={[styles.label, { textAlign: 'right' }]}>Normal Current: </Text>
            <Input
              inputContainerStyle={{ width: '50%' }}
              keyboardType='numeric'
              placeholder='normal current'
              value={normalCurrent}
              onChangeText={setNormalCurrent} 
              autoCompleteType={undefined}            
              />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.label, { textAlign: 'right' }]}>Alarm Current: </Text>
            <Input
              inputContainerStyle={{ width: '50%' }}
              keyboardType='numeric'
              placeholder='alarm current'
              value={alarmCurrent}
              onChangeText={setAlarmCurrent} 
              autoCompleteType={undefined}            
              />
          </View>
          <View style={styles.flexCenter}>
            <Button
              title="Calculate"
              titleStyle={styles.flexCenter}
              onPress={calculate}
              buttonStyle={[{ width: '100%', backgroundColor: '#19265e' }]}
              disabled={!isValid} />
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 20 }}>
            <Text style={[styles.label, { textAlign: 'right' }]}>Battery Size:</Text>
            <Input
              inputContainerStyle={{ width: '50%' }}
              editable={false} 
              autoCompleteType={undefined}>
              {batterySize.toFixed(2)}
            </Input>
          </View>
        </View>
      </Card>
    </ScreenView>
  );
}

export default PowerSuppliesScreen;