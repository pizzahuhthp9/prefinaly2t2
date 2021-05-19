<template>
  <div class="mb-8">
    <div id="nav">
      <router-link to="/conditional-rendering"
        >Conditional Rendering</router-link
      >
    </div>

    <div class="space-y-8">
      <div class="flex space-x-8 justify-center items-center">
        <div class="bg-red-500 w-72 h-72" v-if="vIfColor == 'red'"></div>
        <div class="bg-blue-500 w-72 h-72" v-else-if="vIfColor == 'blue'"></div>
        <div class="bg-yellow-300 w-72 h-72" v-else></div>
      </div>
      <div class="flex space-x-3 justify-center">
        <button class="bg-red-500 px-4 py-1" @click="vIfToColor('red')">
          red
        </button>
        <button class="bg-blue-500 px-4 py-1" @click="vIfToColor('blue')">
          blue
        </button>
        <button class="bg-yellow-300 px-4 py-1" @click="vIfToColor('yellow')">
          yellow
        </button>
      </div>

      <div class="flex space-x-8 justify-center items-center">
        <div class="bg-red-500 w-72 h-72" v-show="vShowColor == 'red'"></div>
        <div class="bg-blue-500 w-72 h-72" v-show="vShowColor == 'blue'"></div>
        <div
          class="bg-yellow-300 w-72 h-72"
          v-show="vShowColor == 'yellow'"
        ></div>
      </div>
      <div class="flex space-x-3 justify-center">
        <button class="bg-red-500 px-4 py-1" @click="vShowToColor('red')">
          red
        </button>
        <button class="bg-blue-500 px-4 py-1" @click="vShowToColor('blue')">
          blue
        </button>
        <button class="bg-yellow-300 px-4 py-1" @click="vShowToColor('yellow')">
          yellow
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConditionalRendering",
  data() {
    return {
      vIfColor: "red",
      vShowColor: "red",
    };
  },
  methods: {
    vIfToColor(color) {
      this.vIfColor = color;
    },
    vShowToColor(color) {
      this.vShowColor = color;
    },
  },
};
</script>

<style></style>
