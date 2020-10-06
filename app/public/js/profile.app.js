var app = new Vue({
  el: '#userProfile',
  data: {
    userName: 'Shirley',
    pictureLrg: '',
    pictureThumb: '',
    country: 'USA',
    birth: '10/24/20',
    age: '21',
    email: '123@gmail.com'
  },
  created() {
    console.log('this vue app has been created!');
    this.fetchUser();
  },
  methods: {
    fetchUser: function() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        var userData = data.results[0];
        console.log(userData);
        this.userName = userData.name.first + " " + userData.name.last;
        this.country = userData.location.country;
        this.birth = userData.dob.date;
        this.age = userData.dob.age;
        this.email = userData.email;
        this.pictureLrg = userData.picture.large;
        this.pictureThumb = userData.picture.thumbnail;
      })
      .catch((error)=>{
        fetch('./dummy/randomuser.me-sample.json')
        .then(response => response.json())
        .then(data => {
          var userData = data.results;
          console.log(userData);
          this.userName = userData.name.first + " " + userData.name.last;
          this.country = userData.location.country;
          this.birth = userData.dob.date;
          this.age = userData.dob.age;
          this.email = userData.email;
          this.pictureLrg = userData.picture.large;
          this.pictureThumb = userData.picture.thumbnail;
        })
      })
    },
    formatDate(d) {
      return moment(d).format("MMMM Do, YYYY");
    }
  }
})
