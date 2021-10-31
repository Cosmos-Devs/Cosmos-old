import toReact from 'svelte-adapter/react';
import blocks from "./blocks";

export default function (CMS) {
    Object.keys(blocks).forEach(name => {
        const { control } = blocks[name];
        const ReactElement = toReact(control, {}, 'div');

        CMS.registerWidget(
            name,
            (editor) => {
                return ReactElement({ CMS, editor })
            }
        );
    })
}
