export const setMixin = {
    methods: {
        SetCurrentToActive: (name) => {
            var daysMenu = document.querySelector('div.days-menu')

            var days = daysMenu.querySelectorAll('div.day')

            days.forEach(day => {
                var dayTitle = day.querySelector('p.title')

                var dayClassList = day.classList


                var titleClassList = dayTitle.classList

                titleClassList.remove('active')

                if(dayClassList.contains(name)) {
                    console.log(dayTitle)
                    titleClassList.add('active')
                }
            })
        }
    }
}