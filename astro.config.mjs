import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { loco } from '@locolabo/theme';

export default defineConfig({
  site: 'https://loconotas.org',
  integrations: [
    starlight(
      loco({
        project: 'loco-notas',
        title: 'LocoNotas',
        description: 'Field notes from the floor: reading notes, experiments, and observations from LocoLabo.',
        home: 'https://loconotas.org',
        github: 'loco-notas',
        accent: { low: '#2a1f12', main: '#d9a441', high: '#f3d9a4' },
        favicon: '/favicon.svg',
        logo: {
          alt: 'LocoNotas',
          src: './src/assets/notas.svg',
          replacesTitle: false,
        },
        customCss: ['./src/styles/custom.css'],
        social: [
          { icon: 'external', label: 'LocoFósil', href: 'https://locofosil.org' },
          { icon: 'external', label: 'Research', href: 'https://research.borck.dev' },
        ],
        sidebar: [
          {
            label: 'Notebook',
            items: [
              { label: 'All notes', slug: 'notes' },
              { label: 'Reading', slug: 'reading' },
              { label: 'About', slug: 'about' },
            ],
          },
        ],
      })
    ),
  ],
});
