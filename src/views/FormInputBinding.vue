<template>
  <div>
      <div id="nav">
          <router-link to="/form-input-binding">Form input Binding</router-link>
      </div>
      <label for="name">name: </label>
      <input type="text" name="name" class="border" v-model="name">
  </div>
</template>

<script>
export default {
    name: "FormInputBinding",
    data() {
        return {
            name: ""
        }
    },
    updated(){
        console.log(this.name);
    }
}
</script>

<style>

</style>