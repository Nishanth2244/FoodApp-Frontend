import React from 'react';
import {
    Image,
    ImageBackground,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      {/* --- Top Navigation Bar --- */}
      <View style={styles.navBar}>
        <View style={styles.navLinks}>
          <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
          <Text style={styles.navText}>Gallery</Text>
          <Text style={styles.navText}>Shop</Text>
          <Text style={styles.navText}>Contact</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.authLinks}>
          <TouchableOpacity>
            <Text style={styles.navText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* --- Main Content --- */}
      <ScrollView>
        {/* Background Section */}
        <ImageBackground
          source={{
            uri: 'https://i.ibb.co/PzDDSKf0/old-wall-red-brick-wall-antique-texture-dark-brown-and-red-brick-wall-backgorund-image-photo.webp',
          }}
          style={styles.header}
          imageStyle={styles.backgroundImage}>
          <View style={styles.contentBox}>
            <Text style={styles.special}>SPECIAL</Text>
            <Text style={styles.delicious}>DELICIOUS</Text>
            <Text style={styles.grilled}>Grilled Chicken</Text>

            <Text style={styles.subHeading}>LANDING PAGE</Text>

            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore.
            </Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.shopBtn}>
                <Text style={styles.btnText}>SHOP NOW</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Chicken Image */}
          <Image
            source={require('@/assets/images/chicken1.png')} // Make sure this path is correct
            style={styles.chicken}
          />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // --- Layout & Nav Styles ---
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#1a1a1a',
  },
  navLinks: {
    flexDirection: 'row',
    gap: 12,
    flex: 1.5,
  },
  navText: {
    color: 'white',
    fontSize: 15,
  },
  navTextActive: {
    fontWeight: 'bold',
  },
  searchContainer: {
    flex: 1.5,
    marginHorizontal: 10,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 14,
  },
  authLinks: {
    flexDirection: 'row',
    gap: 12,
    flex: 1,
    justifyContent: 'flex-end',
  },

  // --- Header & Content Styles ---
  header: {
    width: '100%',
    height: 480,
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingTop: 40,
    position: 'relative',
    backgroundColor: '#0b3c4c', // Fallback color
  },
  backgroundImage: {
    objectFit: 'cover',
  },
  contentBox: {
    width: '60%',
  },
  special: {
    color: '#FF8A00',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 5,
  },
  delicious: {
    color: '#FF8A00',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 5,
  },
  grilled: {
    color: 'white',
    fontSize: 48,
    fontWeight: '900',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  subHeading: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    color: 'white',
    fontSize: 15,
    width: '70%',
    marginBottom: 25,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  shopBtn: {
    backgroundColor: '#FF8A00',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  chicken: {
    position: 'absolute',
    width: 350,
    height: 350,
    resizeMode: 'contain',
    pointerEvents: 'none',
    // --- Centering styles ---
    top: '50%',
    left: '50%',
    transform: [{ translateY: -175 }, { translateX: -175 }],
  },
});