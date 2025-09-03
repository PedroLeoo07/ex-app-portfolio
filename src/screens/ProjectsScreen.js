import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

export default function ProjectsScreen() {
  const { theme } = useTheme();

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Site pessoal responsivo com modo claro/escuro e seções animadas.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['HTML', 'CSS', 'JS'],
      github: 'https://github.com/PedroLeoo07',
    },
    {
      title: 'API Node.js',
      description: 'API RESTful com autenticação JWT e banco relacional.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['Node', 'Express', 'PostgreSQL'],
      github: 'https://github.com/PedroLeoo07',
    },
    {
      title: 'React App',
      description: 'Aplicação SPA com roteamento, contexto e consumo de API externa.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['React', 'TypeScript', 'API'],
      github: 'https://github.com/PedroLeoo07',
    },
  ];

  const openGitHub = (url) => {
    Linking.openURL(url);
  };

  const renderProject = (project, index) => (
    <View key={index} style={[styles.projectCard, { backgroundColor: theme.colors.surface }]}>
      <Image source={{ uri: project.image }} style={styles.projectImage} />
      <View style={styles.projectContent}>
        <Text style={[styles.projectTitle, { color: theme.colors.text }]}>{project.title}</Text>
        <Text style={[styles.projectDescription, { color: theme.colors.secondary }]}>
          {project.description}
        </Text>
        <View style={styles.tagsContainer}>
          {project.tags.map((tag, tagIndex) => (
            <View key={tagIndex} style={[styles.tag, { backgroundColor: theme.colors.primary }]}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity 
          style={styles.githubButton}
          onPress={() => openGitHub(project.github)}
        >
          <Ionicons name="logo-github" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.heading, { color: theme.colors.text }]}>
          Recent <Text style={{ color: theme.colors.primary }}>Projects</Text>
        </Text>
        
        <View style={styles.projectsContainer}>
          {projects.map(renderProject)}
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
  projectsContainer: {
    paddingBottom: 20,
  },
  projectCard: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  projectImage: {
    width: '100%',
    height: 200,
  },
  projectContent: {
    padding: 15,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  tagText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  githubButton: {
    alignSelf: 'flex-end',
  },
});
