<template>
    

				<div class="page">
					<div class="day-widget">
						<MyCarousel></MyCarousel>
					</div>
					<div class="days-menu">
						<MyDaysMenu></MyDaysMenu>
					</div>
					<div class="compare-button">
						<MyCompareButton></MyCompareButton>
					</div>
				</div>


</template>

<script>

import MyCarousel from '@/components/MyCarousel.vue';
import MyDaysMenu from '@/components/MyDaysMenu.vue';
import MyCompareButton from '@/components/MyCompareButton.vue';

export default  {
	name: "App",
	components: {MyCarousel, MyDaysMenu, MyCompareButton}
}
</script>

<style lang="scss">
p {
    margin: 0;
}

.page {
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	align-items: center;
	position: absolute;
	top: 0;
  	left: 0;
 	height: 100%;
  	width: 100%;
}

.day-widget {
	width: 520px
}

input, input::selection {
	outline: none;
	border: none;
}

.add-character-btn {
        width: 30%;

        border-radius: 15px;
        border: none;
        background: white;

        margin-bottom: 10px;

        &:hover {
            background: gainsboro;
        }
        &:focus {
			box-shadow: none !important;
			border: none !important;
			outline: none !important;
        }
    }


</style>
 