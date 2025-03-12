const fs = require('fs');
const path = require('path');


const tree = require('./tree.json');

function createComponent(name, parentPath) {
  const componentPath = path.join(parentPath, name);

 
  if (!fs.existsSync(componentPath)) {
    fs.mkdirSync(componentPath, { recursive: true });
  }

  const componentContent = `
import React from 'react';

const ${name} = () => {
  return (
    <div>
      <h2>${name} Page</h2>
    </div>
  );
};

export default ${name};
  `;
  

  fs.writeFileSync(path.join(componentPath, `${name}.jsx`), componentContent);
  console.log(`Component ${name} created at ${componentPath}`);
}


function createFilesFromTree(tree, parentPath = './src') {
  Object.keys(tree).forEach(section => {
    const sectionPath = path.join(parentPath, section);

 
    if (!fs.existsSync(sectionPath)) {
      fs.mkdirSync(sectionPath);
    }


    if (Array.isArray(tree[section])) {
      tree[section].forEach(item => {
        createComponent(item, sectionPath); 
      });
    } else if (typeof tree[section] === 'object') {
      Object.keys(tree[section]).forEach(subSection => {
        createFilesFromTree(tree[section], sectionPath);
      });
    }
  });
}


createFilesFromTree(tree);

