<template>
  <c-box class="is-bg-gray-1 no-gap is-fill-height" align="stretch">
    <c-box-item class="is-bg-gray-0 drop-shadow" narrow>
      <c-sidebar />
    </c-box-item>
    <c-box-item flex>
      <c-header />
      <c-container>
        <router-view></router-view>
      </c-container>
    </c-box-item>
  </c-box>
</template>

<script>
import Sidebar from './sidebar.vue'
import Header from './header.vue'
export default {
  components: {
    'c-sidebar': Sidebar,
    'c-header': Header
  }
}
</script>

<style scoped>
  .c-container {
    padding: 1.5em;
  }
</style>
