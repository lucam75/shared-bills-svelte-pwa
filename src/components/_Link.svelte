<script>
    import { Link } from "svelte-routing";

    export let css = '';
    export let to = '';
    export let label = ''
</script>

<Link getProps={() => {return {class: css}}} to={to}>{label}</Link>