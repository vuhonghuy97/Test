let count = 0;
const start = () => {
    let result = Math.floor(Math.random() * 20);
    console.log(result)
    count += 1;
    let number = document.getElementById("num").value;
    console.log(number)
    if(count > 3) {
        alert("Hết lượt dự đoán");
    } else {
        if(number <1 || number >20) {
            alert("Mời nhập lại")
        } else {
            if(number === result) {
                alert("correct")
            } else {
                alert(`Số đúng là: ${result} `)
            }
    
        }
    }
}


    

