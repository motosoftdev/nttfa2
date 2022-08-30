import React from 'react';
import { RootStackParams } from '../Navigation';
import { StylesContext } from '../shared/StylesContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenView } from '../shared/ScreenView';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { Button } from 'react-native-elements';
import BCModalSVG from '../SVGs/BCModalSVG';
import { Card } from "@rneui/themed";

type BCEquationModalScreenProps = NativeStackScreenProps<RootStackParams, 'BCEquationModal'>;

const BCModalTable = {
  tableHead: ['Temperature', 'K1 Factor', 'Altitude', 'K2 Factor'],
  tableData: [
    ['To 122F (50C)', '1.00', 'To 3,000 ft (+-1,000m)', '1.00'],
    ['To 131F (55C)', '.80', 'To 5,000 ft (+-1,500m)', '.90'],
    ['To 140F (60C)', '.60', 'To 10,000 ft (+-3,000m)', '.60'],
  ],
};

export const BCEquationModalScreen = ({ route, navigation }: BCEquationModalScreenProps) => {
  const styles = React.useContext(StylesContext);

  return (
    <ScreenView>
      <Card containerStyle={{ width: "100%" }}>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={BCModalTable.tableHead}
            style={tstyles.head}
            textStyle={tstyles.text}
          />
          <Rows
            data={BCModalTable.tableData}
            style={tstyles.row}
            textStyle={tstyles.text}
          />
        </Table>
        <Text style={{paddingTop: 10}}>
          The battery charger is electrically sized only after the electrical load has been defined and the appropriate
          battery has been selected. The charger size is expressed in amperes of dc output capacity. The charger must be
          capable of simultaneously recharging the battery at the highest selected system voltage while serving the connected electrical loads.
        </Text>
        <View style={{ paddingVertical: 10 }}>
          <Text>
            The following equations are used to select a charger to recharge the batteries within the specified recharge time limit:
          </Text>
        </View>
        <BCModalSVG width={300} height={100} />
        <View>
          <Text style={{ paddingVertical: 10 }}>
            Where:
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text>{'\u2022'}</Text>
            <Text style={{ flex: 1, paddingLeft: 5 }}>A = DC output capacity of charger.</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>{'\u2022'}</Text>
            <Text style={{ flex: 1, paddingLeft: 5 }}>AH = battery capacity in ampere-hours.</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>{'\u2022'}</Text>
            <Text style={{ flex: 1, paddingLeft: 5 }}>1.1 = charger efficiency factor for lead-acid cells to return to 100% AH</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>{'\u2022'}</Text>
            <Text style={{ flex: 1, paddingLeft: 5 }}>K1 = Temperature derating factor</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>{'\u2022'}</Text>
            <Text style={{ flex: 1, paddingLeft: 5 }}>K2 = Altitude derating factor</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>{'\u2022'}</Text>
            <Text style={{ flex: 1, paddingLeft: 5 }}>H = number of hours specified for recharging</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
            <Text>{'\u2022'}</Text>
            <Text style={{ flex: 1, paddingLeft: 5 }}>L = Continuous load on charger and battery during recharging</Text>
          </View>
          <View style={styles.flexCenter}>
            <Button title="Close" onPress={() => navigation.navigate(route.params.returnPath)} buttonStyle={styles.orangeBtn} />
          </View>
        </View>
      </Card>
    </ScreenView>
  );
}

const tstyles = StyleSheet.create({
  container: { flex: 1, paddingBottom: 10, paddingTop: 10, backgroundColor: '#fff' },
  head: { height: 50, backgroundColor: '#9c9b9a', textAlign: 'center' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#2ecc71' },
  row: { height: 55 },
  text: { textAlign: 'center', fontSize: 12 },
});
