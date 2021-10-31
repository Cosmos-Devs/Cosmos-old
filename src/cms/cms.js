import CMS from 'netlify-cms-app';
import initPreviews from '../lib/previews';
import initBlocks from '../lib/blocks';
import Page from '../templates/page.svelte';

export default function (styling) {
  CMS.init();

  initBlocks(CMS);

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
