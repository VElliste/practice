<template>
  <div class="container-header">
    <div class="btn-group" role="group" aria-label="Basic outlined example">
      <router-link to="/briefcase" class="btn btn-outline-primary">Портфель</router-link>
      <router-link to="/catalog" class="btn btn-outline-primary">Каталог акций</router-link>
      <button type="button" class="btn btn-outline-primary">История операций</button>
    </div>
    <div class="card header">
      <div class="card-body">
        Доступный счет: {{ money }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioHeader",
  data() {
    return {
      money: "1000"
    };
  }
}
</script>

<style scoped>
.container-header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 90%;
}

.btn-group {
  left: -80px;
}
</style>
