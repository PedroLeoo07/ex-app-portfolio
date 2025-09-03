import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function SkillsScreen() {
  const { theme } = useTheme();

  const skills = [
    { name: 'React', level: 70 },
    { name: 'React Native', level: 80 },
    { name: 'Next.js', level: 80 },
    { name: 'TypeScript', level: 90 },
  ];

  const codingSkills = [
    { name: 'HTML', level: 70 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 80 },
    { name: 'Node.js', level: 90 },
  ];

  const renderSkill = (skill, index) => (
    <View key={index} style={styles.skillItem}>
      <View style={styles.skillHeader}>
        <Text style={[styles.skillName, { color: theme.colors.text }]}>{skill.name}</Text>
        <Text style={[styles.skillPercentage, { color: theme.colors.primary }]}>{skill.level}%</Text>
      </View>
      <View style={[styles.progressBar, { backgroundColor: theme.colors.border }]}>
        <View 
          style={[
            styles.progressFill, 
            { 
              width: `${skill.level}%`, 
              backgroundColor: theme.colors.primary 
            }
          ]} 
        />
      </View>
    </View>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.heading, { color: theme.colors.text }]}>
          My <Text style={{ color: theme.colors.primary }}>Skills</Text>
        </Text>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Skills</Text>
          <View style={[styles.skillsContainer, { backgroundColor: theme.colors.surface }]}>
            {skills.map(renderSkill)}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Coding Skills</Text>
          <View style={[styles.skillsContainer, { backgroundColor: theme.colors.surface }]}>
            {codingSkills.map(renderSkill)}
          </View>
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
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  skillsContainer: {
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  skillItem: {
    marginBottom: 20,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  skillName: {
    fontSize: 16,
    fontWeight: '600',
  },
  skillPercentage: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
});
