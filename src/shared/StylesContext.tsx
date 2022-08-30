import React from 'react';
import { StyleSheet } from 'react-native';

const defaultStyles = {
  orangeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fac47d",
    padding: 20
  },
  blueContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b5e0f5",
    padding: 20,

  },
  card_template: {
    width: 200,
    height: 200
  },
  card_image: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  text_container: {
    position: "absolute",
    width: 250,
    height: 30,
    bottom: 0,
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  orange_card_title: {
    color: "#f15623",
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  blue_card_title: {
    color: "#2b59e3",
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  orangeBtn: {
    backgroundColor: '#f15623',
    width: 75,
    alignItems: 'center',
    textAlign: 'center',
  },
  activeButton: {
    backgroundColor: '#4090d6',
    color: "#4090d6"
  },
  inactiveButton: {
    backgroundColor: "#c4c3bc",
    borderColor: '#4090d6',
    borderWidth: 2,
  },
    flexJustifyCenter: {
    flex: 1,
    justifyContent: 'center'
  },
  flexAlignCenter: {
    flex: 1,
    alignItems: 'center'
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  responsiveCol: {
    width: '50%'
  },
  bgWhite: {
    backgroundColor: '#fff'
  },
  bgNttOrange: {
    backgroundColor: '#f15623',
  },
  bgNttLightOrange: {
    backgroundColor: '#ff6600'
  },
  bgNttDarkGray: {
    backgroundColor: '#414142'
  },
  bgNttMediumGray: {
    backgroundColor: '#6e6e6e'
  },
  bgNttLightGray: {
    backgroundColor: '#dfdfde'
  },
  bgNttDarkBlue: {
    backgroundColor: '#022c66'
  },

  listItemContainer: {
    padding: 0,
    paddingVertical: 5
  },

  fullWidthTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%'
  },
  head: {
    height: 50,
    backgroundColor: '#9fa19f',
    textAlign: 'center'
  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#2ecc71' },
  row: { height: 28 },
  text: {
    textAlign: 'center',
    fontSize: 12
  },
  tableText: {
    margin: 10,
    fontSize: 12
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20, 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tableTitle: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: 'bold',
    width: '50%',
    paddingRight: 10,
    textAlign: 'right'
  },
  container: {
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff',
    width: "100%"
  },    
};


const tinyStyles = { ...defaultStyles };
tinyStyles.responsiveCol = { width: '100%' };

const DefaultStyles = StyleSheet.create(defaultStyles as StyleSheet.NamedStyles<typeof defaultStyles>);
const TinyStyles = StyleSheet.create(tinyStyles as StyleSheet.NamedStyles<typeof defaultStyles>);

type StylesType = typeof DefaultStyles;

export const StylesContext = React.createContext<StylesType>({});

export function getStyles(width: number): StylesType {
  return width <= 576 ? TinyStyles : DefaultStyles;
}