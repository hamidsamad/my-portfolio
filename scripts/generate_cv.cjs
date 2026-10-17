const fs = require('fs');
const path = require('path');

function buildPDF() {
  const objects = [];
  
  function addObject(content) {
    objects.push(content);
    return objects.length; // 1-based object number
  }

  // Text stream helper
  let streamContent = '';
  
  // Coordinate helpers (PDF 0,0 is bottom-left, page is 612 x 792 pt, Letter size)
  // Margins: left=40, right=572 (width=532), top=750, bottom=40
  
  function addText(text, x, y, font, size, r = 0, g = 0, b = 0) {
    // Escape special characters in text
    const escaped = text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    streamContent += `BT /${font} ${size} Tf ${r} ${g} ${b} rg ${x} ${y} Td (${escaped}) Tj ET\n`;
  }

  function addLine(x1, y1, x2, y2, r = 0.8, g = 0.65, b = 0.25, width = 1) {
    streamContent += `${r} ${g} ${b} RG ${width} w ${x1} ${y1} m ${x2} ${y2} l S\n`;
  }

  function addRect(x, y, w, h, r = 0.95, g = 0.95, b = 0.95) {
    streamContent += `${r} ${g} ${b} rg ${x} ${y} ${w} ${h} re f\n`;
  }

  // Draw Header
  // Top luxury accent bar
  addRect(0, 786, 612, 6, 0.83, 0.68, 0.22); // Imperial Gold top bar

  // Name
  addText('HAMID ALI BALOCH', 45, 742, 'F1', 22, 0.05, 0.20, 0.17); // Dark Peacock Emerald Green
  addText('FULL STACK DEVELOPER (FRONTEND & BACKEND)', 45, 725, 'F1', 10, 0.75, 0.58, 0.15); // Antique Gold
  addText('Quetta, Pakistan  |  hamidsamad0786@gmail.com  |  github.com/hamidsamad  |  Available Worldwide', 45, 710, 'F2', 9, 0.40, 0.40, 0.40);

  addLine(45, 698, 567, 698, 0.85, 0.75, 0.40, 0.75); // Divider line

  let curY = 678;

  function sectionHeader(title) {
    addText(title.toUpperCase(), 45, curY, 'F1', 11, 0.05, 0.20, 0.17);
    addLine(45, curY - 4, 567, curY - 4, 0.85, 0.75, 0.40, 0.5);
    curY -= 20;
  }

  // SECTION: PROFESSIONAL SUMMARY
  sectionHeader('Professional Summary');
  addText('Dedicated Full Stack Developer specializing in crafting responsive, high-performance web applications.', 45, curY, 'F2', 9.5, 0.25, 0.25, 0.25); curY -= 14;
  addText('Proven expertise in building end-to-end digital solutions combining modern frontend frameworks (React, JavaScript)', 45, curY, 'F2', 9.5, 0.25, 0.25, 0.25); curY -= 14;
  addText('with robust backend architectures (Node.js, Express.js, MongoDB, RESTful APIs). Passionate about clean code,', 45, curY, 'F2', 9.5, 0.25, 0.25, 0.25); curY -= 14;
  addText('exceptional user experiences, performance optimization, and scalable software design.', 45, curY, 'F2', 9.5, 0.25, 0.25, 0.25); curY -= 22;

  // SECTION: TECHNICAL SKILLS
  sectionHeader('Technical Skills');
  addText('Frontend:', 45, curY, 'F1', 9.5, 0.15, 0.15, 0.15);
  addText('React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design, Redux, Next.js, Vite', 115, curY, 'F2', 9.5, 0.25, 0.25, 0.25);
  curY -= 16;
  addText('Backend:', 45, curY, 'F1', 9.5, 0.15, 0.15, 0.15);
  addText('Node.js, Express.js, RESTful APIs, Middleware, Authentication, Server Architecture', 115, curY, 'F2', 9.5, 0.25, 0.25, 0.25);
  curY -= 16;
  addText('Database:', 45, curY, 'F1', 9.5, 0.15, 0.15, 0.15);
  addText('MongoDB, Mongoose ORM, Data Modeling, Database Design & Optimization', 115, curY, 'F2', 9.5, 0.25, 0.25, 0.25);
  curY -= 16;
  addText('Tools & Other:', 45, curY, 'F1', 9.5, 0.15, 0.15, 0.15);
  addText('Git, GitHub, VS Code, Postman, Performance Auditing, UI/UX Design, Figma, Agile', 115, curY, 'F2', 9.5, 0.25, 0.25, 0.25);
  curY -= 22;

  // SECTION: EXPERIENCE
  sectionHeader('Experience');
  
  // Job 1
  addText('Full Stack Developer  —  Freelance', 45, curY, 'F1', 10.5, 0.10, 0.10, 0.10);
  addText('2026 – Present  |  Remote', 455, curY, 'F2', 9, 0.50, 0.50, 0.50);
  curY -= 14;
  addText('* Designed and engineered full-stack web applications for diverse clients using React, Node.js, and MongoDB.', 55, curY, 'F2', 9, 0.25, 0.25, 0.25); curY -= 13;
  addText('* Developed scalable RESTful APIs with Express.js featuring authentication, secure routes, and error handling.', 55, curY, 'F2', 9, 0.25, 0.25, 0.25); curY -= 13;
  addText('* Delivered responsive, mobile-first layouts with tailored CSS/Tailwind optimizing Core Web Vitals and load times.', 55, curY, 'F2', 9, 0.25, 0.25, 0.25); curY -= 13;
  addText('* Managed project lifecycles end-to-end from initial requirement gathering to cloud deployment.', 55, curY, 'F2', 9, 0.25, 0.25, 0.25); curY -= 18;

  // Job 2
  addText('Junior Developer  —  Practice & Internship', 45, curY, 'F1', 10, 0.10, 0.10, 0.10);
  addText('2025 – 2026  |  Pakistan', 465, curY, 'F2', 9, 0.50, 0.50, 0.50);
  curY -= 14;
  addText('* Built 30+ interactive web projects including application clones, dynamic dashboards, and creative UI experiments.', 55, curY, 'F2', 9, 0.25, 0.25, 0.25); curY -= 13;
  addText('* Implemented responsive layouts, asynchronous data fetching, and DOM manipulation using modern JavaScript.', 55, curY, 'F2', 9, 0.25, 0.25, 0.25); curY -= 13;
  addText('* Mastered Git & GitHub version control workflows including branching, pull requests, and collaboration.', 55, curY, 'F2', 9, 0.25, 0.25, 0.25); curY -= 18;

  // Job 3
  addText('Web Development Trainee  —  Self-Directed Learning', 45, curY, 'F1', 10, 0.10, 0.10, 0.10);
  addText('2025  |  Self-Taught', 475, curY, 'F2', 9, 0.50, 0.50, 0.50);
  curY -= 14;
  addText('* Completed 100+ hours of comprehensive coursework covering HTML5, CSS3, modern JavaScript, and React.', 55, curY, 'F2', 9, 0.25, 0.25, 0.25); curY -= 13;
  addText('* Solved 50+ programming and algorithmic challenges to build solid fundamentals in data structures and logic.', 55, curY, 'F2', 9, 0.25, 0.25, 0.25); curY -= 22;

  // SECTION: FEATURED PROJECT
  sectionHeader('Featured Projects');
  addText('SkillSwap PK  —  Peer-to-Peer Skill Exchange Platform', 45, curY, 'F1', 10, 0.10, 0.10, 0.10);
  addText('Live Demo: skillswappk.vercel.app', 400, curY, 'F2', 8.5, 0.75, 0.58, 0.15);
  curY -= 14;
  addText('* Full-stack platform enabling individuals to connect, swap skills, and schedule peer sessions without monetary friction.', 55, curY, 'F2', 9, 0.25, 0.25, 0.25); curY -= 13;
  addText('* Features search & discovery, interactive user profiles, responsive design, and state management.', 55, curY, 'F2', 9, 0.25, 0.25, 0.25); curY -= 20;

  // SECTION: EDUCATION
  sectionHeader('Education & Credentials');
  addText('Web Development & Full-Stack Engineering', 45, curY, 'F1', 10, 0.10, 0.10, 0.10);
  addText('2024 – Present', 495, curY, 'F2', 9, 0.50, 0.50, 0.50);
  curY -= 14;
  addText('Self-Taught & Continuous Learning  |  Quetta, Balochistan, Pakistan', 45, curY, 'F2', 9, 0.35, 0.35, 0.35); curY -= 13;
  addText('Comprehensive studies in Full-Stack Web Development, modern UI/UX design, Node.js, and MongoDB.', 45, curY, 'F2', 8.5, 0.45, 0.45, 0.45);

  // Footer of page
  addLine(45, 35, 567, 35, 0.85, 0.75, 0.40, 0.5);
  addText('Hamid Ali Baloch  *  Full Stack Developer  *  Portfolio: hamidsamad.github.io', 45, 23, 'F2', 8, 0.50, 0.50, 0.50);

  // Assemble PDF Document
  const streamBuf = Buffer.from(streamContent, 'utf-8');

  // Object 1: Catalog
  // Object 2: Pages
  // Object 3: Page
  // Object 4: Font Bold
  // Object 5: Font Regular
  // Object 6: Contents Stream

  const obj1 = '<< /Type /Catalog /Pages 2 0 R >>';
  const obj2 = '<< /Type /Pages /Kids [3 0 R] /Count 1 >>';
  const obj3 = '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>';
  const obj4 = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>';
  const obj5 = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';
  const obj6Header = `<< /Length ${streamBuf.length} >>\nstream\n`;
  const obj6Footer = '\nendstream';

  const parts = [];
  const offsets = [];

  function write(strOrBuf) {
    const buf = Buffer.isBuffer(strOrBuf) ? strOrBuf : Buffer.from(strOrBuf, 'binary');
    parts.push(buf);
  }

  write('%PDF-1.4\n');

  function writeObj(num, body) {
    const currentLength = parts.reduce((acc, p) => acc + p.length, 0);
    offsets[num] = currentLength;
    write(`${num} 0 obj\n${body}\nendobj\n`);
  }

  writeObj(1, obj1);
  writeObj(2, obj2);
  writeObj(3, obj3);
  writeObj(4, obj4);
  writeObj(5, obj5);

  // Obj 6: stream
  const currentLength = parts.reduce((acc, p) => acc + p.length, 0);
  offsets[6] = currentLength;
  write(`6 0 obj\n${obj6Header}`);
  write(streamBuf);
  write(`${obj6Footer}\nendobj\n`);

  const xrefOffset = parts.reduce((acc, p) => acc + p.length, 0);
  write('xref\n0 7\n0000000000 65535 f \n');
  for (let i = 1; i <= 6; i++) {
    const offStr = String(offsets[i]).padStart(10, '0');
    write(`${offStr} 00000 n \n`);
  }
  write(`trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`);

  const finalPdfBuffer = Buffer.concat(parts);
  const targetPath = path.resolve(__dirname, '../public/Hamid_Ali_Baloch_CV.pdf');
  fs.writeFileSync(targetPath, finalPdfBuffer);
  console.log(`Generated CV PDF successfully at: ${targetPath} (${finalPdfBuffer.length} bytes)`);
}

buildPDF();
