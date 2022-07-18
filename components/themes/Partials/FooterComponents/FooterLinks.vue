<template>
  <div>
    <div class="footer-logo text-left">
      <h4 class="footer-title">{{ title }}</h4>
      <div class="menu-footer-menu-container">
        <ul class="menu">
          <li v-for="(list,value) in content" :key="value" class="menu-item">
            <a v-if="path && list.href" :href="path + list.href">{{ list.title }}</a>
            <a v-else-if="list.href" :href="list.href">{{ list.title }}</a>
            <a v-else href="javascript:void(0)">{{ list.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterLinks',
  props: ['title', 'content', 'path']
}
</script>
