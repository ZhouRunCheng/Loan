;(function(){
  'use strict'

  function copy(obj){
    return Object.assign({},obj);
  }

  new Vue({
    el:'#noticeTask',
    data:{
      noticeList:[],
      current:{},
    },

    mounted:function(){
      var me = this;
      this.noticeList = ms.get('noticeList') || this.noticeList;
      console.log(this.noticeList[1]);
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
        this.reset()
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
          return item.id = id;
        })
      },
      next_id:function(){
        return this.noticeList.length + 1;
      },
    },
    watch:{		//监控list数组，若发生变化，则自动储存数组。
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
