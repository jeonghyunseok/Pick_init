<template>
  <div class="about">
    <h1 class="text-xl font-medium text-white">This is an about page</h1>
    <p class="text-lg">
      <a href="https://medium.com/js-dojo/custom-vue3-boilerplate-9635806acde3" target="_blank"
        >기본 세팅 참고 URL</a
      >
    </p>
    <a
      href="https://velog.io/@2wndrhs/%EC%95%8C%EC%95%84%EB%91%90%EB%A9%B4-%EC%93%B8%EB%8D%B0%EC%9E%88%EB%8A%94-ESLint-Prettier-%EC%84%A4%EC%A0%95-%EB%B0%A9%EB%B2%95"
      target="_blank"
      >알아두면 쓸데있는 ESLint & Prettier 설정 방법 (feat.우아한테크코스)</a
    >
  </div>
</template>

<style lang="scss">
.about {
  // @apply lg:min-h-screen lg:flex lg:items-center;
  h1 {
    @apply text-xl font-medium text-white;
  }
}
</style>
