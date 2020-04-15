new Vue({
    el:'#app',
    data:{
        player: 100,
        monster: 100,
        gameon: false,
        turns: []
    },
    methods:{
        start: function(){
            this.gameon = true;
            this.player = 100;
            this.monster = 100;
            this.turns=[]
        },
        attack: function(){
            this.monster_attack();
            var change = this.damage(10,5);
            this.monster-= change;
            this.turns.unshift({
                is_player: true,
                text: ' Player attack: '+change
            });
            this.check_win();
            
        },
        spl_attack: function(){
            
             this.monster_attack();
             var change = this.damage(20,13);
             this.monster-= change;
             this.turns.unshift({
                is_player: true,
                text: ' Player special attack: '+change
            });
             this.check_win();

        },
        heal: function(){
            this.monster_attack();
            var change = this.player*0.5;
            if(this.player+change >= 100){
                this.player=100;
            }
            else{
                this.player+=change;
            }
            this.turns.unshift({
                is_player: true,
                text: ' Player heals: '+change
            });

        },
        monster_attack: function(){
            var change = this.damage(12,7);
            this.player-=change;
            this.turns.unshift({
                is_player: false,
                text: ' Monster attack: '+change
            });
            if(this.check_win()){
                return;
            };
        },

        give_up: function(){
            if(confirm('You wanna give up?')){
                if(confirm('New game?')){
                    this.start();
                    return;
                }
                else{
                    this.gameon=false;
                    return;
                }
            }
        },
        damage: function(max,min){
            return Math.max(Math.floor(Math.random()*max)+1,min);
        },
        check_win: function(){
            if(this.monster<=0&&this.player>=0){
                if(confirm("You have won! New game?")){
                    this.start();
                }else{
                    this.gameon=false;
                }
                return true;
            }
            else if(this.player<=0&&this.monster>=0){
                if(confirm("You lost! New game?")){
                    this.start();
                }else{
                    this.gameon=false;
                    
                }
                return true;
            }
            return false;
        }
    }
});
