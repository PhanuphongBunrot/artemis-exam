
document.getElementById('send_num').addEventListener("click", function () {
    const date = document.getElementById('number').value;
    
    
    
    
    
    
    
    if (date) {
        
        setStringHdp(date)    
        
        
    } else {
        document.getElementById('answer').innerHTML = "Please enter a number.";
    }

    
});


function setStringHdp  (num){
    let number = Number(num);
        
        let answer = number  % 1;
       
        let  answer_to_front = 0 
    if(number != 0 ){
        if (answer.toFixed(2) == 0.00 ||answer.toFixed(2) == 0.50) {
            answer_to_front = number
                
            document.getElementById('answer').innerHTML = ` ${answer_to_front.toFixed(1)}`;
        }else{
            let  answer_to_front_reduce =  0
            let  answer_to_front_increase =  0
            if (number < 0 ){
               answer_to_front_reduce =  number + 0.25
               answer_to_front_increase =  number - 0.25
             }else{
                answer_to_front_reduce =  number - 0.25
               answer_to_front_increase =  number + 0.25
             }
            
            document.getElementById('answer').innerHTML = `${answer_to_front_reduce}/${answer_to_front_increase} `;
        }
    }else{
        document.getElementById('answer').innerHTML = `${number}`;
    }
        
}











