import { createStore } from 'vuex'

export default createStore({
    state: {
        days: [
            {
                name: "friday",
                title: "ПТ",
                characters: [
                    {"id": 0, "link": '', "weight": 1, "settings": { "avoid": [{"id": 0, "link": ''}] }}
                ],
                maxWeight: 5
            },
            {
                name: "saturday",
                title: "СБ",
                characters: [
                    {"id": 0, "link": '', "weight": 1, "settings": { "avoid": [{"id": 0, "link": ''}] }}
                ],
                maxWeight: 5
            },
            {
                name: "sunday",
                title: "ВС",
                characters: [
                    {"id": 0, "link": '', "weight": 1, "settings": { "avoid": [{"id": 0, "link": ''}] }}
                ],
                maxWeight: 5
            },
            
        ]
    },
    getters: {
        getDayByName: (state) => (name) => {
            return state.days.find(day => day.name == name)
        },
        getAllDays: (state) => {
            return state.days
        },
        getNewId: (state) => (day_name) => {
            return state.days.find(day => day.name == day_name).characters.length
        },
        getCharacters: (state) => (day_name) => {
            //console.log(day_name)
            return state.days.find(day => day.name == day_name).characters
        },
        getCharacter: (state) => (day_name, character_id) => {
            return state.days.find(day => day.name == day_name).characters.find(character => character.id == character_id)
        }
    },
    mutations: {
        deleteCharacter(state, data) {
            state.days.find(day => day.name == data.day_name).characters.splice(data.character_id, 1)

            var id = 0;    

            state.days.find(day => day.name == data.day_name).characters.forEach(el => {el.id = id; id++})

          
        },
        addNewCharacter(state, day_name) {
            //console.log(day_name)
            state.days.find(day => day.name == day_name).characters.push({
                "id": this.getters.getNewId(day_name), 
                "link": '', 
                "weight": 1, 
                "settings": { "avoid": [] }
            })
        },
        updateCharater(state, data) {
            state.days.find(day => day.name == data.day_name).characters.splice(data.character.id, 1, data.character)
        },

    },
    actions: {
        compare(state) {
            for(day in state.days) {

            }
        }
    }
  })