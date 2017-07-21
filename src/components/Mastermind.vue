<template xmlns="http://www.w3.org/1999/html">
    <div class="fluid-container">
        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Mastermind</h1>
            <div class="choice-color row mmm">
                <choice-color :selectedColor="selectedColor"></choice-color>
            </div>
            <div class="game-container">
                    <game-try v-for="essai in essaiTable" :essai="essai"></game-try>
            </div>
        </div>
    </div>
</template>

<script>

    import ChoiceColor from './ChoiceColor'
    import GameTry from './GameTry'

  export default {

      data () {
          return {
              nbEssais : 10,
              tofind : [],
              colors : ['light_blue' , 'red' , 'orange' , 'yellow' , 'green' , 'purple' , 'pink', 'dark_blue' ],
              selectedColor: ""
          }
      },
      computed: {
          randomizedColors  () {
              var shuffle = require('shuffle-array');
              return shuffle(this.colors)
          },
          toFind () {
              for (let i = 0; i < 4; i++) {
                  this.tofind.push(this.colors[i]);
              }
              return this.tofind;
          },
          essaiTable (){
              var essaiTable = [];
              for (let i = 0; i < this.nbEssais; i++) {
                  essaiTable.push({
                      key : i ,
                      values : ["", "", "", ""],
                      status : "waiting"
                      })
              }
              essaiTable[0].status="active";
              return essaiTable
          },
      },
      methods : {
          essai : function(n) {
          },
      },
      components : {
          ChoiceColor,
          GameTry
      }
  }
</script>
<style src="./colors.css"></style>
<style>
    /** {*/
        /*border: 1px solid darkgrey;*/
    /*}*/
    .drop, .hexa-color {
         width: 4em;
         height: 4em;
     }
</style>
