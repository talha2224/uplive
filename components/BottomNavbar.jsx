import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto  from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

const BottomNavBar = () => {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const navigation = useNavigation();

  const tabs = [
    { link: 'home', name: 'Home', icon: 'add-home', type: MaterialIcons },
    { link: 'explore', name: 'Explore', icon: 'globe', type: Entypo },
    { link: 'post', name: null, icon: 'controller-play', type: Entypo, size: 30 },
    { link: 'chat', name: 'Chat', icon: 'hipchat', type: Fontisto },
    { link: 'profile', name: 'Profile', icon: 'user', type: Icon },
  ];

  return (
    <View style={[styles.navContainer, { paddingBottom: insets.bottom }]}>
      <View style={styles.navBar}>
        {tabs.map((tab) => {
          const IconComponent = tab.type;
          const isActive = route.name?.toLowerCase() === tab.link?.toLowerCase();
          return (
            <TouchableOpacity key={tab.name} style={[styles.navItem, isActive && { borderTopWidth:2, borderTopColor: "#497AF7" }]} onPress={() => navigation.navigate(tab.link)}>

              {
                tab?.name ?
                  <IconComponent name={tab.icon} size={20} color={isActive ? '#497AF7' : '#737373'} /> :
                  <View style={{ marginTop: -50, backgroundColor: "#497AF7", width: 60, height: 60, borderRadius: 100, justifyContent: "center", alignItems: "center", zIndex: 9999 }}>
                    <IconComponent name={tab.icon} size={30} color={'#fff'} />
                  </View>
              }
              {
                isActive && (
                  <Text style={{ color: '#497AF7', fontSize: 13, marginTop: 1 }}>{tab?.name}</Text>
                )
              }
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    flexDirection: "row",
    paddingTop:5,
    gap: 6
  },
});

export default BottomNavBar;