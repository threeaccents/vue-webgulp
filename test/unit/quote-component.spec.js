var Vue = require('vue')
var Quote = require('../../src/components/Quote.vue')
const QuoteServiceInjector = require('!!vue?inject!../../src/components/Quote.vue')

const QuoteWithMocks = QuoteServiceInjector({
  // mock it
  '../services/quote': {
    quote: 'Hello from a mocked service!'
  }
})

describe('Quote.vue', function() {

  // asserting JavaScript options
  it('should have correct message', function() {
    expect(Quote.data().quote).toBe('')
  });

  // asserting rendered result by actually rendering the component
  it('should render correct message', function() {
    var vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        'test': Quote
      }
    }).$mount()
    expect(vm.$el.querySelector('h2').textContent).toBe('Random Quote')
  });
})
