// import { createVuetify } from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// export default createVuetify({
//     icons: {
//         defaultSet: 'mdi',
//         aliases,
//         sets: {
//             mdi,
//         },
//     },
// })

import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

export default createVuetify({
    components,
    directives
})
