<template>
  <Header/>
  <div>
    <NuxtPage/>
  </div>
</template>

<script setup>

const router = useRouter();

router.options.scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth',
    };
  } else {
    return { top: 0, behavior: 'smooth' };
  }
};
</script>
