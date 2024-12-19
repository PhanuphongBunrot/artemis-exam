fetch('example.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch file');
        }
        return response.text(); 
    })
    .then(data_text => {
        
    let array = data_text.split("\n");  
    let new_data = array.map(row => row.split("|"));
     
  
    
     let uniqueData = [];
     let seen = new Set();
     new_data.shift();
     new_data.forEach(row => {
         
         if (row.length > 0 && !seen.has(row[0])) {
             uniqueData.push(row); 
             seen.add(row[0]);     
         }
     });
     
        let data_done = [];
      let new_text =''
     uniqueData.forEach($val =>{
            
            new_text   =  $val[7]+' '+$val[8].replace(/\r/g, "")+' '+$val[2]+' '+$val[3]
                data_done.push(new_text); 
            
     })

      console.log(data_done)
      
    })
    .catch(error => {
        console.error('Error:', error);
    });