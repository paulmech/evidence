<script context="module">
	import WithScopedInputStore from '../../../storybook-helpers/WithScopedInputStore.svelte';
	/** @type {import("@storybook/svelte").Meta}*/
	export const meta = {
		title: 'Atoms/inputs/Slider',
		argTypes: {},
		args: {
			title: 'Slider title',
			name: 'Slider name',
			defaultValue: 0,
			min: 0,
			max: 100,
			step: 1
		},
		decorators: [() => WithScopedInputStore]
	};
</script>

<script>
	import { Template, Story } from '@storybook/addon-svelte-csf';
	import Slider from './Slider.svelte';
</script>

<Template let:args>
	<Slider {...args} />
</Template>

<Story name="Default" />
<Story
	name="Slider with Steps with default value"
	args={{ name: 'Months', title: 'Months', min: 0, max: 36, step: 12, defaultValue: 12 }}
/>
<Story
	name="Hide max and min"
	args={{ name: 'Months', title: 'Months', min: 0, max: 36, step: 12, showMaxMin: false }}
/>
<Story
	name="medium size"
	args={{
		name: 'Months',
		title: 'Months Medium',
		min: 0,
		max: 36,
		step: 12,
		showMaxMin: true,
		size: 'medium'
	}}
/>
<Story
	name="large size"
	args={{
		name: 'Months',
		title: 'Months Large',
		min: 0,
		max: 36,
		step: 12,
		showMaxMin: true,
		size: 'large'
	}}
/>

<Story
	name="large size"
	args={{
		name: 'Months',
		title: 'Months Full',
		min: 0,
		max: 36,
		step: 12,
		showMaxMin: true,
		size: 'full'
	}}
/>

<Story
	name="Negative"
	args={{
		name: 'Months',
		title: 'Negative values',
		min: -1000,
		max: -100,
		defaultValue: -500,
		step: 1,
		showMaxMin: true,
		size: 'full'
	}}
/>
<Story
	name="With USD Format"
	args={{
		name: 'United State Dollar',
		title: 'With USD Format',
		step: 1,
		showMaxMin: true,
		fmt: 'usd'
	}}
/>
<Story
	name="With empty Format"
	args={{
		name: 'empty fmt',
		title: 'With empty Format',
		step: 1,
		showMaxMin: true,
		fmt: ''
	}}
/>
<Story
	name="With random numbers Format"
	args={{
		name: 'random numbers fmt',
		title: 'With random numbers Format',
		step: 1,
		showMaxMin: true,
		fmt: '932'
	}}
/>
