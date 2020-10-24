var app = new Vue({
  el: '#memberPage',
  data: {
    members:[{
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
         this.members.push(json[0]);
         this.newMember = this.newMemberData();
      });
        console.log("Great Scott!!!");
        console.log(this.newMember);
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
     newMemberData() {
       return {
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
