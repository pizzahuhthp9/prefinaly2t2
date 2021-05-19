<template>
  <div>
    <div id="nav">
      <router-link to="/class-and-style-binding">Class, style binding</router-link>
    </div>
    <div class="flex space-x-8 my-24 justify-center">
      <div class="bg-gray-200 w-1/5 py-4">
        <div :class="classVar"></div>
        <div class="flex flex-col mt-8 space-y-4">
          <div class="flex justify-center space-x-3">
            <button class="px-4 py-2 bg-gray-400" @click="classToRec">
              Rectangle
            </button>
            <button class="px-4 py-2 bg-gray-400" @click="classToCircle">
              Circle
            </button>
          </div>
          <div class="flex justify-center space-x-3">
            <button class="px-4 py-2 bg-red-500" @click="classToColor('red')">
              red
            </button>
            <button
              class="px-4 py-2 bg-blue-500 text-gray-200"
              @click="classToColor('blue')"
            >
              blue
            </button>
            <button
              class="px-4 py-2 bg-yellow-300"
              @click="classToColor('yellow')"
            >
              yellow
            </button>
          </div>
        </div>
      </div>
      <div class="bg-gray-200 w-1/5 py-4">
        <div :style="styleVar"></div>
        <div class="flex flex-col mt-8 space-y-4">
          <div class="flex justify-center space-x-3">
            <button class="px-4 py-2 bg-gray-400" @click="styleToRec">
              Rectangle
            </button>
            <button class="px-4 py-2 bg-gray-400" @click="styleToCircle">
              Circle
            </button>
          </div>
          <div class="flex justify-center space-x-3">
            <button class="px-4 py-2 bg-red-500" @click="styleToColor('red')">red</button>
            <button class="px-4 py-2 bg-blue-500 text-gray-200" @click="styleToColor('blue')">blue</button>
            <button class="px-4 py-2 bg-yellow-300" @click="styleToColor('yellow')">yellow</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassAndStyleBinding",
  data() {
    return {
      styleVar: {
        width: "2.5rem",
        height: "2.5rem",
        backgroundColor: "rgba(75, 85, 99)",
        borderRadius: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      },
      classVar: ["w-10", "h-10", "bg-gray-600", "mx-auto", "rounded-full"],
    };
  },

  methods: {
    classToRec() {
      this.classVar = this.classVar.filter((css) => css != "rounded-full");
    },
    classToCircle() {
      let css = this.classVar.filter((css) => css != "rounded-full");
      css.push("rounded-full");
      this.classVar = css;
    },
    classToColor(color) {
      this.classVar = this.classVar.filter((css) => {
        return css.substring(0, 2) != "bg";
      });
      switch (color) {
        case "red":
          this.classVar.push("bg-red-500");
          break;
        case "blue":
          this.classVar.push("bg-blue-500");
          break;
        case "yellow":
          this.classVar.push("bg-yellow-300");
          break;
      }
      console.log(this.classVar);
    },
    styleToRec() {
      this.styleVar.borderRadius = "0px";
    },
    styleToCircle() {
      this.styleVar.borderRadius = "100%";
    },
    styleToColor(color) {
      switch (color) {
        case "red":
          this.styleVar.backgroundColor="rgba(239, 68, 68)"
          break;
        case "blue":
          this.styleVar.backgroundColor="rgba(59, 130, 246)"
          break;
        case "yellow":
          this.styleVar.backgroundColor="rgba(252, 211, 77)"
          break;
      }
    },
  },
};
</script>

<style></style>
