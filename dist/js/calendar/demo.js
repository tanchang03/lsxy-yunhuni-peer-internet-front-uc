$(document).ready(function(){var e=new Date,t=e.getMonth()+1,n=e.getFullYear();theMonths=["January","February","March","April","May","June","July","August","September","October","November","December"],theDays=["S","M","T","W","T","F","S"],events=[["5/"+t+"/"+n,"Meet a friend","#","#fb6b5b","Contents here"],["8/"+t+"/"+n,"Kick off meeting!","#","#ffba4d","Have a kick off meeting with .inc company"],["18/"+t+"/"+n,"Milestone release","#","#ffba4d","Contents here"],["19/"+t+"/"+n,"A link","https://github.com/blog/category/drinkup","#cccccc"]],$("#calendar").calendar({months:theMonths,days:theDays,events:events,popover_options:{placement:"top",html:!0}})});