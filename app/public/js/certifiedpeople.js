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
      },
/*     deleteMembers(){
       fetch('api/memberification/delete.php', {
         method:'POST',
         body: JSON.stringify(this.newMember),
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.json() )
       .then( json => {
         console.log("Returned from post:", json);
         this.members.push(json[0]);
         this.newMember = this.newMemberData();
      });
        console.log("Great Scott!!!");
        console.log(this.newMember);
     },*/
},
 created() {
  this.fetchCertpeople();
 }
});
