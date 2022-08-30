import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from './Navigation';
import { StylesContext } from './shared/StylesContext';
import { ScreenView } from './shared/ScreenView';
import TypicalWiringConfig1SVG from './SVGs/TypicalWiringConfiguration1';
import TypicalWiringConfig2SVG from './SVGs/TypicalWiringConfiguration2';
import TypicalWiringConfig3SVG from './SVGs/TypicalWiringConfiguration3';
import Icon from 'react-native-vector-icons/Feather';
import { Card } from "@rneui/themed";

type TypicalWiringConfigurationsProps = NativeStackScreenProps<RootStackParams, 'TypicalWiringConfigurations'>;

export default function TypicalWiringConfigurationsScreen({ route, navigation }: TypicalWiringConfigurationsProps) {
  const styles = React.useContext(StylesContext);
  const [currentTab, setCurrentTab] = React.useState("tab1");
  const btnColor = "#19265e";
  const btnActiveColor = "#e67e25";
  return (
    <ScreenView>
      <Card containerStyle={{ width: "100%" }}>
        <Text style={[styles.screenTitle, { paddingBottom: 10 }]}>Typical Wiring Configurations</Text>
        <Text style={{textAlign: 'center', paddingBottom: 10}}>Select each option to view the different Wiring Configurations</Text>
        <View style={[styles.flexAlignCenter, {paddingBottom: 10}]}>
          <Button title="Typical Addressable Wiring Diagram" onPress={() => setCurrentTab('tab1')} color={currentTab == "tab1" ? btnActiveColor : btnColor} />
          </View>
          <View style={[styles.flexAlignCenter, {paddingBottom: 10}]}>
          <Button title="Typical Conventional Wiring Diagram" onPress={() => setCurrentTab('tab2')} color={currentTab == "tab2" ? btnActiveColor : btnColor} />
          </View>
          <View style={[styles.flexAlignCenter, {paddingBottom: 10}]}>
          <Button title="Typical Addressable/Conventional Wiring Diagram" onPress={() => setCurrentTab('tab3')} color={currentTab == "tab3" ? btnActiveColor : btnColor} />
        </View>
        {currentTab === 'tab1' && (
          <>
            <View style={{ width: "100%", paddingLeft: 35, justifyContent: 'center', alignItems: 'center' }}>
              <TypicalWiringConfig1SVG width={395} height={200} />
              <TouchableOpacity onPress={() => {
                navigation.navigate('WiringDiagram1Modal', {
                  returnPath: 'TypicalWiringConfigurations',
                });
              }}>
                <Icon
                  name='zoom-in'
                  size={25}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
        {currentTab === 'tab2' && (
          <>
            <View style={{ width: "100%", paddingLeft: 35, justifyContent: 'center', alignItems: 'center' }}>
              <TypicalWiringConfig2SVG width={395} height={200} />
              <TouchableOpacity onPress={() => {
                navigation.navigate('WiringDiagram2Modal', {
                  returnPath: 'TypicalWiringConfigurations',
                });
              }}>
                <Icon
                  name='zoom-in'
                  size={25}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
        {currentTab === 'tab3' && (
          <>
            <View style={{ width: "100%", paddingLeft: 35, justifyContent: 'center', alignItems: 'center' }}>
              <TypicalWiringConfig3SVG width={395} height={200} />
              <TouchableOpacity onPress={() => {
                navigation.navigate('WiringDiagram3Modal', {
                  returnPath: 'TypicalWiringConfigurations',
                });
              }}>
                <Icon
                  name='zoom-in'
                  size={25}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </Card>
    </ScreenView>
  );
}

