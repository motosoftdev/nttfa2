// import * as React from 'react';
// import { Button, View, Text, TextInput } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParams } from './src/Navigation';
// import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import type { RouteProp } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { HomeScreen } from './src/HomeScreen';
// import { AmbientSoundLevelsScreen } from './src/AmbientSoundLevelsScreen';

// const RootStack = createStackNavigator<RootStackParamList>();

// type RootStackParamList = {
//   Home: undefined;
//   AmbientSoundLevels: undefined;
//   Profile: { userId: string };
//   Feed: { sort: 'latest' | 'top' } | undefined;
// };

// type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

// <RootStack.Navigator initialRouteName="Home">
//   <RootStack.Screen name="Home" component={HomeScreen} />
//   <RootStack.Screen name ="AmbientSoundLevels" component={AmbientSoundLevelsScreen}
//     initialParams={{ userId: user.id }}
//   />
//   <RootStack.Screen name="Feed" component={Feed} />
// </RootStack.Navigator>

// ------

// type ProfileScreenRouteProp = RouteProp<RootStackParams, 'Home'>;

// type AppScreenProps = NativeStackScreenProps<RootStackParams, 'Home'>;
// //type ProfileScreenNavigationProp = Props['navigation'];
// type ProfileScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParams,
//   'Home'
// >;

// function HomeScreen({ navigation}: AppScreenProps ) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>This is the home screen of the app</Text>
//       <Button
//         onPress={() => navigate('Profile', { title: "Brent's profile" })}
//         title="Go to Profile"
//       />
//     </View>
//   );
// }

// function ProfileScreen({ navigation, route }: Props) {
//   const [value, onChangeText] = React.useState(route.params.title);

//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       title: value === '' ? 'No title' : value,
//     });
//   }, [navigation, value]);

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//         onChangeText={(text) => onChangeText(text)}
//         value={value}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home">
//         {(props) => <HomeScreen {...props} />}
// </Stack.Screen>
//         <Stack.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={({ route }) => ({ title: route.params.title })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


//_____________


// import 'react-native-gesture-handler';
// import React from 'react';
// import { Dimensions, View, Text } from 'react-native';
// import { getStyles, StylesContext } from './src/shared/StylesContext';
// import { LayoutScreen } from './src/LayoutScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParams } from './src/Navigation';

// type AppScreenProps = NativeStackScreenProps<RootStackParams, 'Home'>;

// function TestScreen({navigation}: AppScreenProps ) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Kellie</Text>
//       </View>
//   );
// }

// const Stack = createNativeStackNavigator();
 
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={TestScreen} options={{ title: 'NTT Fire Alarm NICET' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   ); 
// }

// export default App;


// ---------

// export default function App() {
//   return (
//     <AppView />
//   );
// }

// const AppView: React.FC = () => {
//   const [styles, setStyles] = React.useState(getStyles(Dimensions.get('window').width));
//   React.useEffect(() => {
//     Dimensions.addEventListener('change', ({ window }) => {
//       setStyles(getStyles(window.width));
//     });   
//   }, [setStyles]);

//   return (
//     <StylesContext.Provider value={styles}>
//       <LayoutScreen />
//     </StylesContext.Provider>  
//   );
// }

import 'react-native-gesture-handler';
import React from 'react';
import { Dimensions } from 'react-native';
import { getStyles, StylesContext } from './src/shared/StylesContext';
import { LayoutScreen } from './src/LayoutScreen';

export default function App() {
  return (
    <AppView />
  );
}

const AppView: React.FC = () => {
  const [styles, setStyles] = React.useState(getStyles(Dimensions.get('window').width));
  React.useEffect(() => {
    Dimensions.addEventListener('change', ({ window }) => {
      setStyles(getStyles(window.width));
    });   
  }, [setStyles]);

  return (
    <StylesContext.Provider value={styles}>
      <LayoutScreen />
    </StylesContext.Provider>  
  );
}