import { reactive } from "vue";

export default function () {
  const state = reactive({
    pack: "",
  });

  return {
    pack: state.pack,
  };
}
