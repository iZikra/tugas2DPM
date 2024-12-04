import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah */}
      <Text style={styles.centerText}>Nama:Zikrallah Al Hady</Text>
      <Text style={styles.centerText}>NPM:223510666</Text>
      {/* Kontainer kotak */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Kontainer utama
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Latar belakang abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Gaya teks di tengah
  centerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20, // Jarak bawah
  },
  // Kontainer untuk kotak
  boxContainer: {
    flexDirection: 'row', // Atur tata letak horizontal
    justifyContent: 'space-between', // Jarak merata antara kotak
    alignItems: 'center',
    width: '80%', // Lebar kontainer
  },
  // Gaya umum untuk kotak
  box: {
    width: 100,
    height: 100,
  },
  // Kotak 1
  box1: {
    backgroundColor: 'black', // Warna bebas
  },
  // Kotak 2
  box2: {
    backgroundColor: 'gray', // Warna bebas
  },
});

export default App;
