//1 პუნქტი
let Number = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < Number.length; i++) {
    console.log([i]);
}

//2 პუნქტი
   let secondNumber = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,];
   let i = 0;

    while (i <=15) {
        console.log([i]);
        i++;
        
    }
//3 პუნქტი
let thirdNumber = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
do {
    
} while (i < thirdNumber.length) {
    console.log(thirdNumber[i]);
    i++;
}   

//4 პუნქტი
 const numbers = [45, 56, 78, 89, 101, 234, 333, 457];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }   

    //5 პუნქტი
    const currenday= new Date().getDay();
    switch (currenday) {
        case 0:            console.log("დღე კვირა");
            break;  
        case 1:            console.log("დღე ორშაბათი");
            break;
        case 2:            console.log("დღე სამშაბათი");
            break;
        case 3:            console.log("დღე ოთხშაბათი");
            break;
        case 4:            console.log("დღე ხუთშაბათი");
            break;
        case 5:            console.log("დღე პარასკევი");
            break;
        case 6:            console.log("დღე შაბათი");
            break;

        default:           console.log("არასწორი დღე");
            break;
    }
}