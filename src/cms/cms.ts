import CMS from 'netlify-cms-app'

// import Page from './previews/page'

CMS.init();
// CMS.registerPreviewTemplate("pages", Page);

// init styles
const links = document.querySelectorAll('[rel="stylesheet"]') as NodeListOf<HTMLAnchorElement>
links.forEach(link => CMS.registerPreviewStyle(link.href))
