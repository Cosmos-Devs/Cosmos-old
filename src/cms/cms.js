import CMS from 'netlify-cms-app';
import initPreviews from './previews';
import Page from '../templates/page.svelte';

const init = () => {
  CMS.init();

  initPreviews(
    [
      {
        name: 'pages',
        component: Page,
      },
    ],
    CMS
  );

  const links = document.querySelectorAll('[rel="stylesheet"]');
  links.forEach(({ href }) => CMS.registerPreviewStyle(href));
};
export default init();
