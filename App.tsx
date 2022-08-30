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