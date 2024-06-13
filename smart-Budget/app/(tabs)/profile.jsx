import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Text, TouchableOpacity, Switch, Image, Button } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Entypo } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Example() {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });

  const logout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      router.replace('/login');
      // User was logged out
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity onPress={() => { /* handle onPress */ }}>
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt=""
                source={{
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                }}
                style={styles.profileAvatar}
              />

              <TouchableOpacity onPress={() => { /* handle onPress */ }}>
                <View style={styles.profileAction}>
                  <FeatherIcon color="#fff" name="edit-3" size={15} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileAddress}>
              123 Maple Street. Anytown, PA 17101
            </Text>
          </View>
        </View>

        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>

            <TouchableOpacity onPress={() => { /* handle onPress */ }} style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
                <FeatherIcon color="#fff" name="globe" size={20} />
              </View>
              <Text style={styles.rowLabel}>Language</Text>
              <View style={styles.rowSpacer} />
              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>

            <View style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
                <FeatherIcon color="#fff" name="moon" size={20} />
              </View>
              <Text style={styles.rowLabel}>Dark Mode</Text>
              <View style={styles.rowSpacer} />
              <Switch
                onValueChange={darkMode => setForm({ ...form, darkMode })}
                value={form.darkMode}
              />
            </View>

            <TouchableOpacity onPress={() => { /* handle onPress */ }} style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
                <FeatherIcon color="#fff" name="navigation" size={20} />
              </View>
              <Text style={styles.rowLabel}>Location</Text>
              <View style={styles.rowSpacer} />
              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>

            <View style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
                <FeatherIcon color="#fff" name="at-sign" size={20} />
              </View>
              <Text style={styles.rowLabel}>Email Notifications</Text>
              <View style={styles.rowSpacer} />
              <Switch
                onValueChange={emailNotifications => setForm({ ...form, emailNotifications })}
                value={form.emailNotifications}
              />
            </View>

            <View style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
                <FeatherIcon color="#fff" name="bell" size={20} />
              </View>
              <Text style={styles.rowLabel}>Push Notifications</Text>
              <View style={styles.rowSpacer} />
              <Switch
                onValueChange={pushNotifications => setForm({ ...form, pushNotifications })}
                value={form.pushNotifications}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resources</Text>

            <TouchableOpacity onPress={() => { /* handle onPress */ }} style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#8e8d91' }]}>
                <FeatherIcon color="#fff" name="flag" size={20} />
              </View>
              <Text style={styles.rowLabel}>Report Bug</Text>
              <View style={styles.rowSpacer} />
              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { /* handle onPress */ }} style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
              <Entypo name="log-out" size={24} color="black" />
              </View>
              <Text style= {{
                fontSize:'Poppins'
              }}>Logout</Text>
              <View style={styles.rowSpacer} />
              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { /* handle onPress */ }} style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
                <FeatherIcon color="#fff" name="star" size={20} />
              </View>
              <Text style={styles.rowLabel}>Rate in App Store</Text>
              <View style={styles.rowSpacer} />
              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  profileAvatarWrapper: {
    marginRight: 15,
    position: 'relative',
  },
  profileAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  profileAction: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#007afe',
    borderRadius: 15,
    padding: 5,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileAddress: {
    color: '#777',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  rowIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  rowLabel: {
    flex: 1,
    fontSize: 16,
  },
  rowSpacer: {
    flex: 1,
  },
  logoutContainer: {
    padding: 20,
    backgroundColor: '#32c759',
  },
});
