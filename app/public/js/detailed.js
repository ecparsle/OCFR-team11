var app = new Vue({
  el: '#detailedPage',
  data: {
    members: [],
    certs: [],
    filter: {
      fn: ""
    }
  },
  methods: {
    fetchMembers() {
      fetch('api/member/index.php')
      .then(response => response.json())
      .then( json => {
        this.members = json;
        console.log(this.members)});
      },
    fetchCerts() {
      fetch('api/certification/index.php')
      .then(response => response.json())
      .then( json => {
        this.certs = json;
        console.log(this.certs)});
      },
  created() {
    this.fetchMembers();
    this.fetchCerts();
  }
});
