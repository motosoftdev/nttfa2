import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from './Navigation';
import { StylesContext } from './shared/StylesContext';
import { ScreenView } from './shared/ScreenView';
import { Input, Button } from 'react-native-elements';
import { Card } from "@rneui/themed";

type BatteryChargerProps = NativeStackScreenProps<RootStackParams, 'BatteryCharger'>;

export function BatteryChargerScreen({ route, navigation }: BatteryChargerProps) {
  const styles = React.useContext(StylesContext);

  const [AH, setAH] = React.useState('');
  const [temperature, setTemperature] = React.useState('');
  const [altitude, setAltitude] = React.useState('');
  const [load, setLoad] = React.useState('');
  const [hours, setHours] = React.useState('');
  const [DCOutputCapacity, setDCOutputCapacity] = React.useState(0);
  const [isValid, setIsValid] = useState(false);

  React.useEffect(() => {
    setIsValid((AH.trim().length !== 0) && (parseFloat(AH) > -1) && (temperature.trim().length !== 0) && (parseFloat(temperature) > -1000)
      && (altitude.trim().length !== 0) && (parseFloat(altitude) > -1000) && (load.trim().length !== 0) && (parseFloat(load) > -1) && (hours.trim().length !== 0) && (parseFloat(hours) > -1));
  }, [AH, temperature, altitude, load, hours]);

  const calculate = () => {
    let K1Factor = 0;
    switch (true) {
      case (parseFloat(temperature) <= 122):
        K1Factor = 1.00;
        break;
      case (parseFloat(temperature) > 122 && parseFloat(temperature) <= 131):
        K1Factor = .80;
        break;
      case (parseFloat(temperature) > 131 && parseFloat(temperature) <= 140):
        K1Factor = .60;
        break;
    }
    let K2Factor = 0;
    switch (true) {
      case (parseFloat(altitude) <= 3000):
        K2Factor = 1.00;
        break;
      case (parseFloat(altitude) > 3000 && parseFloat(altitude) <= 5000):
        K2Factor = .90;
        break;
      case (parseFloat(altitude) > 5000 && parseFloat(altitude) <= 10000):
        K2Factor = .60;
        break;
    }
    setDCOutputCapacity((((parseFloat(AH) * 1.1) / parseFloat(hours)) + parseFloat(load)) * (1 / K1Factor) * (1 / K2Factor));
  };

  return (
    <ScreenView>
      <Card containerStyle={{ width: "100%" }}>
        <View>
          <Text style={styles.screenTitle}>Battery Charger</Text>
          <Text style={{ paddingBottom: 10, textAlign: 'center' }}>To calculate Battery chargers DC output capacity, fill in the information below.</Text>
          <View style={styles.flexCenter}>
            <Button
              title="View Equation"
              titleStyle={styles.flexCenter}
              buttonStyle={[styles.bgNttOrange, { width: '100%' }]}
              onPress={() => {
                navigation.navigate('BCEquationModal', {
                  returnPath: 'BatteryCharger',
                });
              }} />
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <Text style={[styles.label, { textAlign: 'right' }]}>Amp Hours(AH):</Text>
            <Input
              inputContainerStyle={{ width: '50%' }}
              keyboardType='numeric'
              placeholder='amp hours'
              value={AH}
              onChangeText={setAH} 
              autoCompleteType={undefined}            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.label, { textAlign: 'right' }]}>Temperature:</Text>
            <Input
              inputContainerStyle={{ width: '50%' }}
              keyboardType='numeric'
              placeholder='temperature'
              value={temperature}
              onChangeText={setTemperature} autoCompleteType={undefined}            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.label, { textAlign: 'right' }]}>Altitude:</Text>
            <Input
              inputContainerStyle={{ width: '50%' }}
              keyboardType='numeric'
              placeholder='altitude'
              value={altitude}
              onChangeText={setAltitude} autoCompleteType={undefined}            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.label, { textAlign: 'right' }]}>L (load):</Text>
            <Input
              inputContainerStyle={{ width: '50%' }}
              keyboardType='numeric'
              placeholder='load'
              value={load}
              onChangeText={setLoad} autoCompleteType={undefined}            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.label, { textAlign: 'right' }]}>H (hours):</Text>
            <Input
              inputContainerStyle={{ width: '50%' }}
              keyboardType='numeric'
              placeholder='hours'
              value={hours}
              onChangeText={setHours}
              errorMessage="48 hours is the max per NFPA"
              errorStyle={{ fontSize: 10.5, color: 'black' }} autoCompleteType={undefined}            />
          </View>
          <View style={[styles.flexCenter, { paddingTop: 10 }]}>
            <Button
              title="Calculate"
              titleStyle={styles.flexCenter}
              onPress={calculate}
              buttonStyle={[{ width: '100%' }, { backgroundColor: '#19265e' }]}
              disabled={!isValid} />
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <Text style={[styles.label, { textAlign: 'right' }]}>DC Output Capacity:</Text>
            <Input
              inputContainerStyle={{ width: '50%' }}
              editable={false} autoCompleteType={undefined}>
              {DCOutputCapacity.toFixed(2)}
            </Input>
          </View>
        </View>
      </Card>
    </ScreenView>
  );
}

