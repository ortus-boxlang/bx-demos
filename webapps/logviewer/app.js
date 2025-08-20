
document.addEventListener('alpine:init', () => {

	Alpine.data('app', () => ({
		filter:'',
		origlogcontents:'',
		init() {
			console.log('alpine init');
			this.origlogcontents = this.$refs.logTextArea.value;
			
			this.$watch('filter', (curr) => {
				if(curr == '') {
					this.$refs.logTextArea.value = this.origlogcontents;
				} else this.$refs.logTextArea.value = this.origlogcontents.split('\n').filter(l => l.indexOf(curr) >= 0).join('\n');
			});
			
		}
	}));

});