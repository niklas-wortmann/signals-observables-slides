<script setup lang='ts'>
type Props = { title: string, imagePath: string, imageAlt: string }
const props = defineProps<Props>()

</script>

<template>
  <o-card embed shadow='hover' class='text-center container'>
    <div class='image-container'><img :src='props.imagePath' :alt='props.imageAlt' /></div>
    <span class='text-white text-4'>{{props.title}}</span>
  </o-card>
</template>

<style scoped>
.container {
  height: 100%;
}

:deep(.o-card-body) {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.image-container{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: inherit;
  padding: 15px
}
</style>
