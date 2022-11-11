<template>
  <div v-for="entity in architecture.entities" :key="entity.name">
    <EntitySimple v-bind="entity" />
  </div>
</template>
<script>
import { defineComponent } from "vue";

import { useArchStore } from "@/stores/architecture";
import EntitySimple from "@/components/EntitySimple.vue";

export default defineComponent({
  name: "AnalysisView",
  components: { EntitySimple },
  setup() {
    const architecture = useArchStore();
    window.stores = { architecture };
    return {
      architecture,
    };
  },
});
</script>
<style scoped></style>
