module.exports = {
    title: "Him and Her",
    locales: {
        '/': {
            lang: 'fr-FR',
            title: 'Him and Her',
            description: 'Vuepress with Netlify Deploy Button'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'canonical', href: 'https://himandher.netlify.com' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ['meta', { name: 'Apple-mobile-web-app-capable', content: 'no' }]
    ],
    serviceWorker: true,
    themeConfig: {
        docsDir: 'docs',
        repo: 'stephendltg/vuepress',
        serviceWorker: {
          updatePopup: true // Boolean | Object, default to undefined.
          // If set to true, the default text config will be: 
          // updatePopup: { 
          //    message: "New content is available.", 
          //    buttonText: "Refresh" 
          // }
        },
        nav: [{
                text: 'Start',
                link: '/docs/',
            },
            {
                text: 'Admin',
                link: '/admin',
            },
            {
                text: 'NetlifyCMS Config Help',
                link: '/docs/netlifycms-configuration.html',
            }
        ]

    }
}
