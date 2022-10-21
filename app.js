
    var displayInputSec,displayInputMin,displayInputHr;
    


    var displaySeconds=document.getElementById("sec");
    var displayMinutes=document.getElementById("min");
    var displayHour=document.getElementById("hr");
    function abc(X){
   
        X.disabled=true;
        
        displayInputHr=document.getElementById("displayInputHr").value;
        displayInputSec=document.getElementById("displayInputSec").value;
         displayInputMin=document.getElementById("displayInputMin").value;
         
      displayHour.innerHTML=displayInputHr;
      displaySeconds.innerHTML=displayInputSec;
      displayMinutes.innerHTML=displayInputMin;



      setInterval(() => {
    
                      if(displayHour.innerHTML==0){
                        displayHour.innerHTML=00;
                                                     if(displayMinutes.innerHTML==0){
                                                            displayMinutes.innerHTML=00;
                                                               if(displaySeconds.innerHTML==0){
                                                                    displaySeconds.innerHTML=00;
                                                                    }
                                                                else{
                                                                     displaySeconds.innerHTML--;
                                                                    }

                                                     }
                                                     else{
                                                        if(displaySeconds.innerHTML==0){
                                                            displayMinutes.innerHTML--;
                                                            displaySeconds.innerHTML=59;
                                                            }
                                                        else{
                                                             displaySeconds.innerHTML--;
                                                            }

                                                        } 
                      } 
                      
                      else{
                        if(displaySeconds.innerHTML==0){
                            displayMinutes.innerHTML--;
                            if(displayMinutes.innerHTML==0){
                                displayHour.innerHTML--;
                                displayMinutes.innerHTML=59
                            }

                            displaySeconds.innerHTML=59;
                        }
                        else{
                            
                            displaySeconds.innerHTML--

                        }

                      }
        
        }, 900);
        
          

    
    }


    
function reset(){
    
     displayHour.innerHTML="00"
      displaySeconds.innerHTML="00";
      displayMinutes.innerHTML="00";
}     
   

