import Vue from "vue";

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
      el: "#app",
      data:{
          tasks: [
              {activity: "take car", isDone: true },
              {activity: "go to mums", isDone: false },
              {activity: "kill phil", isDone: false },
              {activity: "have a nice cold pint", isDone: false },
              {activity: "wait for this whole thing to blow over", isDone: false }
          ],
          newTask: ""
      },
        methods: {
            saveNewTask: function(){
                this.tasks.push(
                    {activity: this.newTask, isDone: false}
                );
                this.newTask = ""
            },
            doTask: function(index){
                this.tasks[index].isDone = true;
            }
        }

    })
})