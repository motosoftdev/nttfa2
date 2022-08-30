import React from 'react';
import { Button, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from './Navigation';
import { Table, Row, Rows } from 'react-native-table-component';
import { ScreenView } from './shared/ScreenView';
import { StylesContext } from './shared/StylesContext';
import { Text } from 'react-native-elements'
import { Card } from "@rneui/themed";

type ReductionInDetectorSpacingProps = NativeStackScreenProps<RootStackParams, 'ReductionInDetectorSpacing'>;

const HeatDetectorTable = {
  tableHead: ['Ceiling Height Above (feet)', 'Up to and Including', 'Percentage of Listed Spacing'],
  tableData: [
    ['10', '10', '100'],
    ['10', '12', '91'],
    ['12', '14', '84'],
    ['14', '16', '77'],
    ['16', '18', '71'],
    ['18', '20', '64'],
    ['20', '22', '58'],
    ['22', '24', '52'],
    ['24', '26', '46'],
    ['26', '28', '40'],
    ['28', '30', '34'],
  ],
};

const SmokeDetectorTable = {
  tableHead: ['Minutes/Air Change', 'Air Changes/Hr', 'Sq. Ft/Detector', 'Sq. M/Detector'],
  tableData: [
    ['1', '60.0', '125', '11.62'],
    ['2', '30.0', '250', '23.25'],
    ['3', '20.0', '375', '34.88'],
    ['4', '15.0', '500', '46.50'],
    ['5', '12.0', '625', '58.12'],
    ['6', '10.0', '750', '69.75'],
    ['7', '8.6', '875', '81.38'],
    ['8', '7.5', '900', '83.70'],
    ['9', '6.7', '900', '83.70'],
    ['10', '6.0', '900', '83.70'],
  ],
};

const ReductionInDetectorSpacingScreen = ({ route, navigation }: ReductionInDetectorSpacingProps) => {
  const styles = React.useContext(StylesContext);
  const [currentTab, setCurrentTab] = React.useState("tab1");
  const btnColor = "#19265e";
  const btnActiveColor = "#f15623";
 
  return (
    <ScreenView>
      <Card containerStyle={{ width: "100%" }}>
        <Text style={styles.screenTitle}>Reduction In Detector Spacing</Text>
        <Text style={[styles.flexAlignCenter, {paddingBottom: 10}]}>Select each option to view the different tables</Text>
        <View style={[styles.flexAlignCenter, {paddingVertical: 10}]}> 
        <Button
          title="Heat Detector Table"
          onPress={() => setCurrentTab('tab1')}
          color={currentTab == "tab1" ? btnActiveColor : btnColor}
        />
        </View>
        <View style={[styles.flexAlignCenter, {paddingBottom: 10}]}> 
        <Button
          title="Smoke Detector Table"
          onPress={() => setCurrentTab('tab2')}
          color={currentTab == "tab2" ? btnActiveColor : btnColor} 
          />
          </View>
        {currentTab === 'tab1' && (
          <>
            <View style={{ flex: 1, padding: 5, paddingTop: 10, backgroundColor: '#fff' }}>
              <Text style={styles.tableTitle}>Heat Detector Spacing Table 17.6.3.5.1</Text>
              <Table borderStyle={{ borderWidth: 1 }}>
                <Row
                  data={HeatDetectorTable.tableHead}
                  style={{ height: 53, backgroundColor: '#9c9b9a' }}
                  textStyle={{ textAlign: 'center' }}
                />
                <Rows
                  data={HeatDetectorTable.tableData}
                  style={{ height: 28 }}
                  textStyle={{ textAlign: 'center' }}
                />
              </Table>
            </View>
            <Text>Heat detector spacing is effected by ceiling height. The 50’ UL listed spacing is good on smooth ceilings (as defined by NFPA 72)
              up to and including 10’. When ceiling heights exceed 10’ the table above is used to reduce the spacing. For example, got a 15’ ceiling
              height the spacing would be 50’X.77 which would be 38’-6”. Likewise the spacing from walls would be 38’-6”X.5 which would be 19’-9” and
              no space on the ceiling should be no more than 38.5’X.7 which would be 26’-8”.</Text>
          </>
        )}
        {currentTab === 'tab2' && (
          <>
            <View style={{ flex: 1, padding: 5, paddingTop: 10, backgroundColor: '#fff' }}>
              <Text style={styles.tableTitle}>Smoke Detector Table</Text>
              <Table borderStyle={{ borderWidth: 1 }}>
                <Row
                  data={SmokeDetectorTable.tableHead}
                  style={{ height: 53, backgroundColor: '#9c9b9a' }}
                  textStyle={{ textAlign: 'center' }}
                />
                <Rows
                  data={SmokeDetectorTable.tableData}
                  style={{ height: 28 }}
                  textStyle={{ textAlign: 'center' }}
                />
              </Table>
            </View>
            <Text>Smoke detector spacing is not effected by ceiling heigh but by air velocity. The air will blow smoke away from
              the detector thus causing its ability to detect smoke recused. Therefore smoke detectors have to be spaced closer
              together when air velocity is higher that “normal” air velocity which is around 8-10 minutes per air change. The table above
              is to be used to reduce the coverage area of smoke detectors.</Text>
          </>
        )}
      </Card>
    </ScreenView>
  );
}

export default ReductionInDetectorSpacingScreen;


