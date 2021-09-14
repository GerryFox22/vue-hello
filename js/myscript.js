var app = new Vue({

    el: '#app',

    data: {
      message: 'Hello Vue!',
      titleClass : "text-center text-danger p-5",
      jumboSrc : "https://i.ytimg.com/vi/DsuTwV0jwaY/maxresdefault.jpg",
      vueButton : "Clicca Qui !!",
    },

    methods: {

        changeJumboImg: function () {
            this.jumboSrc = "https://www.thespian.hr/png/delivering-vuejs-components-through-json-payload.png"
            this.vueButton = "GRAZIE VUE ♥"
          }
    },
  });

  