<template>
    <div class="try-container row" style="margin: 0">
        <div class="col-xs-10 row" style="margin: 0; padding: 0">
            <div class="col-xs-3 white drop-parent " v-for=" i in 4" style=""  :id="i">
                <div class="drop" style="text-align: center">
                    <a href="#" >
                        <i class="fa fa-eercast" aria-hidden="true"></i>
                    </a>
                </div>
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
<style>
    .drop-parent{
        display: flex;
        text-align: center;
    }
    .drop{
        padding: 1em 0;
        margin-left: auto;
        margin-right: auto;
    }
    .drop a{
        margin-top: auto;
        margin-bottom: auto;
    }
</style>

