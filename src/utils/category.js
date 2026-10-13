/**
 * Utility functions for category normalization, extraction, and filtering.
 */

/**
 * Normalizes a category string for case-insensitive, space-insensitive,
 * and punctuation-insensitive comparison.
 *
 * Examples:
 * - 'API App' -> 'apiapp'
 * - 'api-app' -> 'apiapp'
 * - 'Form / UI' -> 'formui'
 * - 'form-ui' -> 'formui'
 * - 'E-Commerce' -> 'ecommerce'
 * - 'Ecommerce' -> 'ecommerce'
 * - 'All' -> 'all'
 * - 'all' -> 'all'
 */
export function normalizeCategory(category) {
  if (!category) return '';
  return String(category)
    .trim()
    .toLowerCase()
    .replace(/[\s\-_/]+/g, '');
}

/**
 * Canonical category tabs for the Work section.
 */
export const CATEGORY_TABS = [
  'All',
  'Web Clone',
  'Educational',
  'Restaurant',
  'API App',
  'Interactive',
  'E-Commerce',
  'Portfolio',
  'Form / UI'
];

/**
 * Extracts and deduplicates available categories while guaranteeing 'All' is first,
 * preventing duplicates due to capitalization/hyphens/spaces, and accommodating dynamic data.
 */
export function getCategories(projectsList = []) {
  const seen = new Set();
  const tabs = [];

  // Always ensure 'All' is the first category tab
  tabs.push('All');
  seen.add('all');

  // Add baseline categories in preferred order
  CATEGORY_TABS.slice(1).forEach((cat) => {
    const norm = normalizeCategory(cat);
    if (!seen.has(norm)) {
      seen.add(norm);
      tabs.push(cat);
    }
  });

  // Include any extra unique categories found in projects data
  (projectsList || []).forEach((project) => {
    const raw = project.cat || project.category;
    if (raw) {
      const norm = normalizeCategory(raw);
      if (!seen.has(norm)) {
        seen.add(norm);
        tabs.push(raw);
      }
    }
  });

  return tabs;
}

/**
 * Filters a projects list by active category without mutating the original array.
 * If activeCategory is 'all', returns the full list.
 */
export function filterProjects(projectsList = [], activeCategory = 'all') {
  if (!Array.isArray(projectsList)) return [];
  const normActive = normalizeCategory(activeCategory);
  if (normActive === 'all' || normActive === '') {
    return [...projectsList];
  }

  return projectsList.filter((project) => {
    const projectCat = project.cat || project.category || '';
    return normalizeCategory(projectCat) === normActive;
  });
}
