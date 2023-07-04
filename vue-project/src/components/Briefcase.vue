<template>
  <div class="container">
    <div class="portfolio-briefcase">
      <h1>Портфель</h1>
      <div class="card w-75 mb-3">
        <div class="card-body">
          <h5 class="card-title">Брокерский счет</h5>
          <p class="card-text">{{accountBalance}} <span style="font-weight: normal; font-size: 14px">₽</span></p>
        </div>
      </div>
      <div class="card w-75 mb-3">
        <div class="card-body">
          <nav class="navbar">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <div class="centered-icon">
                  <i class="bi bi-window-desktop"></i>
                  <div>Заявки</div>
                </div>
              </a>
              <a class="navbar-brand" href="#">
                <div class="centered-icon">
                  <i class="bi bi-download"></i>
                  <div>Пополнить</div>
                </div>
              </a>
              <a class="navbar-brand" href="#">
                <div class="centered-icon">
                  <i class="bi bi-unindent"></i>
                  <div>Вывести</div>
                </div>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div class="card w-75 mb-3">
        <div class="card-body">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" @click="selectedTab = 'all'">Все</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="selectedTab = 'stocks'">Акции</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="selectedTab = 'bonds'">Облигации</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="selectedTab = 'funds'">Фонды</a>
            </li>
          </ul>
          <br>
          <div class="card-body-item">
            <div class="card-item" v-if="selectedTab === 'stocks' || selectedTab === 'all'">
              <h5>Акции</h5>
              <div class="card-money-item" v-for="stock in stocks" :key="stock.id">
                <div class="card-money-title">
                  <div style="font-weight: bold; font-size: 16px">{{ stock.name }}</div>
                  <div>{{ stock.price }}</div>
                </div>
                <div class="card-money-price" style="font-weight: bold; font-size: 16px">
                  {{ stock.price }}
                </div>
              </div>
            </div>
            <div class="card-item" v-if="selectedTab === 'bonds' || selectedTab === 'all'">
              <h5>Облигации</h5>
              <div class="card-money-item" v-for="bond in bonds" :key="bond.id">
                <div class="card-money-title">
                  <div style="font-weight: bold; font-size: 16px">{{ bond.name }}1</div>
                  <div>{{ bond.price }}</div>
                </div>
                <div class="card-money-price" style="font-weight: bold; font-size: 16px">
                  {{ bond.price }}
                </div>
              </div>
            </div>
            <div class="card-item" v-if="selectedTab === 'funds' || selectedTab === 'all'">
              <h5>Фонды</h5>
              <div class="card-money-item" v-for="fund in funds" :key="fund.id">
                <div class="card-money-title">
                  <div style="font-weight: bold; font-size: 16px">{{ fund.name }}</div>
                  <div>{{ fund.price }}</div>
                </div>
                <div class="card-money-price" style="font-weight: bold; font-size: 16px">
                  {{ fund.price }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioBriefcase",
  data() {
    return {
      selectedTab: 'all',
      accountBalance: '1234567890',
      stocks: [
        { id: 1, name: "Акция1", price: "цена" },
        { id: 2, name: "Акция2", price: "цена" },
      ],
      bonds: [
        { id: 1, name: "Облигация1", price: "цена" },
        { id: 2, name: "Облигация2", price: "цена" },
      ],
      funds: [
        { id: 1, name: "Фонд1", price: "цена" },
        { id: 2, name: "Фонд2", price: "цена" },
      ],
    };
  }
}
</script>

<style scoped>
.portfolio-briefcase {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.w-75 {
  width: 100%;
  padding-left: 10px;
  padding-right: 200px;
  box-sizing: content-box;
}

.card-title {
  font-size: 16px;
}

.card-text {
  font-weight: bold;
}

.centered-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

.container {
  display: flex;
  justify-content: center;
  padding-top: 60px;
}

h1, h2 {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
.card-money-item {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.card-item {
  margin-bottom: 50px;
  padding-bottom: 10px;
  border-bottom: #dee2e6 1px solid;
}
</style>
