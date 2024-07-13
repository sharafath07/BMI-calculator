function toNext() {
    if (event.key === 'Enter')
        renderResult()
}

function renderResult() {
    const weightElement = document.querySelector('.weight');
    let weight = Number(weightElement.value);

    const heightElement = document.querySelector('.height');
    let height = Number(heightElement.value);
    const resultELement = document.querySelector('.result');

    let BMI = calculateBMI(weight, height)
    let min = calculateMinWeight(height)
    let max = calculateMaxWeight(height)
    
    if (BMI === Infinity || weight === 0 || height === 0) {

        alert('Wrong input')

    } else if (max === 10000 || min === 10000 ) {

        if (BMI>24.9){

            if(BMI>30){

                resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at obuseweight range.`;
                classAdding('red')
                
            } else {

                resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at overweight range.`;
                classAdding('light-red')
                
            }

        } else if (BMI<1) {

            resultELement.innerHTML = `You're Body Mass Index is less than 1.<br> It is at underweight range.`;
            classAdding('yellow')

        } else if(BMI<18.5) {

            resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at underweight range.`;
            classAdding('yellow')
            
        } else if (BMI>=18.5 && BMI<=24.9) {

            resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at healthy weight range.`;
            classAdding('green')

        } 

    } else if (BMI>24.9) {

        if(BMI>30){

            resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at obuseweight range.<br> Your healthy weight range is between  ${min} kg and ${max} kg`;
            classAdding('red')
            
        } else {

            resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at overweight range.<br> Your healthy weight range is between  ${min} kg and ${max} kg`;
            classAdding('light-red')
            
        }

    } else if(BMI<18.5) {

        resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at underweight range.<br>Your healthy weight range is between  ${min} kg and ${max} kg`;
        classAdding('yellow')
        
    } else if (BMI>=18.5 && BMI<=24.9) {

        resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at healthy weight range.<br> Your healthy weight range is between  ${min} kg and ${max} kg`;
        classAdding('green')
        
    } else if (BMI<0) {

        resultELement.innerHTML = `You're Body Mass Index is less than 0.<br> It is at underweight range.<br>Your healthy weight range is between  ${min} kg and ${max} kg`;
        classAdding('yellow')

    }
}

function calculateBMI(weight, height) {
    let BMI = 0

    BMI = weight/(height*height);
    BMI = BMI.toFixed(1)

    return BMI
}

function calculateMinWeight(height) {

    let min

    let j = 1
    while (j < 1000) {
        min = calculateBMI(j, height)

        if (min >= 18.5) {
            return j.toFixed(2)
        }

        j += 0.01
    }
}

function calculateMaxWeight(height) {

    let max

    let i = 1000
    while (i > 1) {
        max = calculateBMI(i, height)

        if (max <= 24.9) {
            return i.toFixed(2)
        }

        i -= 0.01
    }
}

function classAdding(name) {

    const resultELement = document.querySelector('.result');

    if (name === 'red') {
        resultELement.classList.remove('light-red')
        resultELement.classList.remove('yellow')
        resultELement.classList.remove('green')
        resultELement.classList.add('red')
    } else if (name === 'light-red') {
        resultELement.classList.remove('red')
        resultELement.classList.remove('yellow')
        resultELement.classList.remove('green')
        resultELement.classList.add('light-red')
    } else if (name === 'green') {
        resultELement.classList.remove('light-red')
        resultELement.classList.remove('yellow')
        resultELement.classList.remove('red')
        resultELement.classList.add('green')
    } else if (name === 'yellow') {
        resultELement.classList.remove('light-red')
        resultELement.classList.remove('red')
        resultELement.classList.remove('green')
        resultELement.classList.add('yellow')
    }
}

