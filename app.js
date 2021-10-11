new Vue({
    el:"#app",
    data:{
        originalMessage:' Monday is here agian',
        color: 'the way things are',
        status:'bonus',
        age:56
    },
    methods:{
        changecolor:function(){
            this.color = 'Orange';

        },
        reverseit: function(){
            this.color = !this.color
        }
    },

        

        //getters are used to read the value of a data propery 
        //setters are used to set the values of data properties.  
    
    computed:{
        reversedMessage: function(originalMessage){
          return this.originalMessage.split('').reverse().join('')
        }
//now moving on to watches. 
    },
    watch: {
        age:{ 
            handler(check){
            if(check===10){
                alert("You have reached retirement age, do you feel faulfilled?");
            }
        },
        immediate:true,
    }


    }
    
  


})