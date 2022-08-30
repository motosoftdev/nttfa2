import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, Image, Touchable, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements'
import { RootStackParams } from './Navigation';
import { StylesContext } from './shared/StylesContext';
import { ScreenView } from './shared/ScreenView';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/Ionicons';
import { Card } from "@rneui/themed";



type HomeScreenProps = NativeStackScreenProps<RootStackParams, 'Home', undefined>;




export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const styles = React.useContext(StylesContext);



  return (
    <ScreenView>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>

        <Card>
          <TouchableOpacity onPress={() => {
            navigation.navigate('DetectorSpacing');
          }}>
            <View style={[styles.orangeContainer, { width: 300, height: 250 }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', paddingLeft: 80 }}>
                <Icon
                  name='fire'
                  size={50}
                  style={{ padding: 40 }}
                />
                <Icon2
                  name='ruler'
                  size={90}
                />
                <Icon
                  name='fire'
                  size={50}
                  style={{ padding: 40 }}
                />
              </View>
              <Text style={styles.orange_card_title}>Detector Spacing</Text>
            </View>
          </TouchableOpacity> 
        </Card>

        <Card>
          <TouchableOpacity onPress={() => {
            navigation.navigate('ReductionInDetectorSpacing');
          }}>
            <View style={[styles.blueContainer, { width: 300, height: 250 }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Icon
                  name='fire'
                  size={50}
                  style={{ padding: 5, paddingTop: 40 }}
                />
                <Icon2
                  name='ruler'
                  size={90}
                />
                <Icon
                  name='fire'
                  size={50}
                  style={{ paddingTop: 40  }}
                />
              </View>
              <Text style={styles.blue_card_title}>Reduction In</Text>
              <Text style={styles.blue_card_title}>Detector Spacing</Text>
            </View>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity onPress={() => {
            navigation.navigate('VoltageDrop');
          }}>
            <View style={[styles.orangeContainer, { width: 300, height: 250 }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Icon3
                  name='battery'
                  size={50}
                  style={{ padding: 5 }}
                />
                <Icon3
                  name='caret-down'
                  size={40}
                  style={{ padding: 15 }}
                />
              </View>
              <Text style={styles.orange_card_title}>Voltage Drop</Text>
            </View>
          </TouchableOpacity>

        </Card>

        <Card>
          <TouchableOpacity onPress={() => {
            navigation.navigate('PowerSupplies');
          }}>
            <View style={[styles.blueContainer, { width: 300, height: 250 }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Icon2
                  name='power-plug'
                  size={70}
                />
              </View>
              <Text style={styles.blue_card_title}>Power Supplies</Text>
            </View>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity onPress={() => {
            navigation.navigate('BatteryCharger');
          }}>
            <View style={[styles.orangeContainer, { width: 300, height: 250 }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Icon4
                  name='battery-charging-sharp'
                  size={70}
                />
              </View>
              <Text style={styles.orange_card_title}>Battery Charger</Text>
            </View>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity onPress={() => {
            navigation.navigate('AmbientSoundLevels');
          }}>
            <View style={[styles.blueContainer, { width: 300, height: 250 }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Icon4
                  name='ear-outline'
                  size={70}
                />
              </View>
              <Text style={styles.blue_card_title}>Ambient Sound</Text>
              <Text style={styles.blue_card_title}>Levels</Text>
            </View>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity onPress={() => {
            navigation.navigate('TypicalWiringConfigurations');
          }}>
            <View style={[styles.orangeContainer, { width: 300, height: 250 }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Icon
                  name='chart-areaspline'
                  size={70}
                />
              </View>
              <Text style={styles.orange_card_title}>Typical Wiring</Text>
              <Text style={styles.orange_card_title}>Configurations</Text>
            </View>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity onPress={() => {
            navigation.navigate('NICETExamFindingAids');
          }}>
            <View style={[styles.blueContainer, { width: 300, height: 250 }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Icon2
                  name='magnifying-glass'
                  size={70}
                />
              </View>
              <Text style={styles.blue_card_title}>NICET Exam</Text>
              <Text style={styles.blue_card_title}>Finding Aids</Text>
            </View>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity onPress={() => {
            navigation.navigate('ResistorColorCodes');
          }}>
            <View style={[styles.orangeContainer, { width: 300, height: 250 }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Icon
                  name='resistor'
                  size={90}
                />
              </View>
              <Text style={styles.orange_card_title}>Resistor Color</Text>
              <Text style={styles.orange_card_title}>Codes</Text>
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    </ScreenView>
  );
};