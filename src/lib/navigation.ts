import json from '../data/navs/mainmenu.json';

const createUrl = (slug) => (slug === 'index' ? '/' : `/${slug}/`);

const getNavItems = () => {
  const { items } = json;

  if (!items || !Array.isArray(items)) {
    throw new Error('"Items" is missing or is not an array');
  }

  return items.map(({ type, title, slug, url, new_tab }) => ({
    title,
    url: type === 'page' ? createUrl(slug) : url,
    target: new_tab ? '_blank' : '_self',
  }));
};
export const items = getNavItems();
