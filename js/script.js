// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
// const { createApp } = Vue;

Vue.createApp({
	data() {
		return {
			greeting: "Benvenuto nel magico mondo di vue. Sarà la tua condanna!",
			imgURL: "https://picsum.photos/200/300",
			inputContent: "",
			contentToShow: ""
		};
	},
	methods: {
		showInputContent: function() {
			this.contentToShow = this.inputContent
		}
	},
	
}).mount("#app");
