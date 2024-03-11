<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2 z-20">
    <Socials   v-if="$slidev.nav.currentPage !== 1"
        twitter="niklas_wortmann" :linkedin="{name: 'Jan-Niklas Wortmann', path: 'jan-niklas-wortmann'}" github="niklas-wortmann" homepage="https://wordman.dev" animated :animationTime="20000"> </Socials>
  </footer>
</template>
