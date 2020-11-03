var randomCert = new Vue({
  el: "#randomCert",
   data:{
    certList: [{
        CertID:"",
        CertName:"",
        CerAgency:"",
        CertLength:"",
        CertDescription:""
    }],
     newCertification: {
        CertID:"",
        CertName:"",
        CerAgency:"",
        CertLength:"",
        CertDescription:""
      },
      activecert:{
        CertID:"",
        CertName:"",
        CerAgency:"",
        CertLength:"",
        CertDescription:""
      },

    certdetailList: [{
         CertID:'',
        Name:''
     }],
     RowSelector: 12
    },

    computed: {
     SelectedCertification: function() {
       return this.certdetailList.filter(function(u) {
         return u.DetailFilter;

     })
   }},

    created() {
      this.fetchCertificate();
        this.fetchCertdetail();
    },

   methods:{


 DetailFilter() {
this.RowSelector== this.certdetailsList.CertID;

},


     newCertificationData() {
       return {
         CertID: "",
         CertName: "",
         CerAgency: "",
         CertLength:"",
         CertDescription:""
       }
     },

    fetchCertificate(){
      fetch('api/Certification/index.php')
      .then(response => response.json())
      .then(json => {
        this.certList=json;
        console.log(this.certList);
      });
    },
    createCertification()	{
      fetch('api/Certification/post.php', {
        method:'POST',
        body: JSON.stringify(this.newCertification),
        headers: {
      	   "Content-Type": "application/json; charset=utf-8"
         }
       })
      .then( response => response.json() )
      .then( json => {
    	    console.log("Returned from post:", json);
	        this.certList = json;
    	    this.newCertification = this.newCertificationData();
        });
      },

      fetchCertdetail(){
        fetch('api/certdetail/index.php')
        .then(response => response.json())
        .then(json => {
          this.certdetailList=json;
          console.log('Detail List:')
          console.log(this.certdetailList);
        });
      },
      updateCert( evt ){
        fetch('api/Certification/edit.php', {
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
      }

    },

});
