import Vue from 'vue';

Vue.mixin({ 
	filters: {
		strippedContent: function(string) {
			   return string.replace(/<\/?[^>]+>/ig, " "); 
		}
	},
    methods: {
      sayIt(name) {
        console.log(`Hello dear ${name}`)
      }
    }
  })

