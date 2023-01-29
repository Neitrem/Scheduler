<template>
    <div class="page">
		<MyDayWidget></MyDayWidget>
    </div>
</template>

<script>

import MyDayWidget from '@/components/MyDayWidget.vue';

export default  {
	name: "App",
	components: {MyDayWidget}
}
</script>

<style>
p {
    margin: 0;
}

.page {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}

input, input::selection {
	outline: none;
	border: none;
}

</style>
 