import {createApp, h} from 'vue'
import  {createInertiaApp} from '@inertiajs/vue3'

createInertiaApp({
    // This tells Inertia to look for your pages inside resources/js/Pages
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = pages[`./Pages/${name}.vue`]
    return page.default
  },
    setup({el, App, props, plugin}){
        createApp({render: () => h(App, props)})
        .use(plugin)
        .mount(el)
    },
})
