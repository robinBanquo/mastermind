<template>
    <div cla>
        <div v-for="color in colors" :class="color">
          <a href="#">
              <i class="fa fa-connectdevelop" aria-hidden="true"></i>
          </a>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return{
                colors : this.$parent.colors
            }
        }
    }
</script>

<style src="./colors.css"></style>
