import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Void Cascade Guide",
  description: "A Void Cascade Guide",
  themeConfig: {
    logo: '/images/logo.png',
    search: {
      provider: 'local',
      options: {detailedView: true},
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Mission', link: '/information/welcome' },
      { text: 'Tactics', link: '/tactics/welcome'},
      { text: 'Builds', link: '/builds/welcome' },
      {
        text: 'Misc',
        items: [
          { text: 'Bugs', link: '/miscellanous/bugs'},
          { text: 'Calculators', link: '/miscellanous/calculator'},
          { text: 'Community', link:'/miscellanous/community'},
        ]
      }
    ],

    sidebar: {
      '/information/': [
        {
          text: 'Basics',
          items: [
            { text: 'Welcome', link: '/information/welcome'},
            { text: 'Priorities', link: '/information/priority'},
            { text: 'General Information', link: '/information/generalInfo'},
            {
              text: 'Thrax Killing', link: '/information/generalThrax' ,
              collapsed: true,
              items: [
                { text: 'General Thrax Killing Tips', link: '/information/generalThrax'},
                { text: 'Optimised Thrax Killing Tips', link: '/information/optThrax'},
                { text: 'Recommended Amps', link: '/information/amps'},
                { text: 'Operator Arcanes', link: '/information/arcOpt'},
              ]
            },
            { text: 'Trash Killing', link: '/information/trashKill'},
            { text: 'Warframe Recommendations for Level Cap', link: '/information/wfReco'},
            { text: 'Exolizers Spawn Rooms', link: '/information/spawnRooms'}
          ]
        },
        {
          text: 'See also',
          items: [
            {
              text: 'Builds', link: '/builds/welcome'
            },
            {
              text: 'Miscellaneous',
              collapsed: true,
              items: [
                { text: 'Bugs', link: '/miscellanous/bugs'},
                { text: 'Calculators', link: '/miscellanous/calculator'},
                { text: 'Community', link:'/miscellanous/community'},
              ]
            }
          ]
        }
      ],
      '/tactics/': [
        {
          text: 'Tactics',
          items: [
            { text: 'Welcome', link: '/tactics/welcome'},
            {
              text: 'Teamwork Tactics', link: '/tactics/welcome' ,
              collapsed: true,
              items: [
                { text: 'Suggested Team Comps', link: '/tactics/suggestedComps'},
                { text: 'Tips for Attackers', link: '/tactics/tipsAtk'},
                { text: 'Tips for Defenders', link: '/tactics/tipsDef'},
                { text: 'Tips for Everyone', link: '/tactics/tipsAll'},
              ]
            },
            { text: 'Solo Tactics', link: '/tactics/soloTac'},
            { text: 'Void Cascade as A Fissure', link: '/tactics/fissure'},
          ]
        },
        {
          text: 'See also',
          items: [
            {
              text: 'Basics', link: '/information/welcome'
            },
            {
              text: 'Miscellaneous',
              collapsed: true,
              items: [
                { text: 'Bugs', link: '/miscellanous/bugs'},
                { text: 'Calculators', link: '/miscellanous/calculator'},
                { text: 'Community', link:'/miscellanous/community'},
              ]
            }
          ]
        }
      ],
      'builds/': [
        {
          text: 'Builds',
          items: [
            { text: 'Welcome', link: '/builds/welcome'},
            { text: 'Loadout', link: '/builds/loadout'},
            
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jakmup/Void-Cascade-Guide' }
    ]
  }
})