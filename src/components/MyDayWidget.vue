<template>
    <my-wrapper class="wrapper">
        <div class="day">
            <h2 class="title">Люди готовые в {{ currentDay.title }}</h2>
            <!-- <p class="capacity">{{ getCurrentWeight() }} / {{ maxWeight }}</p> -->
            <div class="characters">
                <div class="characters__container" >
                    <MyCharacter 
                        v-for="character in this.$store.getters.getCharacters(currentDay.name)" 
                        :key="character" 
                        :character ="character"
                        :currentDay = "currentDay"
                        @deleteCharacter="deleteCharacter" 
                    >
                    </MyCharacter>
                </div>
                <button @click="this.$store.commit('addNewCharacter', currentDay.name)" class="add-character-btn">Добавить</button>
 
            </div>
        </div>
    </my-wrapper>
    
</template>

<script>
import MyCharacter from '@/components/MyCharacter.vue'

export default {
    
    components: {
        MyCharacter
    },
    props: {
        currentDay: Object
    },
    methods: {
        deleteCharacter(character_id) {
            this.$store.commit('deleteCharacter', {character_id: character_id, day_name: this.currentDay.name})
        },
        // updateCharacter(newValue) {
        //     if(isProxy(newValue))
        //     {
        //         const rawValue = toRaw(newValue)
        //         this.$store.commit('updateCharater', {"value": rawValue, "day_name": this.currentDay.name})
        //     }
        // },
        getCurrentWeight() {
            var weight = 0
            this.characters.forEach(el =>  weight += el.weight)
            return weight
        }
    }
 
  
} 
</script>

<style scoped lang="scss">

.characters {
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: hsl(0 0% 50%);

    min-height: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 20px;

    &__container {
        margin-bottom: 20px;
        width: 100%
    }
    
    
}

.title {
    text-align: center;
    margin-bottom: 10px;
    color: white;
}

.capacity {
    text-align: center;
    margin-bottom: 20px;
}


.day {
    width: 100%;
    margin: 0 auto;

    height: 300px;
    display: inline-flex;
    flex-direction: column;
}


.wrapper {
    width: 380px;
    margin: 0 auto;
}

::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 15px;
  background-color: #F5F5F5;
}

::-webkit-scrollbar
{
  width: 12px;
  border-radius: 15px;
  background-color: #F5F5F5;
}
::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #555;
}

</style>