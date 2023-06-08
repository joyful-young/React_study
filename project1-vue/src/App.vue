<template>
  <div id="app">
    <h1>Simple Counter</h1>
    <section>
      <ViewerComponent :count="count"/>
    </section>
    <section>
      <ControllerComponent @setCount="handleCount"/>
    </section>
  </div>
</template>

<script>
import ControllerComponent from './components/ControllerComponent.vue'
import ViewerComponent from './components/ViewerComponent.vue'

export default {
  name: 'App',
  // Controller에서 이벤트 발생하면 그 값에 따라 count 바꿔서 Viewer에 props로 전달
  data() {
    return {
      count: 0,
    }
  },
  components: {
    ViewerComponent,
    ControllerComponent,
  },
  methods: {
    handleCount(num) {
      this.count += num
      console.log(this.count)
    }
  }
}
</script>

<style>
body {
  padding: 20px;
}

#app {
  margin: auto;
  width: 500px;
}

#app > section {
  padding: 20px;
  background-color: rgb(220, 220, 220);
  border: 1px solid rgb(210, 210, 210);
  border-radius: 5px;
  margin-bottom: 10px;
}

</style>
