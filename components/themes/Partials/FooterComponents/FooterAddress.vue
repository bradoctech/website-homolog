<template>
   <div>
    <h4 class="footer-title iq-rmt-30">{{ addressTitle }}</h4>
    <div class="row">
      <div class="col-sm-12">
        <ul class="iq-contact">
          <li v-for="(option,index) in addressContent" :key="index">
            <a v-if="option.link" :href="option.link" target="_blank">
              <i v-if="option.icon" :class="option.iconClass"></i>
              <span>{{ option.text }}</span>
            </a>
            <p v-else>
              <i v-if="option.icon" :class="option.iconClass"></i>
              <span>{{ option.text }}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterAddress',
  // eslint-disable-next-line vue/require-prop-types
  props: ['addressTitle', 'addressContent']
}
</script>
