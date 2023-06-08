<template>
  <div id="controller">
    <button @click="setCount(-1)">-1</button>
    <button @click="setCount(-10)">-10</button>
    <button @click="setCount(-100)">-100</button>
    <button @click="setCount(100)">+100</button>
    <button @click="setCount(10)">+10</button>
    <button @click="setCount(1)">+1</button>
  </div>
</template>

<script>
export default {
  name: 'ControllerComponent',
  methods: {
    setCount(num) {
      this.$emit('setCount', num)
    }
  }
}
</script>

<style scoped>
#controller {
  display: flex;
  justify-content: space-between;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: greenyellow;
}
</style>