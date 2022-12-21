const {createApp} = Vue

createApp({
    data(){
        return{
            listRandomEmail : [],
        }
    },
    methods :{
        getRandomEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>{
                console.log(response.data.response)
                const result = response.data.response;
                this.listRandomEmail.push(
                    {
                        mail : result,
                    }
                )
            })
        },

        getXNumberEmail (index){
            for(let i=0; i<index; i++){
                this.getRandomEmail();
            }
        }
    },

    created () {
       this.getXNumberEmail(10);
              },
}).mount('#app')