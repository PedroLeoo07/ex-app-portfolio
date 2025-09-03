import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Color scheme matching your CSS variables
export const colors = {
  light: {
    bg: '#ffffff',
    secondBg: '#f2f4f7',
    text: '#1a1d21',
    main: '#d10000',
  },
  dark: {
    bg: '#000000',
    secondBg: '#000508',
    text: '#ededed',
    main: '#f00000',
  },
};

// Responsive font sizes based on screen width
export const getFontSize = (baseSize) => {
  const scale = width / 375; // iPhone X baseline
  return Math.min(Math.max(baseSize * scale, baseSize * 0.8), baseSize * 1.3);
};

// Common spacing values
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Global styles that can be shared across components
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.md,
  },
  
  // Typography styles
  heading: {
    fontSize: getFontSize(32),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  
  subheading: {
    fontSize: getFontSize(24),
    fontWeight: '600',
    marginBottom: spacing.lg,
  },
  
  bodyText: {
    fontSize: getFontSize(16),
    lineHeight: getFontSize(24),
    textAlign: 'center',
  },
  
  smallText: {
    fontSize: getFontSize(14),
    lineHeight: getFontSize(20),
  },
  
  // Common layout styles
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  column: {
    flexDirection: 'column',
  },
  
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  spaceBetween: {
    justifyContent: 'space-between',
  },
  
  // Button styles
  primaryButton: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  
  outlineButton: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  
  buttonText: {
    fontSize: getFontSize(16),
    fontWeight: '600',
  },
  
  // Card styles
  card: {
    borderRadius: 10,
    padding: spacing.lg,
    marginBottom: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  // Profile image styles
  profileImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  
  profileImage: {
    borderRadius: 100,
    borderWidth: 2,
  },
  
  profileImageSmall: {
    width: 120,
    height: 120,
  },
  
  profileImageMedium: {
    width: 180,
    height: 180,
  },
  
  profileImageLarge: {
    width: 220,
    height: 220,
  },
  
  // Circle spin animation container
  circleSpinContainer: {
    position: 'absolute',
    borderRadius: 110,
    borderWidth: 3,
    borderStyle: 'dashed',
  },
  
  // Form styles
  input: {
    borderWidth: 2,
    borderRadius: 8,
    padding: spacing.md,
    fontSize: getFontSize(16),
    marginBottom: spacing.md,
  },
  
  textArea: {
    borderWidth: 2,
    borderRadius: 8,
    padding: spacing.md,
    fontSize: getFontSize(16),
    marginBottom: spacing.md,
    height: 120,
    textAlignVertical: 'top',
  },
  
  // Progress bar styles
  progressContainer: {
    marginBottom: spacing.lg,
  },
  
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
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
  
  // Social media icons
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  
  socialIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Tag styles
  tag: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: spacing.sm,
    marginBottom: 4,
  },
  
  tagText: {
    color: 'white',
    fontSize: getFontSize(12),
    fontWeight: '600',
  },
  
  // Header styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: 50,
    paddingBottom: spacing.lg,
  },
  
  logo: {
    fontSize: getFontSize(24),
    fontWeight: 'bold',
  },
  
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  langButton: {
    marginRight: spacing.md,
    padding: spacing.sm,
  },
  
  langText: {
    fontSize: getFontSize(16),
    fontWeight: 'bold',
  },
  
  themeButton: {
    padding: spacing.sm,
  },
  
  // Education/Timeline styles
  timelineContainer: {
    borderLeftWidth: 2,
    paddingLeft: spacing.lg,
    marginLeft: spacing.md,
  },
  
  timelineItem: {
    marginBottom: spacing.lg,
    position: 'relative',
  },
  
  timelineDot: {
    position: 'absolute',
    left: -spacing.lg - 8,
    top: 4,
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  
  timelineContent: {
    borderWidth: 2,
    borderRadius: 8,
    padding: spacing.md,
  },
  
  yearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  
  yearText: {
    fontSize: getFontSize(14),
    fontWeight: '600',
    marginLeft: 5,
  },
  
  // Project card styles
  projectCard: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  projectImage: {
    width: '100%',
    height: 200,
  },
  
  projectContent: {
    padding: spacing.md,
  },
  
  projectTitle: {
    fontSize: getFontSize(18),
    fontWeight: 'bold',
    marginBottom: spacing.sm,
  },
  
  projectDescription: {
    fontSize: getFontSize(14),
    lineHeight: getFontSize(20),
    marginBottom: spacing.md,
  },
  
  projectTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.md,
  },
  
  projectLinks: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  
  // CV Button styles
  cvButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderWidth: 2,
    borderRadius: 25,
    marginHorizontal: 5,
    gap: spacing.sm,
  },
  
  cvButtonText: {
    fontSize: getFontSize(14),
    fontWeight: '600',
  },
  
  cvBadge: {
    backgroundColor: '#00abf0',
    color: 'white',
    fontSize: getFontSize(12),
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  
  // Animation styles
  fadeIn: {
    opacity: 0,
  },
  
  slideUp: {
    transform: [{ translateY: 50 }],
  },
  
  // Responsive utilities
  hideOnSmall: {
    display: width < 768 ? 'none' : 'flex',
  },
  
  showOnSmall: {
    display: width < 768 ? 'flex' : 'none',
  },
});

// Utility functions for responsive design
export const isTablet = width >= 768;
export const isSmallScreen = width < 480;

// Common style combinations
export const getThemedStyles = (theme) => ({
  container: {
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.text,
  },
  primaryText: {
    color: theme.colors.primary,
  },
  secondaryText: {
    color: theme.colors.secondary,
  },
  surface: {
    backgroundColor: theme.colors.surface,
  },
  border: {
    borderColor: theme.colors.border,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
  },
  outlineButton: {
    borderColor: theme.colors.primary,
  },
});

export default globalStyles;
