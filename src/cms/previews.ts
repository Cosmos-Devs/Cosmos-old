import toReact from 'svelte-adapter/react';
import { SvelteComponent } from 'svelte';

interface PreviewInterface {
  name: string;
  component: new (arg: any) => SvelteComponent;
}

export default function (items: PreviewInterface[], CMS) {
  items.forEach(({ name, component }) => {
    const ReactElement = toReact(component, {}, 'div');

    CMS.registerPreviewTemplate(name, (prvObj) => {
      const content = prvObj?.entry?.getIn(['data'])?.toJS();
      return ReactElement({ content });
    });
  });
}
