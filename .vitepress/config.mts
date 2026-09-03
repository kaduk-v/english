import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'English B1+',
  description: 'Персональна система вивчення англійської — граматика, словник, уроки',
  lang: 'uk-UA',
  base: '/english/',
  cleanUrls: true,
  srcExclude: ['README.md'],

  head: [['link', { rel: 'icon', href: '/english/favicon.svg' }]],

  themeConfig: {
    nav: [
      { text: 'Головна', link: '/' },
      { text: 'Граматика', link: '/grammar/_index' },
      { text: 'Словник', link: '/vocabulary/_index' },
      { text: 'Уроки', link: '/lessons/00-diagnostic' },
      {
        text: 'Довідники',
        items: [
          { text: 'План навчання', link: '/plan' },
          { text: 'Прогрес', link: '/progress' },
          { text: 'Правила (чек-лист)', link: '/rules' },
          { text: 'Помилки (НЕ ЗАБУТИ)', link: '/mistakes' },
        ],
      },
    ],

    sidebar: {
      '/grammar/': [
        { text: 'Покажчик', link: '/grammar/_index' },
        {
          text: 'A1–A2',
          collapsed: false,
          items: [
            { text: 'Дієслово to be', link: '/grammar/a1-a2/to-be' },
            { text: 'Займенники', link: '/grammar/a1-a2/pronouns' },
            { text: 'Артиклі', link: '/grammar/a1-a2/articles' },
            { text: 'Іменники: множина й злічуваність', link: '/grammar/a1-a2/nouns-plural-countable' },
            { text: 'Present Simple', link: '/grammar/a1-a2/present-simple' },
            { text: 'have / have got', link: '/grammar/a1-a2/have-have-got' },
            { text: 'Present Continuous', link: '/grammar/a1-a2/present-continuous' },
            { text: 'Past Simple', link: '/grammar/a1-a2/past-simple' },
            { text: 'Модальні дієслова', link: '/grammar/a1-a2/modal-verbs' },
            { text: 'Наказовий спосіб', link: '/grammar/a1-a2/imperatives' },
          ],
        },
        {
          text: 'B1',
          collapsed: false,
          items: [
            { text: 'Прикметники та прислівники', link: '/grammar/b1/adjectives-adverbs' },
          ],
        },
        {
          text: 'B1+',
          collapsed: true,
          items: [{ text: 'Теми попереду', link: '/grammar/b1-plus/_planned' }],
        },
        {
          text: 'B2',
          collapsed: true,
          items: [{ text: 'Теми попереду', link: '/grammar/b2/_planned' }],
        },
      ],

      '/vocabulary/': [
        { text: 'Покажчик (усі слова, 341)', link: '/vocabulary/_index' },
        {
          text: 'За літерами',
          collapsed: false,
          items: [
            ['a', 35], ['b', 13], ['c', 33], ['d', 21], ['e', 30], ['f', 14],
            ['g', 10], ['h', 8], ['i', 13], ['j', 1], ['l', 8], ['m', 10],
            ['n', 9], ['o', 14], ['p', 21], ['q', 2], ['r', 21], ['s', 39],
            ['t', 15], ['u', 9], ['v', 3], ['w', 12],
          ].map(([l, count]) => ({
            text: `${String(l).toUpperCase()}<span class="vc-badge">${count}</span>`,
            link: `/vocabulary/${l}`,
          })),
        },
      ],

      '/lessons/': [
        {
          text: 'Уроки',
          collapsed: false,
          items: [
            { text: '0 — Діагностика', link: '/lessons/00-diagnostic' },
            { text: '0b — Діагностика 2.0', link: '/lessons/00b-diagnostic-2' },
            { text: '1 — to be', link: '/lessons/01-to-be' },
            { text: '2 — Займенники', link: '/lessons/02-pronouns' },
            { text: '3 — Артиклі', link: '/lessons/03-articles' },
            { text: '4 — Множина / countable', link: '/lessons/04-nouns-plural-countable' },
            { text: '5 — Present Simple: -s, do/does', link: '/lessons/05-present-simple-3rd-person' },
            { text: '6 — Present Simple: питання', link: '/lessons/06-present-simple-questions' },
            { text: '7 — have / have got', link: '/lessons/07-have-have-got' },
            { text: '8 — Present Continuous', link: '/lessons/08-present-continuous' },
            { text: '9 — PS vs PC', link: '/lessons/09-present-simple-vs-continuous' },
            { text: '10 — can + imperatives', link: '/lessons/10-can-imperatives' },
            { text: '11 — Прикметники і прислівники', link: '/lessons/11-adjectives-adverbs' },
          ],
        },
      ],
    },

    search: { provider: 'local' },

    socialLinks: [{ icon: 'github', link: 'https://github.com/kaduk-v/english' }],

    outline: { level: [2, 3], label: 'На цій сторінці' },

    docFooter: { prev: 'Попередня', next: 'Наступна' },

    returnToTopLabel: 'Нагору',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchLabel: 'Тема',
    lastUpdated: { text: 'Оновлено' },
  },
})
