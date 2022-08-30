import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { StylesContext } from "./StylesContext";



export const ScreenView: React.FC<React.PropsWithChildren<{}>> = props => {
  const styles = React.useContext(StylesContext);

  return (
    <SafeAreaView style={[{ minHeight: '100%', flex: 1 }, styles.bgNttLightGray]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
        <View style={[styles.flexAlignCenter, { padding: 20 }, {alignItems: 'center'}]} >
          {props.children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};