import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from './Navigation';
import { Picker } from '@react-native-picker/picker';
import { ScreenView } from './shared/ScreenView';
import { StylesContext } from './shared/StylesContext';
import { Card } from "@rneui/themed";

type VoltageDropProps = NativeStackScreenProps<RootStackParams, 'VoltageDrop'>;

const VoltageDropScreen = ({ route, navigation }: VoltageDropProps) => {
  const styles = React.useContext(StylesContext);

  const [sizeAWG, setSizeAWG] = React.useState(18);
  const [voltageDrop, setVoltageDrop] = React.useState(24);
  const [length, setLength] = React.useState('');
  const [current, setCurrent] = React.useState('');
  const [EVD, setEVD] = React.useState(0);
  const [percent, setPercent] = React.useState(0);
  const [isValid, setIsValid] = useState(false);

  React.useEffect(() => {
    setIsValid((length.trim().length !== 0) && (parseFloat(length) > -1) && (current.trim().length !== 0) && (parseFloat(current) > -1));
  }, [length, current]);

  const calculate = () => {
    let KFactor = 0;
    switch (sizeAWG) {
      case 18:
        KFactor = 12.59;
        break;
      case 16:
        KFactor = 12.62;
        break;
      case 14:
        KFactor = 12.62;
        break;
      case 12:
        KFactor = 12.60;
        break;
      case 10:
        KFactor = 12.56;
        break;
    }
    let CM = 0;
    switch (sizeAWG) {
      case 18:
        CM = 1620;
        break;
      case 16:
        CM = 2580;
        break;
      case 14:
        CM = 4110;
        break;
      case 12:
        CM = 6530;
        break;
      case 10:
        CM = 10380;
        break;
    }
    let evd = (2 * KFactor * parseFloat(length) * parseFloat(current)) / CM;
    setEVD(evd);
    setPercent((evd / voltageDrop) * 100);
  };

  return (
    <ScreenView>
      <Card containerStyle={{ width: "100%" }}>
        <View >
          <Text style={styles.screenTitle}>Voltage Drop</Text>
          <Text style={{ paddingBottom: 10 }}>
            NFPA 72 does not specify any specific voltage drop percentage. It only requires the adequate voltage be present
            at each device to allow it to operate properly. Each device (primarily notification appliances) have a minimum
            voltage at which they will operate per their specifications. To compute voltage drop and the %, enter the requested data below:</Text>
          <View style={styles.flexCenter}>
            <Button
              title="View Equation"
              titleStyle={styles.flexCenter}
              buttonStyle={[styles.bgNttOrange, { width: '100%', alignItems: 'center', justifyContent: 'center', }]}
              onPress={() => {
                navigation.navigate('VDEquationModal', {
                  returnPath: 'VoltageDrop',
                });
              }} />
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <Text style={[styles.label, { textAlign: 'right' }]}>Size AWG: </Text>
            <Picker
              selectedValue={sizeAWG}
              onValueChange={(itemValue, itemIndex) =>
                setSizeAWG(itemValue)
              }
              style={{ width: '30%' }}>
              <Picker.Item label="18" value={18} />
              <Picker.Item label="16" value={16} />
              <Picker.Item label="14" value={14} />
              <Picker.Item label="12" value={12} />
              <Picker.Item label="10" value={10} />
            </Picker>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.label, { textAlign: 'right' }]}>Voltage Drop (volts): </Text>
            <Picker
              selectedValue={voltageDrop}
              onValueChange={(itemValue, itemIndex) =>
                setVoltageDrop(itemValue)
              }
              style={{ width: '30%' }}>

              <Picker.Item label="24" value={24} />
              <Picker.Item label="12" value={12} />
            </Picker>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.label, { textAlign: 'right' }]}>Length: </Text>
            <Input
              inputContainerStyle={{ width: '50%' }}
              keyboardType='numeric'
              placeholder='length'
              value={length}
              onChangeText={setLength} 
              autoCompleteType={undefined}            
              />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.label, { textAlign: 'right' }]}>Current: </Text>
            <Input
              inputContainerStyle={{ width: '50%' }}
              keyboardType='numeric'
              placeholder='current'
              value={current}
              onChangeText={setCurrent} 
              autoCompleteType={undefined}            
              />
          </View>
          <View style={styles.flexAlignCenter}>
            <Button
              title="Calculate"
              titleStyle={styles.flexCenter}
              buttonStyle={[{ width: '100%' }, { backgroundColor: '#19265e' }, { justifyContent: 'center' }]}
              onPress={calculate}
              disabled={!isValid}
            />
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 20 }}>
            <Text style={[styles.label, { textAlign: 'right' }]}>Voltage Drop:</Text>
            <Input
              inputContainerStyle={{ width: '50%' }}
              style={{ width: '50%' }}
              editable={false} autoCompleteType={undefined}>
              {(EVD.toFixed(2))}
            </Input>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.label, { textAlign: 'right' }]}>Percentage:</Text>
            <Input
              inputContainerStyle={{ width: '50%' }}
              style={{ width: '50%' }}
              editable={false} autoCompleteType={undefined}>
              {percent.toFixed(2)}
            </Input>
          </View>
        </View>
      </Card>
    </ScreenView>
  );
}

export default VoltageDropScreen;