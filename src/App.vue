<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <div class="navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/create" class="nav-link">
              Create
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create</router-link>
    </div>
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
