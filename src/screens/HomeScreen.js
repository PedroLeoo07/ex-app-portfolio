import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { globalStyles, getThemedStyles, getFontSize, spacing } from '../styles/globalStyles';

export default function HomeScreen() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const themedStyles = getThemedStyles(theme);

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={[globalStyles.container, themedStyles.container]}>
      {/* Header */}
      <View style={globalStyles.header}>
        <Text style={[globalStyles.logo, themedStyles.text]}>Leonardo.</Text>
        <View style={globalStyles.headerButtons}>
          <TouchableOpacity onPress={toggleLanguage} style={globalStyles.langButton}>
            <Text style={[globalStyles.langText, themedStyles.text]}>{language.toUpperCase()}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleTheme} style={globalStyles.themeButton}>
            <Ionicons 
              name={theme.isDark ? 'sunny' : 'moon'} 
              size={24} 
              color={theme.colors.text} 
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Section */}
      <View style={globalStyles.profileImageContainer}>
        <View style={styles.imageWrapper}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/220x220' }} 
            style={[globalStyles.profileImage, globalStyles.profileImageLarge, { borderColor: theme.colors.primary }]} 
          />
          <View style={[globalStyles.circleSpinContainer, styles.circleSpin, { borderColor: theme.colors.primary }]} />
        </View>
      </View>

      {/* Content */}
      <View style={styles.textContent}>
        <Text style={[styles.greeting, themedStyles.text]}>
          Hi, I'm <Text style={{ color: theme.colors.primary }}>Leonardo Oliveira</Text>
        </Text>
        <Text style={[styles.role, themedStyles.primaryText]}>{t('role')}</Text>
        <Text style={[globalStyles.bodyText, themedStyles.secondaryText, styles.description]}>
          {t('intro')}
        </Text>
      </View>

      {/* CV Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[globalStyles.cvButton, { borderColor: theme.colors.primary }]}
          onPress={() => openLink('https://example.com/cv-pt.pdf')}
        >
          <Ionicons name="download" size={20} color={theme.colors.primary} />
          <Text style={[globalStyles.cvButtonText, { color: theme.colors.primary }]}>{t('cv')}</Text>
          <View style={globalStyles.cvBadge}>
            <Text style={styles.badgeText}>PT</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[globalStyles.cvButton, { borderColor: theme.colors.primary }]}
          onPress={() => openLink('https://example.com/resume-en.pdf')}
        >
          <Ionicons name="download" size={20} color={theme.colors.primary} />
          <Text style={[globalStyles.cvButtonText, { color: theme.colors.primary }]}>{t('resume')}</Text>
          <View style={globalStyles.cvBadge}>
            <Text style={styles.badgeText}>EN</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Social Media Icons */}
      <View style={globalStyles.socialContainer}>
        <TouchableOpacity 
          style={[globalStyles.socialIcon, { borderColor: theme.colors.primary }]}
          onPress={() => openLink('https://linkedin.com/in/leonardo-oliveira-38aab7321/')}
        >
          <Ionicons name="logo-linkedin" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[globalStyles.socialIcon, { borderColor: theme.colors.primary }]}
          onPress={() => openLink('https://github.com/PedroLeoo07')}
        >
          <Ionicons name="logo-github" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[globalStyles.socialIcon, { borderColor: theme.colors.primary }]}
          onPress={() => openLink('https://wa.me/5519988727143')}
        >
          <Ionicons name="logo-whatsapp" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[globalStyles.socialIcon, { borderColor: theme.colors.primary }]}
          onPress={() => openLink('https://instagram.com/oliveir._leo/')}
        >
          <Ionicons name="logo-instagram" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleSpin: {
    position: 'absolute',
    top: -10,
    left: -10,
    width: 240,
    height: 240,
  },
  textContent: {
    alignItems: 'center',
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.md,
  },
  greeting: {
    fontSize: getFontSize(28),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  role: {
    fontSize: getFontSize(20),
    fontWeight: '600',
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  description: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.xl,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    gap: spacing.md,
  },
  badgeText: {
    color: 'white',
    fontSize: getFontSize(11),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  cvButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 2,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
    marginRight: 8,
  },
  badge: {
    backgroundColor: '#00abf0',
    color: 'white',
    fontSize: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
});
