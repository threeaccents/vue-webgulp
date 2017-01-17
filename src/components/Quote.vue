<script>
  import QuoteService from '../services/quote'

  export default {
    data: function () {
      return {
        quote: ""
      }
    },

    mounted: function () {
      QuoteService.getQuote(this).then(resp => {
        this.quote = resp.data[0].content
      }, function (response) {
        console.log(response)
      });
    }
  }
</script>

<template>
  <div>
    <div class="row">
      <div class="quote-wrapper">
        <h2>Random Quote</h2>
        <p>
          {{quote}}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  /* Imports */
  @import "../stylesheets/variables.scss";

  /* Styles */
  .quote-wrapper{
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.14);
    padding: 2em;
    border: solid 1px $grey2;
    margin-top: 1em;
  }
</style>