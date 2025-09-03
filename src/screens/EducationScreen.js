import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

export default function EducationScreen() {
  const { theme } = useTheme();

  const educationData = [
    {
      year: '2021 - 2023',
      title: 'Curso de Designer de Games',
      description: 'Formação focada na criação de jogos 2D e 3D, com ênfase em programação, modelagem 3D, animações e uso de engines como Unity.',
    },
    {
      year: '2023 - 2025',
      title: 'Curso de Informática',
      description: 'Curso voltado para o uso prático da tecnologia, com foco em informática básica, pacote Office, lógica de programação e fundamentos de design gráfico.',
    },
    {
      year: '2024 - 2025',
      title: 'Curso Técnico em Análise e Desenvolvimento de Sistemas',
      description: 'Formação técnica com foco em análise, desenvolvimento e manutenção de sistemas. Estudei lógica de programação, banco de dados, front-end, back-end e metodologias ágeis.',
    },
  ];

  const coursesData = [
    {
      year: '2024 - atualmente',
      title: 'Curso de JavaScript',
      description: 'Curso focado no desenvolvimento web com JavaScript, abordando desde os fundamentos da linguagem até conceitos avançados.',
    },
    {
      year: '2024 - atualmente',
      title: 'Curso de Desenvolvimento Full-Stack',
      description: 'Formação completa voltada para o desenvolvimento de aplicações web, abrangendo front-end e back-end.',
    },
    {
      year: '2024 - atualmente',
      title: 'Curso de Node.js',
      description: 'Curso focado no desenvolvimento de aplicações back-end com Node.js.',
    },
  ];

  const renderEducationItem = (item, index) => (
    <View key={index} style={[styles.educationItem, { backgroundColor: theme.colors.surface }]}>
      <View style={styles.yearContainer}>
        <Ionicons name="calendar" size={16} color={theme.colors.primary} />
        <Text style={[styles.year, { color: theme.colors.primary }]}>{item.year}</Text>
      </View>
      <Text style={[styles.title, { color: theme.colors.text }]}>{item.title}</Text>
      <Text style={[styles.description, { color: theme.colors.secondary }]}>{item.description}</Text>
    </View>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.heading, { color: theme.colors.text }]}>
          My <Text style={{ color: theme.colors.primary }}>Journey</Text>
        </Text>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Educação</Text>
          {educationData.map(renderEducationItem)}
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Cursos Extras</Text>
          {coursesData.map(renderEducationItem)}
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
  educationItem: {
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  yearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  year: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
});
