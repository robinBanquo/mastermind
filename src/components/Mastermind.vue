<template>
    <div class="container">
        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Mastermind</h1>
            <choice-color></choice-color>
            <div class="game-container">
                <div class="game-try" v-for="n in 10">
                    <game-try></game-try>
                </div>
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
              nb_essai: 10,
              tofind : [],
              colors : ['light_blue' , 'red' , 'orange' , 'yellow' , 'green' , 'purple' , 'pink', 'dark_blue' ]
          }
      },
      computed: {
          randomizedColors  () {
              var shuffle = require('shuffle-array');
              return shuffle(this.colors)
          },
          toFind () {
              for(let i=0 ; i<4 ; i++){
              this.tofind.push(this.colors[i]);
              }
             return this.tofind;
          },
      },
      components : {
          ChoiceColor,
          GameTry
      }
  }
</script>
