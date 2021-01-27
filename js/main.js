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
        imgIDX: 0,
        faRight: 'fas fa-angle-right',
        faLeft: 'fas fa-angle-left',
        faCircle: 'fas fa-circle'
    },
    methods: {
        next: function(){
            this.imgIDX += 1;
        },
        prev: function(){
            this.imgIDX -= 1;
        }
    }
});
Vue.config.devtools = true;