<template>
  <div class="menu">
    <h2>Our Menu</h2>
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        {{ item.name }}
        <button @click="displayAlert(item.name)">Order</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, name: 'Cappuccino' },
        { id: 2, name: 'Espresso' },
        { id: 3, name: 'Latte' },
        { id: 4, name: 'Americano' },
      ],
    };
  },
  methods: {
    displayAlert(itemName) {
      alert(`You ordered: ${itemName}`);
    },
  },
};
</script>
