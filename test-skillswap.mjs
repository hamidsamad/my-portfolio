import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

describe('SkillSwap PK Integration Verification', () => {
  const rootDir = process.cwd();
  const imagePath = path.join(rootDir, 'public', 'skillswap-pk.jpg');
  const cardPath = path.join(rootDir, 'src', 'components', 'SkillSwapCard.jsx');
  const homePath = path.join(rootDir, 'src', 'pages', 'Home.jsx');
  const workPath = path.join(rootDir, 'src', 'pages', 'Work.jsx');

  test('Project preview image exists and is valid', () => {
    assert.ok(fs.existsSync(imagePath), 'skillswap-pk.jpg must exist in public directory');
    const stat = fs.statSync(imagePath);
    assert.ok(stat.size > 10000, `Image size should be valid, got ${stat.size} bytes`);
  });

  test('SkillSwapCard contains the exact 6-line description', () => {
    assert.ok(fs.existsSync(cardPath), 'SkillSwapCard.jsx must exist');
    const cardContent = fs.readFileSync(cardPath, 'utf-8');

    const expectedLines = [
      'SkillSwap PK is a peer-to-peer platform where people can exchange skills and knowledge with one another.',
      'Users can teach what they know and learn new skills from other people.',
      'The platform helps users find suitable learning partners through smart skill matching.',
      'It includes user profiles, a skills directory, live chat, and skill-swap agreements.',
      'Its modern, responsive UI provides a smooth experience across desktop and mobile devices.',
      'The mission is to make learning accessible through collaboration, connection, and mutual growth.'
    ];

    expectedLines.forEach((line, index) => {
      assert.ok(
        cardContent.includes(line),
        `Description line ${index + 1} missing from SkillSwapCard: "${line}"`
      );
    });
  });

  test('SkillSwapCard contains exact URL for Live Demo and View Project', () => {
    const cardContent = fs.readFileSync(cardPath, 'utf-8');
    const exactUrl = 'https://skillsswap67.vercel.app/';

    assert.ok(
      cardContent.includes(exactUrl),
      'Exact URL https://skillsswap67.vercel.app/ must be present in SkillSwapCard'
    );
    assert.ok(
      cardContent.includes('Live Demo'),
      'Card must have Live Demo button'
    );
    assert.ok(
      cardContent.includes('View Project'),
      'Card must have View Project button'
    );
  });

  test('SkillSwapCard contains all verified technologies actually used', () => {
    const cardContent = fs.readFileSync(cardPath, 'utf-8');
    const expectedTechs = [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'Tailwind CSS',
      'Google OAuth'
    ];

    expectedTechs.forEach((tech) => {
      assert.ok(
        cardContent.includes(`'${tech}'`),
        `Technology badge for ${tech} must be included in technologies list`
      );
    });
  });

  test('SkillSwapCard is rendered in the Projects section on Home and Work pages', () => {
    const homeContent = fs.readFileSync(homePath, 'utf-8');
    const workContent = fs.readFileSync(workPath, 'utf-8');

    assert.ok(
      homeContent.includes('import SkillSwapCard'),
      'Home.jsx must import SkillSwapCard'
    );
    assert.ok(
      homeContent.includes('<SkillSwapCard />') || homeContent.includes('<SkillSwapCard/>'),
      'Home.jsx must render <SkillSwapCard /> in Selected Work / Recent Projects'
    );

    assert.ok(
      workContent.includes('import SkillSwapCard'),
      'Work.jsx must import SkillSwapCard'
    );
    assert.ok(
      workContent.includes('<SkillSwapCard />') || workContent.includes('<SkillSwapCard/>'),
      'Work.jsx must render <SkillSwapCard />'
    );
  });
});
