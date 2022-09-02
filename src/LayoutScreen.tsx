import React from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import { Header, Button, Icon } from 'react-native-elements';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './HomeScreen';
import DetectorSpacingScreen from './DetectorSpacingScreen';
import ReductionInDetectorSpacingScreen from './ReductionInDetectorSpacingScreen';
import VoltageDropScreen from './VoltageDropScreen';
import PowerSuppliesScreen from './PowerSuppliesScreen';
import {BatteryChargerScreen} from './BatteryChargerScreen';
import {AmbientSoundLevelsScreen} from './AmbientSoundLevelsScreen';
import TypicalWiringConfigurationsScreen from './TypicalWiringConfigurationsScreen';
import NICETExamFindingAidsScreen from './NICETExamFindingAidsScreen';
import ResistorColorCodesScreen from './ResistorColorCodesScreen';
import ModalScreen from './ReductionInDetectorSpacingScreen';
import { HeatDetectorModalScreen } from './Modals/HeatDetectorModalScreen';
import { SmokeDetectorModalScreen } from './Modals/SmokeDetectorModalScreen';
import { VDEquationModalScreen } from './Modals/VDEquationModalScreen';
import { StylesContext } from './shared/StylesContext';
import { PSEquationModalScreen } from './Modals/PSEquationModalScreen';
import { BCEquationModalScreen } from './Modals/BCEquationModalScreen';
import { ResistorColorCodesModalScreen } from './Modals/ResistorColorCodesModalScreen';
import { WiringDiagram1Modal } from './Modals/WiringDiagram1Modal';
import { WiringDiagram2Modal } from './Modals/WiringDiagram2Modal';
import { WiringDiagram3Modal } from './Modals/WiringDiagram3Modal';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamsList } from './Navigation';

const RootStack = createStackNavigator<RootStackParamsList>();


const navigationRef = React.createRef<any>();

interface LayoutScreenProps { };

export const LayoutScreen: React.FC<LayoutScreenProps> = screenProps => {
  const styles = React.useContext(StylesContext);

  const goHome = () => navigationRef.current.dispatch(CommonActions.navigate('Home'));

  return (
    <NavigationContainer ref={navigationRef}>
      <Header
        leftComponent={
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../assets/NTTLogo.png')}
              style={{width: 70, height: 35}}
            />
          </View>
        }
        rightComponent={
          <View style={{ flexDirection: 'row' }}>
            <Button
              icon={<Icon name='home' color='#fff' containerStyle={[styles.bgNttOrange]} tvParallaxProperties={undefined} />}
              buttonStyle={styles.bgNttOrange}
              onPress={goHome}
            />
          </View>
          }
        centerComponent={{ text: "NTT Fire Alarm - NICET", style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
        containerStyle={styles.bgNttOrange}
      />
      <RootStack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
       <RootStack.Group>
          <RootStack.Screen name="Home" component={HomeScreen} options={{ title: 'NTT Fire Alarm NICET' }} />
          <RootStack.Screen name="DetectorSpacing" component={DetectorSpacingScreen} options={{ title: 'Detector Spacing' }} />
          <RootStack.Screen name="ReductionInDetectorSpacing" component={ReductionInDetectorSpacingScreen} options={{ title: 'Reduction In Detector Spacing' }} />
          <RootStack.Screen name="VoltageDrop" component={VoltageDropScreen} options={{ title: 'Voltage Drop' }} />
          <RootStack.Screen name="PowerSupplies" component={PowerSuppliesScreen} options={{ title: 'Power Supplies' }} />
          <RootStack.Screen name="BatteryCharger" component={BatteryChargerScreen} options={{ title: 'Battery Charger' }} />
          <RootStack.Screen name="AmbientSoundLevels" component={AmbientSoundLevelsScreen} options={{ title: 'Ambient Sound Levels' }} />
          <RootStack.Screen name="TypicalWiringConfigurations" component={TypicalWiringConfigurationsScreen} options={{ title: 'Typical Wiring Configurations' }} />
          <RootStack.Screen name="NICETExamFindingAids" component={NICETExamFindingAidsScreen} options={{ title: 'NICET Exam Finding Aids' }} />
          <RootStack.Screen name="ResistorColorCodes" component={ResistorColorCodesScreen} options={{ title: 'Resistor Color Codes' }} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name='HeatDetectorModal' component={HeatDetectorModalScreen} options={{ title: 'Heat Detector Modal' }} />
          <RootStack.Screen name='SmokeDetectorModal' component={SmokeDetectorModalScreen} options={{ title: 'Smoke Detector Modal' }} />
          <RootStack.Screen name='VDEquationModal' component={VDEquationModalScreen} options={{ title: 'Voltage Drop Equation' }} />
          <RootStack.Screen name='PSEquationModal' component={PSEquationModalScreen} options={{ title: 'Power Supplies Equation' }} />
          <RootStack.Screen name='BCEquationModal' component={BCEquationModalScreen} options={{ title: 'Battery Charger Equation' }} />
          <RootStack.Screen name='ResistorColorCodesModal' component={ResistorColorCodesModalScreen} options={{ title: 'Resistor Color Codes' }} />
          <RootStack.Screen name='WiringDiagram1Modal' component={WiringDiagram1Modal} />
          <RootStack.Screen name='WiringDiagram2Modal' component={WiringDiagram2Modal} />
          <RootStack.Screen name='WiringDiagram3Modal' component={WiringDiagram3Modal} />
          </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
