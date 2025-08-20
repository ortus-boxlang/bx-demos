
document.addEventListener('alpine:init', () => {

	Alpine.data('app', () => ({
		filter:'',
		origlogcontents:'',
		logcontents:'',
		init() {
			console.log('alpine init');
			this.logcontents = this.$refs.logTextArea.value;
			this.origlogcontents = this.logcontents;
			
			this.$watch('filter', (curr) => {
				if(curr == '') {
					this.logcontents = this.origlogcontents;
					return;
				}

				this.logcontents = this.origlogcontents.split('\n').filter(l => l.indexOf(curr) >= 0).join('\n');
			});
			
		}
	}));

});