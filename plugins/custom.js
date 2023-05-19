import Vue from 'vue';

Vue.mixin({ 
	filters: {
		strippedContent: function(string) {
			   return string.replace(/<\/?[^>]+>/ig, " "); 
		}
	},
    methods: {
		messageWithoutSpaces(message) {
			return message.replace(/\s/g, '');
        }
    }
  })

