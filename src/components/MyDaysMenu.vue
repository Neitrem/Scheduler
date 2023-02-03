<template>
    <my-wrapper class="days-container">
        <h2 class="header">Дни</h2>
        <div class="days-menu">
            <div v-for="day in this.$store.getters.getAllDays" :key="day" class="day" :class="[day.name]">
                <p @click="ChangeDayWidget(day.name); SetCurrentToActive(day.name)" class="title inline" >{{ day.title }}</p>
                <select class="select inline" v-model="day.maxWeight">
                    <option class="option" v-for="option in spaceList.options" v-bind:value="option" v-bind:key="option">
                        {{ option }}
                    </option>
                </select>
                
            </div>
            
        </div>
    </my-wrapper>
</template>

<script lang="js">

import { setMixin } from './mixins/SetCurrentDayOnMenu'

export default {
    mixins: [setMixin],
    data() {
        return {
            spaceList: {
                options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            },
            optionClass: ''
        }
    },
    methods: {
        ChangeDayWidget: (name) => {
            var myCarousel = document.querySelector('#carouselExample')
            var myDayWidgets = myCarousel.querySelectorAll('div.carousel-item')

            myDayWidgets.forEach(widget => {
                var classList = widget.classList
                classList.remove('active')
                if(classList.contains(name)) {
                    classList.add('active')
                }
            })
            //console.log(myDayWidgets)
        },
        // printWeight() {
        //     console.log(this.store.getters.getDayByName('friday').maxWeight)
        // }
        
    },
    mounted() {

        var daysMenu = document.querySelector('div.days-menu')

        daysMenu.querySelector('div.day.friday').querySelector('p.title').classList.add('active')

        
    }
}
</script>

<style scoped lang="scss">

    .header {
        color: white;
        text-align: center;
    }
    .days-container {
        height: 330px;

        display: flex;

        flex-direction: column;

        justify-content: space-between;
    }
    .day {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-bottom: 10px;

        .select {
            border:none;
            border-radius: 15px;
            padding-right: 10px;
            padding-left: 10px;
            height: 100%;

            &:hover {
                background: gainsboro;
            }

            &:focus {
                box-shadow: none !important;
                border: none !important;
                outline: none !important;
                background: gainsboro;
            }
        }
    }
    .inline {
        display: inline;
        border-radius: 15px;

    }

    .title {
        width: 60%;
        margin-right: 20px;
        padding: 0 4px;

    }

    .active {
        color: white;
    }
</style>