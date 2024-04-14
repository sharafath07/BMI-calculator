
function toNext() {
    if (event.key === 'Enter')
        calculateBMI()
}

function calculateBMI() {
    const weightElement = document.querySelector('.weight');
    let weight = Number(weightElement.value);

    const heightElement = document.querySelector('.height');
    let height = Number(heightElement.value);
    const resultELement = document.querySelector('.result');

    let BMI = 0;
    let min ;
    let max ;
    let weightMax ;
    let weightMin ;

    function change() {
        document.querySelector('.btn').innerText = 'Calculated'   
        document.querySelector('.btn').classList.add('active-btn')
    }
    
    if (document.querySelector('.btn').innerText === 'Calculate') {

        BMI = weight/(height*height);
        BMI = BMI.toFixed(1)
    
        for (weightMin = 1; weightMin < 10000; weightMin++) {

            min = weightMin/(height*height);
            min = min.toFixed(1)

            if (min == 18) {
                break;
            }
        }

        for (weightMax = 1; weightMax < 10000; weightMax++) {
            
            max = weightMax/(height*height);
            max = max.toFixed(1)

            if (max == 25) {
                weightMax -= 2
                break;
            }
        }

        if (BMI === Infinity || weight === 0 || height === 0)
            alert('Wrong input')
        else if (weightMax === 10000 || weightMin === 10000 ) {
            if (BMI>24.9){
                if(BMI>30){
                    resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at obuseweight range.`;
                    resultELement.classList.add('red')
                    change()
                } else {
                    resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at overweight range.`;
                    resultELement.classList.add('light-red')
                    change()
                }
            } else if (BMI<1) {
                resultELement.innerHTML = `You're Body Mass Index is less than 1.<br> It is at underweight range.`;
                resultELement.classList.add('yellow')
            } else if(BMI<18.5) {
                resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at underweight range.`;
                resultELement.classList.add('yellow')
                change()
            } else if (BMI>18.5 && BMI<24.9) {
                resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at healthy weight range.`;
                resultELement.classList.add('green')
                change()
            } 
        } else if (BMI>24.9)
        {
            if(BMI>30){
                resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at obuseweight range.<br> Your healthy weight range is between  ${weightMin} kg and ${weightMax} kg`;
                resultELement.classList.add('red')
                change()
            } else {
                resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at overweight range.<br> Your healthy weight range is between  ${weightMin} kg and ${weightMax} kg`;
                resultELement.classList.add('light-red')
                change()
            }
        } else if(BMI<18.5) {
            resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at underweight range.<br>Your healthy weight range is between  ${weightMin} kg and ${weightMax} kg`;
            resultELement.classList.add('yellow')
            change()
        } else if (BMI>18.5 && BMI<24.9) {
            resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at healthy weight range.<br> Your healthy weight range is between  ${weightMin} kg and ${weightMax} kg`;
            resultELement.classList.add('green')
            change()
        } else if (BMI<0) {
            resultELement.innerHTML = `You're Body Mass Index is less than .<br> It is at underweight range.<br>Your healthy weight range is between  ${weightMin} kg and ${weightMax} kg`;
            resultELement.classList.add('yellow')
        } else { 
                alert('Wrong input')
        }

    } else {
        document.querySelector('.btn').innerText = 'Calculate'
        resultELement.innerHTML = ''
        resultELement.classList.remove('light-red')
        resultELement.classList.remove('red')
        resultELement.classList.remove('green')
        resultELement.classList.remove('yellow')
        document.querySelector('.btn').classList.remove('active-btn')
    }

}

