#!/usr/bin/env node

// Simple build script for portfolio deployment
import { execSync } from 'child_process';
import { mkdirSync, existsSync } from 'fs';

try {
  console.log('Starting simple build...');
  
  // Create dist directory
  if (!existsSync('dist')) {
    mkdirSync('dist', { recursive: true });
  }
  
  // Build only the frontend (skip server for static deployment)
  console.log('Building frontend...');
  execSync('npx vite build --outDir dist/public', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
  console.log('Files ready for deployment in dist/public/');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}