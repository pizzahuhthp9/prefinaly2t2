<template>
  <div>
    <div id="nav">
      <router-link to="/list-rendering">List Rendering</router-link>
    </div>

    <div class="flex-flex-col items-start w-max mx-auto space-y-8">
      <div>
        <label for="name">name: </label>
        <input
          type="text"
          name="name"
          class="border rounded-r-none"
          v-model="name"
        />
        <button class="border bg-gray-100 rounded-l-none" @click="submit">
          submit
        </button>
      </div>

      <div>
        <li class="w-max" v-for="(name, index) in names" :key="index">
          {{ name }}
        </li>
      </div>
    </div>
    <ul>
      <li v-for="(value, keyValue, index) in book" :key="index">{{keyValue}}: {{value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListRendering",
  data() {
    return {
      name: "",
      names: ["pizza", "asd"],
      book: {
        title: "หนังสือสุดคูล",
        author: "คนเขียนคูลๆ",
        date: "วันที่คูลๆ",
      }
    };
  },
  methods: {
    submit() {
      this.names.push(this.name);
      this.name = "";
    },
  },
};
</script>

<style></style>
