import React from 'react';
import { RootStackParams } from '../Navigation';
import { StylesContext } from '../shared/StylesContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenView } from '../shared/ScreenView';
import { View, Image, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { Button, Text } from 'react-native-elements';
import VDModal1SVG from '../SVGs/VDModal1SVG';
import VDModal2SVG from '../SVGs/VDModal2SVG';
import { Card } from "@rneui/themed";


type VDEquationModalScreenProps = NativeStackScreenProps<RootStackParams, 'VDEquationModal'>;

const VDModalTable = {
  tableHead: ['Size AWG KcMill', 'Area Cir Mill', 'Resistance OHM/KFT', 'K factor**'],
  tableData: [
    ['18', '1,620', '7.77', '12.59'],
    ['16', '2,580', '4.89', '12.62'],
    ['14', '4,110', '3.07', '12.62'],
    ['12', '6,530', '1.93', '12.60'],
    ['10', '10,380', '1.21', '12.56'],
  ],
};

export const VDEquationModalScreen = ({ route, navigation }: VDEquationModalScreenProps) => {
  const styles = React.useContext(StylesContext);

  return (
    <ScreenView>
      <Card containerStyle={{width: '100%'}}>
      <View>
        <Text style={styles.tableTitle}>
        Extracted from table 8, NFPA 70, National Electric Code
        </Text>
        <Table borderStyle={{ borderWidth: 1 } }>
        <Row
                  data={VDModalTable.tableHead}
                  style={tstyles.head}
                  textStyle={tstyles.text}
                />
                <Rows
                  data={VDModalTable.tableData}
                  style={tstyles.row}
                  textStyle={tstyles.text}
                />
            </Table>
      </View>
      <Text>
      ** Many Calculations assume =12.60 for solid copper conductors
      </Text>
      <View style={styles.flexCenter}>
      <VDModal1SVG width={200} height={200} style={{padding: 0}}/>
      <VDModal2SVG width={200} height={200} style={{padding: 0}} />
      </View>
      <View style={styles.flexCenter}>
      <Button title="Close" onPress={() => navigation.goBack()} buttonStyle={styles.orangeBtn}/>
      </View>
      </Card>
    </ScreenView>
  );
}

const tstyles = StyleSheet.create({
  container: { flex: 1, padding: 5, paddingTop: 10, backgroundColor: '#fff' },
  head: { height: 50, backgroundColor: '#9c9b9a', textAlign: 'center' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#2ecc71' },
  row: { height: 28 },
  text: { textAlign: 'center' },
});

