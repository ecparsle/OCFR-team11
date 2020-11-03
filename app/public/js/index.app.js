var app = new Vue({
  el: '#triagePage',
  data: {
    certs:[{
      certificationID:'',
      agency:'',
      name:'',
      city:'',
      expirationPeriod:''
    }],
    newCert: {
      certificationID:'',
      agency:'',
      name:'',
      city:'',
      expirationPeriod:''
    },
    activecert:{
      certificationID:"",
      agency:"",
      name:"",
      city:"",
      expirationPeriod:""
    }
  },

  methods: {
    fetchCerts(){
      fetch('api/certification/index.php')
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
         this.certs = json;
         this.newCert = this.newCertData();
      });
        console.log("Great Scott!!!");
        console.log(this.newCert);
     },
     deleteCerts(deleteCert){
       console.log(deleteCert);
       fetch('api/certification/delete.php', {
         method:'POST',
         body: JSON.stringify({
           "certificationID": deleteCert
        }),
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.text() )
       .then( json => {
         console.log("Returned from post:", json);
         // TODO: test a result was returned!
         this.certs=json;
       });
       console.log("Deleting (POSTing)...!");
     },
/*     editCerts() {
       fetch('api/certification/edit.php', {
         method:'POST',
         body: JSON.stringify(this.newCert),
         headers: {
        "Content-Type": "application/json; charset=utf-8"
         }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.certs=json;
          this.newCert = this.newCertData();
          // certAgency.Placeholder = DataRow[0]("agency").ToString();
        });
        console.log("Updating (POSTing)...!");
        console.log(this.certs);
      },*/
      updateCert( evt ){
        fetch('api/certification/edit.php', {
          method: 'POST',
          body: JSON.stringify(this.activecert),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
        });
      },
      newCertData() {
        return {
           certificationID:'',
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
