var app = new Vue({
  el: '#certifiedPeoplePage',
  data: {
    certpeople:[{
      certifiedPeopleID:'',
      userID:'',
      certificationID:'',
      certificationName:'',
      firstName:'',
      lastName:'',
      expirationPeriod:''
    }],
  },

  methods: {
    fetchCertpeople(){
      fetch('api/certifiedPeople/index.php')
      .then( response => response.json() )
      .then( json => {
        this.certpeople = json;
        console.log(this.certpeople)});
      }
},
 created() {
  this.fetchCertpeople();
 }
});
