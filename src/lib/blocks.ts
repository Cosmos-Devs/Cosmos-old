import toReact from 'svelte-adapter/react';
import blocks from "../cms/blocks";
import Wrapper from "./blockWrapper.svelte"
import { SvelteComponent } from 'svelte';


export default function (CMS) {
    Object.keys(blocks).forEach(name => {
        const { control } = blocks[name];
        const ReactElement = toReact(Wrapper as any, {}, 'div');

        CMS.registerWidget(
            name,
            (editor) => ReactElement({ 
                CMS,
                editor,
                component: control,
             })
        );
    })
}
