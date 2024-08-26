import { reactive } from "vue";

export function useLayout() {
  const layout = reactive({
    header: {
      height: "",
    },
    leftDrawer: {
      isVisible: true,
      width: "",
    },
  });
  return { layout };
}
