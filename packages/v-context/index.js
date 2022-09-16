import ContextMenu from "./v-context.vue";
ContextMenu.install = (Vue) => {
  Vue.component(ContextMenu.name, ContextMenu);
};
export default ContextMenu;
