import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { PageCard } from './shared/PageCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from './Navigation';
import SVGDetectorSpacing from './SVGs/DetectorSpacingSVG';
import { StylesContext } from './shared/StylesContext';
import { ScreenView } from './shared/ScreenView';
import { Text } from 'react-native-elements';
import HDModalSVG from './SVGs/HDModalSVG';
import { Card } from "@rneui/themed";

type DetectorSpacingScreenProps = NativeStackScreenProps<RootStackParamsList, 'DetectorSpacing'>;

function DetectorSpacingScreen( {navigation} : DetectorSpacingScreenProps) {
  const styles = React.useContext(StylesContext);
  return (
    <ScreenView>
      <Card containerStyle={{ width: "100%" }}>
        <View style={styles.flexAlignCenter}>
          <Text style={styles.screenTitle}>Detector Spacing</Text>
          <SVGDetectorSpacing width={350} height={300} />
          <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 15 }}>
            <Text style={{ fontSize: 11, textAlign: 'center' }}>Use the legend below for more information on Heat and Smoke Detectors</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 15 }}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('HeatDetectorModal', { returnPath: 'DetectorSpacing' });
            }}>
              <HDModalSVG width={25} height={25} />
            </TouchableOpacity>
            <PageCard
              name=" = Heat Detector"
              onPress={() => {
                navigation.navigate('HeatDetectorModal', {
                  returnPath: 'DetectorSpacing',
                });
              }}
            />
          </View>
          <PageCard
            name="S = Listed spacing of 50' for Heat detectors, Selected spacing of 30' for smoke detectors (per NFPA 72)"
            onPress={() => {
              navigation.navigate('SmokeDetectorModal', {
                returnPath: 'DetectorSpacing',
              });
            }}
          />
        </View>
      </Card>
    </ScreenView>
  );
}
export default DetectorSpacingScreen;
