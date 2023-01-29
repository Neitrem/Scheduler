<template>
  	<div class="wrapper">
		<slot>

		</slot>
	</div>
</template>

<script>
export default {
  	name: 'my-wrapper'
}
</script>

<style scoped>
.wrapper {
	border-radius: 15px;
	background: gray;
	padding: 15px;

	width: fit-content;
}

</style>