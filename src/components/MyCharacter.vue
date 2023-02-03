<template>
    <div class="character">
        <div class="character__line">
            <div class="link inline clickable">
                <input v-model="character.link" type="text" placeholder="Ссылка на человека">
            </div>
            <button class="settings inline clickable"><i class="bi bi-three-dots-vertical"></i></button>
            <i @click="deleteThis" class="bi bi-trash inline delete"></i>            
            <div class="weight inline clickable">
                <select class="select" v-model="character.weight">
                    <option  v-for="option in weightList.options" v-bind:value="option" v-bind:key="option">
                        {{ option }}
                    </option>
                </select>
            </div>
        </div>
    </div>
    
</template>

<script scoped lang="js">
export default {
    props: {
        character: Object
    },
    data() {
        return {
            weightList: {
                options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            }
        }
    },
    methods: {
        deleteThis() {
            this.$emit("deleteCharacter", this.character.id)
        }
    },
    // watch: {
    //     character: {
    //         handler(newValue, oldValue) {
    //             console.log(this.$store.getters.getDayByName('friday').characters[0].link)
    //         },
    //         deep: true
    //     }
    // }
    
}
</script>

<style lang="scss">
.character {
    width: 100%;
    margin-bottom: 10px;

    &__line {
        background: white;
        border-radius: 15px;
        display: flex;

        flex-direction: row;
        justify-content: space-between;

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

        button.settings {

            padding: 0 10px;

            outline: none;
            border: none;

            background: white;

            &:hover {
                background: gainsboro;
            }
        }

        input {
            border-radius: 15px;
            width: 100%;

            &:hover {
                background: gainsboro;
            }
        }

        .link {
            padding-left: 20px;
            width: 60%

            
        }

        .inline {
            display: inline;
            border-radius: 15px;

        }
        .clickable:hover {
            background: gainsboro;
        }
        .delete {
            
            &:hover {
                color: brown;
            }
        }
    }
}


</style>