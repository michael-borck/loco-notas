import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://loconotas.org',
  integrations: [
    starlight({
      title: 'LocoNotas',
      description: 'Field notes from the floor: reading notes, experiments, and observations from LocoLabo.',
      favicon: '/favicon.svg',
      disable404Route: true,
      logo: {
        alt: 'LocoNotas',
        src: './src/assets/notas.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'external', label: 'Home', href: 'https://loconotas.org' },
        { icon: 'external', label: 'LocoLabo', href: 'https://locolabo.org' },
        { icon: 'external', label: 'LocoFósil', href: 'https://locofosil.org' },
        { icon: 'external', label: 'Research', href: 'https://research.borck.dev' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/michael-borck/loco-notas' },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Notebook',
          items: [
            { label: 'All notes', slug: 'notes' },
            { label: 'Reading', slug: 'reading' },
            { label: 'About', slug: 'about' },
          ],
        },
        {
          label: 'LocoLabo Projects',
          items: [
            { label: 'All Projects', link: 'https://locolabo.org/projects/' },
            { label: 'LocoLabo', link: 'https://locolabo.org' },
            { label: 'LocoLLM', link: 'https://locollm.org' },
            { label: 'LocoBanco', link: 'https://locobanco.org' },
            { label: 'LocoBench Picker', link: 'https://picker.locobanco.org' },
            { label: 'LocoFósil', link: 'https://locofosil.org' },
            { label: 'LocoMusa', link: 'https://locomusa.org' },
            { label: 'LocoConvoy', link: 'https://lococonvoy.org' },
            { label: 'LocoAgente', link: 'https://locoagente.org' },
            { label: 'LocoPuente', link: 'https://locopuente.org' },
            { label: 'LocoEnsayo', link: 'https://locoensayo.org' },
            { label: 'LocoBase', link: 'https://github.com/michael-borck/loco-base' },
          ],
        },
      ],
    }),
  ],
});
