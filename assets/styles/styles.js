import { StyleSheet } from 'react-native';

const colors = {
  white: '#FFFFFF',
  gray7: '#FAFAFA',
  gray6: '#EEEEEE',
  gray5: '#CCCCCC',
  gray4: '#AAAAAA',
  gray3: '#777777',
  gray2: '#444444',
  gray1: '#333333',
  black: '#000000',
  themeBlue: '#3498DB',
  themeDarkBlue: '#2E86C1',
  themeLightBlue: '#F4FAFE',
  themeGreen: '#2ECC71',
  themeDarkGreen: '#28B463',
  themeLightGreen: '#F1FCF6',
  themeOrange: '#F39C12',
  themeDarkOrange: '#E67E22',
  themeRed: '#E74C3C',
  themeLightRed: '#FCEAE8',
  translucentWhite: 'rgba(255, 255, 255, 0.8)',
  translucentGray: 'rgba(128, 128, 128, 0.5)'
};

export default StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  sectionsContainer: {
    flex: 1
  },
  contentLeft: {
    width: '33.3%',
    backgroundColor: colors.gray7,
    padding: 30
  },
  contentRight: {
    width: '66.7%',
    backgroundColor: colors.white
  },
  largeTitleContainer: {
    marginTop: 10,
  },
  largeTitle: {
    fontSize: 42,
    fontWeight: '800',
    color: colors.black,
    backgroundColor: 'transparent'
  },
  smallTitle: {
    color: colors.gray3,
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: 'transparent'
  },
  section: {
    padding: 30 
  }
});