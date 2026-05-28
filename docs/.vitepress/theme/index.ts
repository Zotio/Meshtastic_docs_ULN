import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import { Tab, Tabs } from "vue3-tabs-component";
import "@red-asuka/vitepress-plugin-tabs/dist/style.css";

export default {
  extends: DefaultTheme, // Наследуем стандартный дизайн VitePress
  enhanceApp({ app }) {
    // Регистрируем компоненты для работы вкладок
    app.component("Tab", Tab);
    app.component("Tabs", (props, ctx) =>
      h(
        Tabs,
        { navClass: "tabs-component-tabs vp-raw", ...ctx.attrs, ...props },
        ctx.slots,
      ),
    );
  },
};
