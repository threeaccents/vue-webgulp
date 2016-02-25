export default {
  getQuote(ctx) {
    return ctx.$http.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=');
  }
}
