import ExampleView from "../components/blocks/example/view.svelte"
import ExampleControl from "../components/blocks/example/control.svelte"
import BlockquoteView from "../components/blocks/blockquote/view.svelte"
import BlockquoteControl from "../components/blocks/blockquote/control.svelte"

export default {
    example: {
        view: ExampleView,
        control: ExampleControl
    },
    blockquote: {
        view: BlockquoteView,
        control: BlockquoteControl
    }
}