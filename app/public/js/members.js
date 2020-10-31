var app = new Vue({
  el: '#memberPage',
  data: {
    members:[{
      userID:'',
      firstName:'',
      lastName:'',
      address:'',
      email:'',
      password:'',
      phoneNumber:'',
      dob:'',
      gender:'',
      startDate:'',
      departmentPosition:'',
      radioNumber:'',
      stationNumber:'',
      isActive:''
    }],
    newMember: {
      userID:'',
      firstName:'',
      lastName:'',
      address:'',
      email:'',
      password:'',
      phoneNumber:'',
      dob:'',
      gender:'',
      startDate:'',
      departmentPosition:'',
      radioNumber:'',
      stationNumber:'',
      isActive:''
    }
  },

  methods: {
    fetchMembers(){
      fetch('api/member/index.php')
      .then( response => response.json() )
      .then( json => {
        this.members = json;
        console.log(this.members)});
      },
     createMembers(){
       fetch('api/member/post.php', {
         method:'POST',
         body: JSON.stringify(this.newMember),
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.json() )
       .then( json => {
         console.log("Returned from post:", json);
         this.members=json;
         this.newMember = this.newMemberData();
      });
        console.log("Great Scott!!!");
        console.log(this.newMember);
     },
     deleteMembers(deleteMember){
       console.log(deleteMember);
       fetch('api/member/delete.php', {
         method:'POST',
         body: JSON.stringify({
           "userID": deleteMember
        }),
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.text() )
       .then( json => {
         console.log("Returned from post:", json);
         // TODO: test a result was returned!
         this.members=json;
       });
       console.log("Deleting (POSTing)...!");
     },
     newMemberData() {
       return {
         userID:'',
         firstName:'',
         lastName:'',
         address:'',
         email:'',
         password:'',
         phoneNumber:'',
         dob:'',
         gender:'',
         startDate:'',
         departmentPosition:'',
         radioNumber:'',
         stationNumber:'',
         isActive:''
       }
     }
},
 created() {
  this.fetchMembers();
 }
});
