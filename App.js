import React, { useState } from 'react';
import { StatusBar, Linking } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, TouchableOpacity, ImageBackground } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openPhoneApp = () => {
    const phoneNumber = '+4527821276';
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ImageBackground source={require('./flames.jpg')} style={styles.imageBackground}>
      <View style={styles.container}>
        <Text style={styles.header}>Rami Ifaoui - Business Card{"\nComputer Science Student"}</Text>
        <StatusBar style="auto" />
        <Button title="Press For Contact Info" onPress={handlePress} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Contact Information:</Text>
              <Text>Name: Rami Ifaoui</Text>
              <TouchableOpacity onPress={openPhoneApp}>
                <Text style={styles.phoneNumber}>Phone: +45 2782 1276</Text>
              </TouchableOpacity>
              <Text>Email: Rami-Ifaoui@hotmail.com</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' for a different look
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional overlay for better readability
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'white',
    fontSize: 24, // Adjust as needed
    marginBottom: 20, // Add spacing if needed
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  phoneNumber: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  closeButtonText: {
    fontWeight: 'bold',
  },
});
