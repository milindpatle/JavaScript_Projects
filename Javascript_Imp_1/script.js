const countValue=document.querySelector('#counter');

let increment=()=>{
    let value=parseInt(countValue.innerText);
    value=value+1;
    //set the value on ui
    countValue.innerText=value;
}

let decrement=()=>{
    let value=parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText=value;

}