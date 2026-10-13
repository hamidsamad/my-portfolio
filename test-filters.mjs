import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import projects from './src/data/projects.js';
import {
  normalizeCategory,
  getCategories,
  filterProjects,
  CATEGORY_TABS
} from './src/utils/category.js';

describe('Portfolio Category Filtering System', () => {
  const originalLength = projects.length;
  const originalIds = projects.map((p) => p.id);

  test('Project data collection is complete and loaded', () => {
    assert.equal(projects.length, 8, 'Expected 8 total projects');
    projects.forEach((p) => {
      assert.ok(p.id, `Project missing id: ${p.title}`);
      assert.ok(p.title, `Project missing title: ${p.id}`);
      assert.ok(p.cat || p.category, `Project missing category: ${p.id}`);
      assert.ok(p.link, `Project missing link: ${p.id}`);
    });
  });

  test('normalizeCategory handles various formats, casings, and separators', () => {
    assert.equal(normalizeCategory('All'), 'all');
    assert.equal(normalizeCategory('all'), 'all');
    assert.equal(normalizeCategory('ALL'), 'all');
    assert.equal(normalizeCategory('  all  '), 'all');

    assert.equal(normalizeCategory('Web Clone'), 'webclone');
    assert.equal(normalizeCategory('web-clone'), 'webclone');
    assert.equal(normalizeCategory('WEB CLONE'), 'webclone');

    assert.equal(normalizeCategory('Educational'), 'educational');
    assert.equal(normalizeCategory('Restaurant'), 'restaurant');

    assert.equal(normalizeCategory('API App'), 'apiapp');
    assert.equal(normalizeCategory('api app'), 'apiapp');
    assert.equal(normalizeCategory('api-app'), 'apiapp');

    assert.equal(normalizeCategory('Interactive'), 'interactive');

    assert.equal(normalizeCategory('E-Commerce'), 'ecommerce');
    assert.equal(normalizeCategory('ecommerce'), 'ecommerce');
    assert.equal(normalizeCategory('E-commerce'), 'ecommerce');

    assert.equal(normalizeCategory('Portfolio'), 'portfolio');

    assert.equal(normalizeCategory('Form / UI'), 'formui');
    assert.equal(normalizeCategory('Form/UI'), 'formui');
    assert.equal(normalizeCategory('form-ui'), 'formui');
    assert.equal(normalizeCategory('form / ui'), 'formui');
  });

  test('getCategories includes all 9 category tabs with All first', () => {
    const tabs = getCategories(projects);
    assert.equal(tabs[0], 'All', 'First tab must be "All"');

    const expectedTabs = [
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

    expectedTabs.forEach((cat) => {
      const found = tabs.some(
        (t) => normalizeCategory(t) === normalizeCategory(cat)
      );
      assert.ok(found, `Expected tab "${cat}" to be present in getCategories`);
    });

    // Check no duplicate normalized categories
    const normalizedList = tabs.map(normalizeCategory);
    const uniqueNormalized = new Set(normalizedList);
    assert.equal(
      normalizedList.length,
      uniqueNormalized.size,
      'No duplicate category tabs allowed'
    );
  });

  test('Every individual category filter shows only its corresponding projects', () => {
    // All
    const allProjects = filterProjects(projects, 'All');
    assert.equal(allProjects.length, 8);

    // Web Clone
    const webClone = filterProjects(projects, 'Web Clone');
    assert.equal(webClone.length, 1);
    assert.equal(webClone[0].title, 'KFC Restaurant Clone');
    assert.equal(normalizeCategory(webClone[0].cat), 'webclone');

    // Educational
    const educational = filterProjects(projects, 'Educational');
    assert.equal(educational.length, 1);
    assert.equal(educational[0].title, 'Interactive Periodic Table');
    assert.equal(normalizeCategory(educational[0].cat), 'educational');

    // Restaurant
    const restaurant = filterProjects(projects, 'Restaurant');
    assert.equal(restaurant.length, 1);
    assert.equal(restaurant[0].title, 'Salt n Pepper Restaurant');
    assert.equal(normalizeCategory(restaurant[0].cat), 'restaurant');

    // API App
    const apiApp = filterProjects(projects, 'API App');
    assert.equal(apiApp.length, 1);
    assert.equal(apiApp[0].title, 'Weather Dashboard');
    assert.equal(normalizeCategory(apiApp[0].cat), 'apiapp');

    // Interactive
    const interactive = filterProjects(projects, 'Interactive');
    assert.equal(interactive.length, 1);
    assert.equal(interactive[0].title, 'Quiz Master');
    assert.equal(normalizeCategory(interactive[0].cat), 'interactive');

    // E-Commerce
    const eCommerce = filterProjects(projects, 'E-Commerce');
    assert.equal(eCommerce.length, 1);
    assert.equal(eCommerce[0].title, 'E-Commerce Store');
    assert.equal(normalizeCategory(eCommerce[0].cat), 'ecommerce');

    // Portfolio
    const portfolio = filterProjects(projects, 'Portfolio');
    assert.equal(portfolio.length, 1);
    assert.equal(portfolio[0].title, 'CV / Resume Portfolio');
    assert.equal(normalizeCategory(portfolio[0].cat), 'portfolio');

    // Form / UI
    const formUi = filterProjects(projects, 'Form / UI');
    assert.equal(formUi.length, 1);
    assert.equal(formUi[0].title, 'Registration Form');
    assert.equal(normalizeCategory(formUi[0].cat), 'formui');
  });

  test('Required Sequence 1: API App → All → all projects appear', () => {
    let active = 'API App';
    let filtered = filterProjects(projects, active);
    assert.equal(filtered.length, 1, 'API App should have 1 project');
    assert.equal(filtered[0].title, 'Weather Dashboard');

    active = 'All';
    filtered = filterProjects(projects, active);
    assert.equal(filtered.length, 8, 'All projects must appear after API App');
    assert.deepEqual(
      filtered.map((p) => p.id),
      originalIds,
      'Full project list must be restored'
    );
  });

  test('Required Sequence 2: Restaurant → All → all projects appear', () => {
    let active = 'Restaurant';
    let filtered = filterProjects(projects, active);
    assert.equal(filtered.length, 1, 'Restaurant should have 1 project');
    assert.equal(filtered[0].title, 'Salt n Pepper Restaurant');

    active = 'All';
    filtered = filterProjects(projects, active);
    assert.equal(filtered.length, 8, 'All projects must appear after Restaurant');
    assert.deepEqual(filtered.map((p) => p.id), originalIds);
  });

  test('Required Sequence 3: E-Commerce → Portfolio → only Portfolio projects appear', () => {
    let active = 'E-Commerce';
    let filtered = filterProjects(projects, active);
    assert.equal(filtered.length, 1);
    assert.equal(filtered[0].title, 'E-Commerce Store');

    active = 'Portfolio';
    filtered = filterProjects(projects, active);
    assert.equal(filtered.length, 1, 'Only Portfolio projects should appear');
    assert.equal(filtered[0].title, 'CV / Resume Portfolio');
  });

  test('Required Sequence 4: Educational → Web Clone → only Web Clone projects appear', () => {
    let active = 'Educational';
    let filtered = filterProjects(projects, active);
    assert.equal(filtered.length, 1);
    assert.equal(filtered[0].title, 'Interactive Periodic Table');

    active = 'Web Clone';
    filtered = filterProjects(projects, active);
    assert.equal(filtered.length, 1, 'Only Web Clone projects should appear');
    assert.equal(filtered[0].title, 'KFC Restaurant Clone');
  });

  test('Required Sequence 5: Form / UI → All → all projects appear', () => {
    let active = 'Form / UI';
    let filtered = filterProjects(projects, active);
    assert.equal(filtered.length, 1);
    assert.equal(filtered[0].title, 'Registration Form');

    active = 'All';
    filtered = filterProjects(projects, active);
    assert.equal(filtered.length, 8, 'All projects must appear after Form / UI');
    assert.deepEqual(filtered.map((p) => p.id), originalIds);
  });

  test('Required Sequence 6: All → API App → All → all projects appear again', () => {
    let active = 'All';
    let filtered = filterProjects(projects, active);
    assert.equal(filtered.length, 8, 'Initial All shows 8 projects');

    active = 'API App';
    filtered = filterProjects(projects, active);
    assert.equal(filtered.length, 1, 'API App shows 1 project');
    assert.equal(filtered[0].title, 'Weather Dashboard');

    active = 'All';
    filtered = filterProjects(projects, active);
    assert.equal(filtered.length, 8, 'All shows 8 projects again');
    assert.deepEqual(filtered.map((p) => p.id), originalIds);
  });

  test('Rapid consecutive category switching preserves accuracy and never mutates source', () => {
    const sequence = [
      'Web Clone',
      'Restaurant',
      'API App',
      'All',
      'Interactive',
      'Form / UI',
      'E-Commerce',
      'Educational',
      'Portfolio',
      'All'
    ];

    sequence.forEach((cat) => {
      const res = filterProjects(projects, cat);
      if (cat === 'All') {
        assert.equal(res.length, 8);
      } else {
        assert.equal(res.length, 1);
        assert.equal(
          normalizeCategory(res[0].cat),
          normalizeCategory(cat)
        );
      }
    });

    // Verify source projects array was NEVER mutated
    assert.equal(projects.length, originalLength);
    assert.deepEqual(projects.map((p) => p.id), originalIds);
  });

  test('State transition simulator mimicking Work.jsx React component', () => {
    // Simulates the exact state machine of Work.jsx
    let state = 'all';

    const selectCategory = (category) => {
      if (normalizeCategory(category) === 'all') {
        state = 'all';
      } else {
        state = category;
      }
    };

    const getRenderedProjects = () => filterProjects(projects, state);
    const isTabActive = (tab) =>
      normalizeCategory(tab) === normalizeCategory(state);

    // Initial mount
    assert.equal(state, 'all');
    assert.equal(isTabActive('All'), true);
    assert.equal(isTabActive('API App'), false);
    assert.equal(getRenderedProjects().length, 8);

    // Click API App
    selectCategory('API App');
    assert.equal(isTabActive('All'), false);
    assert.equal(isTabActive('API App'), true);
    assert.equal(getRenderedProjects().length, 1);
    assert.equal(getRenderedProjects()[0].title, 'Weather Dashboard');

    // Click All
    selectCategory('All');
    assert.equal(state, 'all');
    assert.equal(isTabActive('All'), true);
    assert.equal(isTabActive('API App'), false);
    assert.equal(getRenderedProjects().length, 8);

    // Switch across all other categories
    const categoriesToTest = [
      'Restaurant',
      'E-Commerce',
      'Portfolio',
      'Educational',
      'Web Clone',
      'Interactive',
      'Form / UI'
    ];

    categoriesToTest.forEach((cat) => {
      selectCategory(cat);
      assert.equal(isTabActive(cat), true);
      assert.equal(isTabActive('All'), false);
      const items = getRenderedProjects();
      assert.equal(items.length, 1);
      assert.equal(normalizeCategory(items[0].cat), normalizeCategory(cat));

      // Reset to All
      selectCategory('All');
      assert.equal(isTabActive('All'), true);
      assert.equal(getRenderedProjects().length, 8);
    });
  });
});
