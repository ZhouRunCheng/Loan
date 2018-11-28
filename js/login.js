var username = $('#username');
var password = $('#password');
var formBody = $('#form-body');
var button = $('button');
var cout = 0;



new Vue({
  el:'#login',
  data:{
    name:null,
    pass:null,
    show:false,
  },
  methods:{
    loging:function(){
        event.preventDefault();
        // var len = this.name.toString().length;
        // var pass = password.val();
        // console.log('pass',pass);
        if(password == "123"){
          console.log('密码正确！正在进入系统...');
          location.href = "http:\\www.baidu.com";
        }
        else{
          alert("密码错了。")
        }
        // console.log(this.name.toString().length);
        // alert('name:'+this.name+'pass:'+this.pass)
    },
  }
})
