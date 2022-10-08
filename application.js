Vue.component("message-board",{
props: ['front','back','objurl'],

data : function(){
  return{

  }
},
computed: {
  imglink: function(){
    return this.front;
  },
  backlink: function(){
    return this.back
  },
  urlback: function(){
    return this.objurl
  }
},
template:
`<div class="card">
<div class="card-side front">
  <img style='objext-fit : cover' :src = "imglink">
</div>
<div class="card-side back">
  
  <a :href = "urlback"><img style='objext-fit : cover' :src = "backlink"></a>
</div>
</div>
`
// data: function(){
//     return{
//     visitor_message: "",
//     messages: [],
//     visitor_name: ""
// }
// },
// methods: {
//     sayHi: function () {

//         this.messages.push({ "visitor_name": this.visitor_name, "visitor_message": this.visitor_message });
//         this.visitor_name = "";
//         this.visitor_message = "";
//     }
// },
// computed: {
//     count: function () {
//         return this.visitors.length
//     }
// }

}
)
var app = new Vue({
    el: '#app'

})