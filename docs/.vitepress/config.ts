import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/Meshtastic_docs_ULN/",
  lang: "ru-RU",
  title: "Meshtastic Ульяновск",
  description: "Vite & Vue powered static site generator.",

  themeConfig: {
    nav: [
      { text: "Главная", link: "/example" },
      { text: "Гайд", link: "/guide/guide" },
      { text: "неГлавная", link: "/example" },
      { text: "Сообщество", link: "/community" },
      { text: "Вопросы", link: "/other/troubleshooting" },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: "Example", link: "/example" },
          // ...
        ],
      },
      {
        text: "Новичку",
        items: [
          { text: "Что такое Meshtastic", link: "/guide/whoismrmeshtastic" },
          { text: "Как выбрать ноду", link: "/example" },
          { text: "Пример", link: "/example" },
          { text: "Настройка", link: "/example" },
          { text: "Пример", link: "/example" },
          { text: "Словарь", link: "/other/glossary" },
          { text: "Вопросы", link: "/other/troubleshooting" },
        ],
      },
    ],
  },
});
