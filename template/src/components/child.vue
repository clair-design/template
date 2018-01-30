<template>
  <div>
    <c-breadcrumb>
      <c-breadcrumb-item><a href="#">首页</a></c-breadcrumb-item>
      <c-breadcrumb-item><a href="#">业务</a></c-breadcrumb-item>
      <c-breadcrumb-item>子业务</c-breadcrumb-item>
    </c-breadcrumb>
    <c-box gap="1.5em">
      <c-box-item v-for="(span, i) in [8, 4, 6, 6]" :span="span" :key="i">
        <c-card>
          <h1>Hello Clair</h1>
        </c-card>
      </c-box-item>
    </c-box>
  </div>
</template>

<style scoped>
  .c-card {
    min-height: 15em;
    margin-bottom: 1.5em;
  }
</style>
