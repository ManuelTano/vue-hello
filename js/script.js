// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

console.log("Vue appost", Vue);

const root = new Vue({
  name: 'Vue Hello Manu',
  el: '#root', 
  data: {
    title: 'Ciao sono Manu e faccio parte della Classe 68!',
    img: 'https://cdn.corrieredellosport.it/img/990/495/2021/03/15/153056303-77104e00-7cc1-41c0-a18d-d0509dd9e70e.jpg'
  }
})
