const checkChar = (str)=>{
    let arr = [];
    let temp = str.split("")
    
    for(let char in temp){
        if(!arr.includes(temp[char])){
            arr.push(temp[char]);
        }
    }

    console.log(arr.join(""));
}

checkChar("Hello");