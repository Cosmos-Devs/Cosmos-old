import CMS from 'netlify-cms-app';
import initPreviews from '../lib/previews';
import Page from '../templates/page.svelte';
import blocks from "./blocks";

export default function (styling) {
  CMS.init();


  console.log('blocks',blocks)
  // CMS.registerWidget(
  //   'test',
  //   (e) => console.log('control',e));

  // initWidgets(
  //   [Banner],
  //   CMS
  // );

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
