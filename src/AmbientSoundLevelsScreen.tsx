import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from './Navigation';
import { Table, Rows } from 'react-native-table-component';
import { ScreenView } from './shared/ScreenView';
import { StylesContext } from './shared/StylesContext';
//import { Card } from 'react-native-elements';
import { Card } from "@rneui/themed";

type AmbientSoundLevelsProps = NativeStackScreenProps<RootStackParamsList, 'AmbientSoundLevels'>;

const AmbientSoundLevelsTable = {
  tableData: [
    ['Business', '54 dba'],
    ['Educational Occupancies', '45 dba'],
    ['Industrial Occupancies', '88 dba'],
    ['Mercantile Occupancies', '50 dba'],
    ['Piers and Water Surrounded Structures', '40 dba'],
    ['Places of Assembly', '60 dba'],
    ['Residential Occupancies', '35 dba'],
    ['Storage Occupancies', '30 dba'],
    ['Thoroughfares, High Density Urban', '70 dba'],
    ['Thoroughfares, Medium Density Urban', '55 dba'],
    ['Thoroughfares, Rural and Suburban', '40 dba'],
    ['Tower Occupancies', '35 dba'],
    ['Underground Structure and Windowless Buildings', '40 dba'],
    ['Vehicles and Vessels', '50 dba'],
  ],
};

export function AmbientSoundLevelsScreen( {navigation}: AmbientSoundLevelsProps) {

  // const AmbientSoundLevelPageProps = ({ route, navigation }: AmbientSoundLevelsProps) => {
   const styles = React.useContext(StylesContext);

  return (
    <ScreenView>
      <Card containerStyle={{ width: "100%" }}>
        <View>
          <Text style={styles.screenTitle}>Ambient Sound Levels</Text>
          <Text style={{ textAlign: 'center', paddingBottom: 5 }}>NFPA 72 requires audible notification appliances (horns, speakers, bells, etc.) to produce a sound
            level 15 dBA above the ambient sound level. The values below are ambient sound levels from the Annex “A”
            in NFPA 72. Historical data can also be used.</Text>
          <Table borderStyle={{ borderWidth: .3 }}>
            <Rows
              data={AmbientSoundLevelsTable.tableData}
              flexArr={[1.75, .75]}
              style={{ height: 55, borderWidth: .1, paddingHorizontal: 10 }}
              textStyle={{ textAlign: 'center', fontSize: 14 }}
            />
          </Table>
        </View>
      </Card>
    </ScreenView>
  );
}

