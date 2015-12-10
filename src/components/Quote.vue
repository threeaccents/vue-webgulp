<script>
  import QuoteService from '../services/quote'

  export default {
    name: "Quote",

    data: function(){
      return {
        quote: ""
      }
    },

    ready: function() {
      var quote  = QuoteService.getQuote(this).quote
      this.$set('quote', quote);
    }
  }
</script>

<template>
  <div class="container">
    <div class="quote-wrapper">
      <h2>Random Quote</h2>
      <p>
        {{quote}}
      </p>
    </div>
  </div>
</template>
