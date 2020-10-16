var app = new Vue({
  el: '#triagePage',
  data: {
    certs:[{
      agency:'',
      name:'',
      city:'',
      expirationPeriod:''
    }],
    newCert: {
      agency:'',
      name:'',
      city:'',
      expirationPeriod:''
    }
  },
  methods: {
    fetchCerts(){
      fetch('api/certification/')
      .then( response => response.json() )
      .then( json => {
        this.certs = json;
        console.log(this.certs)});
      },
     createCerts(){
       fetch('api/certification/post.php', {
         method:'POST',
         body: JSON.stringify(this.newCert),
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.json() )
       .then( json => {
         console.log("Returned from post:", json);
         this.certs.push(json[0]);
         this.newCert = this.newCertData();
      });
        console.log("Great Scott!!!");
        console.log(this.newCert);
     },
     newCertData() {
       return {
         agency:'',
         name:'',
         city:'',
         expirationPeriod:''
       }
     }
},
 created() {
  this.fetchCerts();
 }
});
