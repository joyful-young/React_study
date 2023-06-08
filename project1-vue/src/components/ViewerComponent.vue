<template>
  <div>
    <div>현재 카운트: </div>
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ViewerComponent',
  props: {
    count: Number,
  }
}
</script>

<style>

</style>