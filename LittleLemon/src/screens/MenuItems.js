import { View, Text, StyleSheet, SectionList } from 'react-native'
import React from 'react'
import LittleLemonFooter from '../components/LittleLemonFooter';
import SafeAreaViewPart from '../components/SafeAreaViewPart';


const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Separator = () => <View style={menuStyle.separator} />

const Header = () => <Text style={menuStyle.headerText}>View Menu</Text>

const Footer = () => <Text style={menuStyle.footerText}>All Rights Reserved by Little Lemon 2022</Text>

const Item = ({ name, price }) => (
  <View style={menuStyle.innerContainer}>
    <Text style={menuStyle.itemText}>{name}</Text>
    <Text style={menuStyle.itemText}>{price}</Text>
  </View>
)

const MenuItems = () => {

  const renderItem = ({ item }) =>
    <Item name={item.name} price={item.price} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={menuStyle.headerStyle}>
      <Text style={menuStyle.sectionHeader}>{title} </Text>
    </View >
  );

  return (
    <View style={menuStyle.container}>
      <View style={styles.screen}>
        <SafeAreaViewPart />
        <SectionList
          sections={menuItemsToDisplay}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}>
        </SectionList>
      </View>
      <LittleLemonFooter />
    </View>
  )
}

const menuStyle = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    flex: 0.9
  },
  screen: {
    flex: 0.96
  },
  innerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: 'space-between'
  },
  sectionHeader: {
    textAlign: 'center',
    color: 'black',
    flexWrap: 'wrap',
    fontSize: 26,
  },
  headerText: {
    color: '#EDEFEE',
    fontSize: 40,
    paddingVertical: 8,
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  footerText: {
    color: '#EDEFEE',
    fontSize: 20,
    paddingVertical: 8,
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  headerStyle: {
    backgroundColor: '#F4CE14',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 20
  },
  separator: {
    borderColor: '#EDEFEE',
    borderBottomWidth: 1
  }

})

export default MenuItems