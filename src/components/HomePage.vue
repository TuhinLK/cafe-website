<template>
  <div class="home">
    <h1>Welcome to Our Cafe!</h1>
    <button @click="goToMenu">View Our Menu</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const goToMenu = () => {
      router.push('/menu');
    };

    return { goToMenu };
  },
};
</script>
