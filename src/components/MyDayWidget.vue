<template>
    <my-wrapper>
        <div class="day">
            <h2 class="title">Люди готовые в ПН</h2>
            <p class="capacity">{{ getCurrentWeight() }} / {{ maxWeight }}</p>
            <div class="characters">
                <div class="characters__container" >
                    <MyCharacter v-for="character in characters" :key="character" :character ="character" @deleteCharacter="deleteCharacter"></MyCharacter>
                </div>
                <button @click="addNewCharacter" class="add-character-btn">Добавить</button>
 
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
    data() {
        return {
            characters: [
                {"id": 0, "link": '', "weight": 1, "settings": { "avoid": [] }}
            ],
            maxWeight: 5
        }
    },
    methods: {
        addNewCharacter() {
            this.characters.push({"id": this.characters.length, "link": '', "weight": 1, "settings": { "avoid": [] }})
        },

        deleteCharacter(id) {
            this.characters.splice(id, 1)
            console.log(id)
        },

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
    
    .add-character-btn {
        width: 30%;

        border-radius: 15px;
        border: none;
        background: white;

        margin-bottom: 10px;

        &:hover {
            background: gainsboro;
        }
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
    width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
}

</style>