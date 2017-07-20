<template>
    <div class="try-container row" style="margin: 0">
        <div class="col-xs-10 row" style="margin: 0; padding: 0">
            <div class="col-xs-3 white drop" v-for=" i in 4" style="text-align: center;padding: 1em 0;margin: 0"  :id="i">
              <a href="#" >
                <i class="fa fa-eercast" aria-hidden="true"></i>
              </a>
            </div>
        </div>
        <div class="col-xs-2">

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

