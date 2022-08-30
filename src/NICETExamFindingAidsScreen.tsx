import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from './Navigation';
import { Table, Row, Rows } from 'react-native-table-component';
import { ScreenView } from './shared/ScreenView';
import { StylesContext } from './shared/StylesContext';
import { Card } from "@rneui/themed";


type NICETExamFindingAidsProps = NativeStackScreenProps<RootStackParams, 'NICETExamFindingAids'>;

const NICETExamFindingAidsScreen = ({ route, navigation }: NICETExamFindingAidsProps) => {
  const styles = React.useContext(StylesContext);

  const NICETExamFindingAidsTable = {
    tableHead: ['  Chapter', '  Title', '  Content'],

    tableData: [
      ['Chapter 3 ', 'Definitions', ''],
      ['', '', ''],
      ['Chapter 7 ', 'Documentation', ' - Personnel Qualifications'],
      ['', '', ' - Primarily Power Supply'],
      ['', '', ' - Battery Charging'],
      ['', '', ' - Monitoring Integrity'],
      ['', '', ' - Impairments'],
      ['', '', ''],
      ['Chapter 12 ', 'Circuits and Pathways', ' - Circuits Classifications'],
      ['', '', ' - Circuit Survivability'],
      ['', '', ''],
      ['Chapter 14 ', 'Testing', ''],
      ['', '', ''],
      ['Chapter 17 ', 'Initiating Appliances', ' - Heat Detectors'],
      ['', '', ' - Smoke Detectors'],
      ['', '', ' - Duct Detectors'],
      ['', '', ''],
      ['Chapter 18 ', 'Notification Appliances', ' - Audible Appliances'],
      ['', '', '     - Fire'],
      ['', '', '     - Carbon Monoxide'],
      ['', '', ' - Visual Appliances'],
      ['', '', '     - Wall Mounted'],
      ['', '', '     - Ceiling Mounted'],
      ['', '', '     - Spacing Criteria'],
      ['', '', ''],
      ['Chapter 21 ', 'Emergency Control Functions', ' - Elevator Recall'],
      ['', '', ''],
      ['Annex A ', 'Explanatory Information', ''],
    ],
  };

  return (
    <ScreenView>
      <Card containerStyle={{ width: '100%' }}>
        <View style={{ width: '100%' }}>
          <Text style={styles.screenTitle}>NICET Exam Finding Aids</Text>
          <Text style={styles.tableTitle}>NFPA 72 Chapter Topic Guide</Text>
          <Table borderStyle={{ borderWidth: 0, borderColor: '#abb0b8' }}>
            <Row
              data={NICETExamFindingAidsTable.tableHead}
              flexArr={[1, 1.5, 2]}
              style={styles.head}
              textStyle={{ textAlign: 'left' }}
            />
            <Rows
              data={NICETExamFindingAidsTable.tableData}
              flexArr={[1, 1.5, 2]}
              style={{ height: 30 }}
              textStyle={{ textAlign: 'left', fontSize: 12, paddingLeft: 10 }}
            />
          </Table>
        </View>
      </Card>
    </ScreenView>
  );
}

export default NICETExamFindingAidsScreen;