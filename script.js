var chrono = {
  secondsLeft: 0,
  timer: undefined,

  Start: function(secondsLeft) {
      //Initialisation du nombre de secondes selon la valeur passée en paramètre
      this.secondsLeft = secondsLeft;
      //Démarrage du chrono
      this.timer = setInterval(this.Tick.bind(this), 1000);
  },

  Tick: function() {
      //On actualise la valeur affichée du nombre de secondes
      document.getElementById("time").innerHTML = --this.secondsLeft;
      if(this.secondsLeft === 0)
      //Tps écoulé -> arrêt du timer
          this.Stop()
  },

  Stop: function() {
      //quand le temps est écoulé, on arrête le timer
      clearInterval(this.timer);
      //Et on appelle la fonction qui gère la fin du temps imparti et poursuit le traitement
      //Ici, pour le test, simplement une fonction alert
      alert('Vous avez perdu');

  }

};
























      var x = 6;
      var y = 14;
      var table = document.querySelectorAll('tr');

      var colone=document.querySelector('.flower');

     var actuel = table[y].children[x];
     actuel.classList.add('bonjour');

     console.log(table[y].children[x - 1].classList.contains('test'));
     window.addEventListener('keyup', function(event) {
         if (event.which == 37) {
           var left = table[y].children[x - 1];
           if (left.classList.contains('flower')) {
            actuel.classList.remove('bonjour');
            left.classList.add('bonjour');
            x--;
            actuel=left;
           }
         }
       });
       window.addEventListener('keyup', function(event) {
           if (event.which == 39) {
             var right = table[y].children[x + 1];
             if (right.classList.contains('flower')) {
              actuel.classList.remove('bonjour');
              right.classList.add('bonjour');
              x++;
              actuel=right;
             }
           }
         });
         window.addEventListener('keyup', function(event) {
             if (event.which == 38) {
               var top = table[y - 1].children[x];
               if (top.classList.contains('flower')) {
                actuel.classList.remove('bonjour');
                top.classList.add('bonjour');
                y--;
                actuel=top;
               }
             }
           });
           window.addEventListener('keyup', function(event) {
               if (event.which == 40) {
                 var bot = table[y + 1].children[x];
                 if (bot.classList.contains('flower')) {
                  actuel.classList.remove('bonjour');
                  bot.classList.add('bonjour');
                  y++;
                  actuel=bot;
                 }
               }
             });
