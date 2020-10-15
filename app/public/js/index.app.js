var app = new Vue({
  el: '#triagePage',
  data: {
    certs:{
      agency:'',
      name:'',
      city:'',
      expirationPeriod:''
    },
    ptList: [],
    activePt: null,
    triageForm: {
      priority: null,
      symptoms: ''
    },
    newCtForm: {}
  },
  computed: {
    activePtName() {
      return this.activePt ? this.activePt.lastName + ', ' + this.activePt.firstName : ''
    }
  },
  methods: {
    createCerts(){
      console.log("reached here");
      // return {
        //agency: "",
        //name: "",
        //city: "",
        //expirationPeriod: ""
       //};
      console.log(this.certs.agency);
      console.log(this.certs.name);
      console.log(this.certs.city);
      console.log(this.certs.expirationPeriod);
      fetch('api/records/post.php', {
        method:'POST',
        body: JSON.stringify(this.newCtForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.certs.push(json[0]);
      });
      console.log("Great Scott!!!")
    },
    //newPtData() {
      //return {
        //firstName: "",
        //lastName: "",
        //dob: "",
        //sexAtBirth: ""
      //}
    //},
    handleNewPtForm( evt ) {
      // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

      // TODO: Validate the data!

      fetch('api/records/post.php', {
        method:'POST',
        body: JSON.stringify(this.newCtForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.certs.push(json[0]);
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newCtForm);

      this.newCtForm = this.createCerts();
    },
    handleTriageForm( evt ) {
      console.log("Form submitted!");

      this.triageForm.pt = this.activePt;
      console.log(this.triageForm);

    }
  },
  created() {
    fetch("api/records/")
    .then( response => response.json() )
    .then( json => {
      this.certs = json;

      console.log(json)}
    );
    //this.newCtForm = this.newPtData();
  }
})
