<template>
    <div class="character">
        <div class="character__line">
            <div class="link inline clickable">
                <input v-model="character.link" type="text" placeholder="Ссылка на человека">
            </div>
            <button @click="settingsToggle" class="settings inline clickable">
                <svg style="height: 30px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
            </button>
            <svg @click="deleteThis" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3 inline delete" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg>
            <div class="weight inline clickable">
                <select class="select" v-model="character.weight">
                    <option  v-for="option in weightList.options" v-bind:value="option" v-bind:key="option">
                        {{ option }}
                    </option>
                </select>
            </div>
        </div>
    </div>
    <div v-show="settingsIsShow" class="settingPanel">
        <div class="characters__container">
            <div class="characters-to-avoid"
                v-for="characters_to_avoid in character.settings.avoid"
                :key="characters_to_avoid"
            >
            <input v-model="characters_to_avoid.link" type="text" placeholder="Ссылка на человека">
            <svg @click="deleteThisAvoid(characters_to_avoid.id)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3 inline delete" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg>
            </div>
            <button @click="addAvoidCharacter" class="add-character-btn">Добавить</button>
        </div>
    </div>
    
</template>

<script  lang="js">
export default {
    emits: ["deleteCharacter"],
    props: {
        character: Object,
        currentDay: Object
    },
    data() {
        return {
            weightList: {
                options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            },
            settingsIsShow: false
        }
    },
    methods: {
        deleteThis() {
            this.$emit("deleteCharacter", this.character.id)
        },
        deleteThisAvoid(avoid_id) {
            this.character.settings.avoid.splice(avoid_id, 1)
            this.$store.commit('updateCharater', { day_name: this.currentDay.name, character: this.character })
        },
        settingsToggle() {
            this.settingsIsShow = !this.settingsIsShow;
        },
        addAvoidCharacter() {
            this.character.settings.avoid.push({"id": this.character.settings.avoid.length, "link": ''})
            this.$store.commit('updateCharater', { day_name: this.currentDay.name, character: this.character })
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

<style scoped lang="scss">

.characters__container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.characters-to-avoid {
    display: flex;
    width: 100%;
    margin-bottom: 5px;
    input {
        width: 100%;
    }
}

.settingPanel {
    position: sticky;
}
.add-character-btn {
    width: 200px;

    border: none;

    border-radius: 15px;
}

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
        
    }
}
.delete {
            
            margin: auto 0;

            &:hover {
                color: brown;
            }
        }


</style>