<script context="module">
	/** @type {import("@storybook/svelte").Meta}*/
	export const meta = { title: 'Charts/USMap', decorators: [() => WithScopedInputStore] };
</script>

<script>
	import { Story } from '@storybook/addon-svelte-csf';
	import USMap from './USMap.svelte';
	import { Query } from '@evidence-dev/sdk/usql';
	import { query } from '@evidence-dev/universal-sql/client-duckdb';
	import WithScopedInputStore from '../../../storybook-helpers/WithScopedInputStore.svelte';
</script>

<Story name="Basic Usage">
	{@const data = Query.create(`SELECT * from state_sales`, query)}
	<USMap {data} state="state" value="sales" />
</Story>
