import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutScreen() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.heading, { color: theme.colors.text }]}>
          About <Text style={{ color: theme.colors.primary }}>Me</Text>
        </Text>

        <View style={styles.profileContainer}>
          <View style={styles.imageWrapper}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/200x200' }} 
              style={styles.profileImage} 
            />
            <View style={[styles.circleSpin, { borderColor: theme.colors.primary }]} />
          </View>
        </View>

        <View style={styles.textContent}>
          <Text style={[styles.role, { color: theme.colors.primary }]}>{t('role')}</Text>
          <Text style={[styles.description, { color: theme.colors.secondary }]}>
            {t('about')}
          </Text>
          
          <TouchableOpacity style={[styles.readMoreButton, { borderColor: theme.colors.primary }]}>
            <Text style={[styles.buttonText, { color: theme.colors.primary }]}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  profileContainer: {
    marginBottom: 30,
  },
  imageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  circleSpin: {
    position: 'absolute',
    top: -10,
    left: -10,
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 3,
    borderStyle: 'dashed',
  },
  textContent: {
    alignItems: 'center',
  },
  role: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  readMoreButton: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderWidth: 2,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
