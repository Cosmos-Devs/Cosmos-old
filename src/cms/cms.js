import CMS from 'netlify-cms-app';
import initPreviews from './previews';
import Page from '../templates/page.svelte';

const Init = () => {
  CMS.init();

  // init previews
  initPreviews(
    [
      {
        name: 'pages',
        component: Page,
      },
    ],
    CMS
  );

  // init styles
  const links = document.querySelectorAll('[rel="stylesheet"]');
  links.forEach((link) => CMS.registerPreviewStyle(link.href));
};
export default Init();
