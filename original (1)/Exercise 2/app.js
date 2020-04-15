new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
            alert: function(){
        return alert('alert!');
        },
        update: function(event){
            this.value=event.target.value;
        }
    }
});