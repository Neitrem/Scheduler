<template>
    <div id="carouselExample" class="carousel carousel-dark slide">
        <button @click="ChangeDayOnMenu(this, 'prev')" class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <div class="carousel-inner">
            <div v-for="day in this.$store.getters.getAllDays" :key="day" class="carousel-item" :class="[day.name]">
                <MyDayWidget :currentDay="day"></MyDayWidget>
            </div>
        </div>
        <button @click="ChangeDayOnMenu(this, 'next')" class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script lang="js">

import MyDayWidget from '@/components/MyDayWidget.vue';
import { setMixin } from '@/components/mixins/SetCurrentDayOnMenu';

export default {
    mixins: [setMixin],
    components: {
        MyDayWidget
    },
    methods: {
        CreateClassName: (name) => {
            return name
        },
        ChangeDayOnMenu: (self ,type) => {
            const carousel = document.querySelector('#carouselExample')

            const carouselItems = carousel.querySelectorAll('div.carousel-item')

            for(var i = 0; i < carouselItems.length; i++) {
                if (carouselItems[i].classList.contains('active')) {
                    if(type == "next"){
                        if(i != carouselItems.length - 1) {
                            self.SetCurrentToActive(carouselItems[i + 1].classList[1])
                        } else {
                            self.SetCurrentToActive(carouselItems[0].classList[1])
                        }
                    } else {
                        if(i != 0) {
                            self.SetCurrentToActive(carouselItems[i - 1].classList[1])
                        } else {
                            self.SetCurrentToActive(carouselItems[carouselItems.length - 1].classList[1])
                        }
                    }
                }
            }

        }
    },
    mounted() {
        var myNodeList = document.querySelectorAll('div.carousel-item');

        if( myNodeList.length) { // что-то нашлось, коллекция не пустая
            var el = myNodeList[0]; // первый
            el.className += " active";
        }
    }
}
</script>

<style lang="scss">
.carousel-inner {
   
}

.carousel {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
}

.carousel-control-prev {
    position: relative !important; 
}

.carousel-control-next {
    position: relative !important;
}
</style>