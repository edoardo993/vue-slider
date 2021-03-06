// Obiettivo:
// Ricreare lo slider già fatto in jquery con Vue.js.

new Vue({
    el: '#root',
    data: {
        imgs: [
            'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
            'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
            'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
            'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
        ],
        imgIDX: 0
    },
    methods: {
        // funzione avanzamento immagini con ritorno alla prima dopo l'ultima
        next: function(){
            if(this.imgIDX<this.imgs.length-1){
                this.imgIDX += 1;
            }else{
                this.imgIDX=0;
            }
        },
        // funzione regresso immagini con ritorno all'ultima dopo la prima
        prev: function(){
            if(this.imgIDX>0){
            this.imgIDX -= 1;
            }else{
                this.imgIDX=this.imgs.length-1;
            }
        },
        // funzione per colorare di blu il pallino solo se corrispondente all'index dell'immagine
        dots: function(index){
            if(index===this.imgIDX){
                return 'fas fa-circle active'
            }else{
                return 'fas fa-circle'
            }
        },
        // funzione per cambiare immagine al click del pallino corrispondente
        dotChangeImg: function(index){
            this.imgIDX=index
        }
    }
});
Vue.config.devtools = true;