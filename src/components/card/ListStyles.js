import {StyleSheet} from 'react-native';
import colors from '../../utils/Colors';

const ListStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.border_color,
    shadowColor: colors.backgroundColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    fontFamily: 'Scream Real',
  },
  textContainer: {
    flexDirection: 'column',
    width: '70%',
    paddingVertical: 5,
    paddingLeft: 5,
  },
  item: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.backgroundColor,
    textAlign: 'justify',
  },
  heading: {fontWeight: 'bold'},
});

export default ListStyles;
