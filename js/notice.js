;(function(){
  'use strict'

  function copy(obj){
    return Object.assign({},obj);
  }


  new Vue({
    el:'#noticeTask',
    data:{
      noticeList:[],
      setnotice:[],
      current:{},
      pnow:null,
      ptime:null,
      ptitle:null,
      pcontent:null,
    },

    mounted:function(){
      var me = this;
      this.noticeList = ms.get('noticeList') || this.noticeList;
      // alert("标题："+this.noticeList[1].title)
    },

    methods:{
      merge:function(){
        var id = this.current.id;
        if(id){
          var index = this.find_index(id);
          Vue.set(this.noticeList,index,copy(this.current));
        }else{
          var title = this.current.title;
          if(!title && title !==0) return;
          var todo = Object.assign({},this.current);
          todo.id = this.next_id();
          this.noticeList.push(todo);
        }
        this.push_time();
        this.reset();
      },
      push_time:function(){
        var now = new Date();
        this.noticeList.now = now;
        console.log(this.noticeList.now);
      },
      reset:function(){
        return this.current = {};
      },
      remove:function(id){
        var index = this.find_index(id);
        this.noticeList.splice(index,1);
      },
      set_current:function(todo){
        this.current = copy(todo);
      },
      find_index:function(id){
			return this.noticeList.findIndex(function(item){
				return item.id == id;
			})
		},
      next_id:function(){
        return this.noticeList.length + 1;
      },
      toggle_detail:function(id){
        var index = this.find_index(id);
        console.log(this.noticeList[index].now);
        this.pnow = this.noticeList[index].now;
        this.ptime = this.noticeList[index].time;
        this.ptitle = this.noticeList[index].title;
        this.pcontent = this.noticeList[index].content;
      },
    },
    watch:{		//监控noticeList数组，若发生变化，则自动储存数组。
		noticeList:{
			deep:true,
			handler:function(n,o){
				if(n){
					ms.set('noticeList',n);
				}else{
					ms.set('noticeList',[]);
				}
			}
		}
	},
  })



})();
