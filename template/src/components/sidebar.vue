<template>
  <div class="sidebar">
    <a class="logo" href="#">
      <img src="https://s1.ssl.qhres.com/static/9df9c3c715a8b6cb.svg" alt="Clair">
    </a>
    <c-menu mode="vertical">
      <c-submenu v-for="m in menu" :key="m.title" open>
        <template slot="title">
          <c-icon :name="m.icon" valign="middle" />{{ m.title }}
        </template>
        <router-link
          v-for="child in m.children"
          :key="child.title"
          tag="c-menu-item"
          :to="child.to"
        >
          <a>{{ child.title }}</a>
        </router-link>
      </c-submenu>
    </c-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {
          title: '业务1',
          icon: 'inbox',
          children: [
            {title: '子业务1', to: '/biz1/child1'},
            {title: '子业务2', to: '/biz1/child2'},
            {title: '子业务3', to: '/biz1/child3'}
          ]
        },
        {
          title: '业务2',
          icon: 'briefcase',
          children: [
            {title: '子业务1', to: '/biz2/child1'},
            {title: '子业务2', to: '/biz2/child2'},
            {title: '子业务3', to: '/biz3/child3'}
          ]
        },
      ]
    }
  }
}
</script>


<style scoped lang="postcss">
  @import url('clair/src/css/variables.css');
  .sidebar {
    width: 240px;
  }
  .logo {
    display: block;
    line-height: 4;
    padding: 0 20px;
    background: color(var(--primary-color) l(90%));

    & img {
      vertical-align: middle;
    }
  }
</style>