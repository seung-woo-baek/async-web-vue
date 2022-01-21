<template>
    <HeaderBox />
    <div class="main">
        <router-view/>
    </div>
    <FooterBox />
</template>

<script>
import FooterBox from '@/components/Footer.vue';
import HeaderBox from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    FooterBox,
    HeaderBox,
  },
};
</script>
