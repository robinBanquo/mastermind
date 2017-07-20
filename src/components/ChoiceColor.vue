<template>
    <div>
        <div class="col-xs-3" v-for="i in 4" style="padding: 0">
            <div v-for="j in 2" :class="colors[2*(i-1) + (j-1)]" class="hexa-color col-xs-6" style="padding: 0; text-align: center">
              <a href="#">
                  <i class="fa fa-connectdevelop" aria-hidden="true"></i>
              </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return{
                colors : this.$parent.colors,
                response : []
            }
        }
    }
</script>


