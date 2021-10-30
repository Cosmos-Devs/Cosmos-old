import CMS from 'netlify-cms-app';
import initPreviews from './previews';
import Page from '$/templates/page.svelte';

export default function (styling) {
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

  CMS.registerPreviewStyle(styling);
}
