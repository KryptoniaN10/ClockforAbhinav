document.body.style.backgroundColor="purple"
let element=document.getElementById("myLabel")
element.style.backgroundColor='blue'
element.style.color='red'
document.getElementById("Rate").style.color='white'
document.getElementById("Rate").style.scale=25
         function dateDisplay(){
            date =new Date()
            const Label= document.getElementById("myLabel")
            Label.innerHTML=formatTime(date)
            function formatTime(date){
             hour=date.getHours();
             minute=date.getMinutes();
             second=date.getSeconds();
            amorpm=hour>12? 'PM':'AM'
            hour=(hour%12)||12
            zero()
            
            function zero(){
                if (hour<10){
                   hour='0'+hour
                }
                if (minute<10){
                    minute='0'+minute
                }
                if (second<10){
                    second='0'+second
                }
            }
           return `${hour}:${minute}:${second} ${amorpm}`
        }
           
         }
         let fruits=document.getElementsByName("fruits")
         console.log(fruits)
         setInterval(dateDisplay,10)
         document.getElementById("credits").style.color="white"
