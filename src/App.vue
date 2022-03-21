<template>
    <router-view/>
</template>

<style>
*{
  background-color: #333333;
}
#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;;
}

#nav {
  padding: 30px;
  color: #FFFFFF;
}

#nav a {
  font-weight: bold;
  color: #FFFFFF;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
