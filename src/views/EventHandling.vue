<template>
  <div class="space-y-2">
    <div id="nav">
      <router-link to="/event-handling">Event Handling</router-link>
    </div>
    
    <event-handling-example :initNum="num" @increment="increment"></event-handling-example>
    <button class="bg-gray-200 px-2 py-1 m-2" @click="click">click</button>
    <button class="bg-gray-200 px-2 py-1 m-2" @keydown="keyDown">key</button>
    <button class="bg-gray-200 px-2 py-1 m-2" @dblclick="dbClick">db click</button>
  </div>
</template>

<script>
import EventHandlingExample from "@/components/EventHandlingExample.vue";
export default {
  name: "EventHandling",
  data() {
    return {
      num: 0,
    };
  },
  methods: {
      increment(){
          this.num++;
      },
      click(){
          console.log("click");
      },
      keyDown(){
          console.log("keyDown");
      },
      dbClick(){
          console.log("db click");
      }
  },
  components:{
      EventHandlingExample
  }
  
};
</script>

<style></style>
