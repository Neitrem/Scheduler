import { createStore } from 'vuex'

export default createStore({
    state: {
        days: [
            {
                name: "friday",
                title: "ПТ",
                characters: [
                    {"id": 0, "link": '', "weight": 1, "settings": { "avoid": [] }}
                ],
                maxWeight: 5
            },
            {
                name: "saturday_morning",
                title: "СБ утро",
                characters: [
                    {"id": 0, "link": '', "weight": 1, "settings": { "avoid": [] }}
                ],
                maxWeight: 5
            },
            {
                name: "saturday_evening",
                title: "СБ вечер",
                characters: [
                    {"id": 0, "link": '', "weight": 1, "settings": { "avoid": [] }}
                ],
                maxWeight: 5
            },
            {
                name: "sunday_morning",
                title: "ВС утро",
                characters: [
                    {"id": 0, "link": '', "weight": 1, "settings": { "avoid": [] }}
                ],
                maxWeight: 5
            },
            {
                name: "sunday_evening",
                title: "ВС вечер",
                characters: [
                    {"id": 0, "link": '', "weight": 1, "settings": { "avoid": [] }}
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
            
            state.days.find(day => day.name == data.day_name).characters.splice(data.value.id, 1, data.value)
        }
    }
  })