<template>
  <div>
      <div>
          {{initNum}}
      </div>
      <button class="px-2 bg-gray-200" @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: "EventHandlingExample",
  methods: {
      increment(){
          this.$emit("increment");
      }
  },
  props:{
      initNum: {
          type: Number,
          default: 0
      }
  }
};
</script>

<style></style>
