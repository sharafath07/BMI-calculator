renderHTML('metric')

function toNext(type) {
    if (event.key === 'Enter')
        renderResult(type)
}

function renderHTML(type) {
    const main = document.querySelector('main')
    let html

    if (type === 'metric'){
        document.querySelector('.standard').classList.add('active')
        document.querySelector('.metric').classList.remove('active')
        html = `
            <p>Enter your weight...</p>
            <input type="number" placeholder="in kilogram(kg)" class="weight">
            <p>Enter your height...</p>
            <div>
                <input type="number" placeholder="in metre(m)" onkeydown="toNext('metric')" class="height">
                <button class="btn" onclick="renderResult('metric')">Calculate</button>
            </div>
            <p class="result"></p>
        `
    } else if (type === 'standard'){
        document.querySelector('.metric').classList.add('active')
        document.querySelector('.standard').classList.remove('active')
        html = `
            <p>Enter your weight...</p>
            <input type="number" placeholder="in pound(Ibs)" class="weight">
            <p>Enter your height...</p>
            <div>
                <input type="number" placeholder="in inche(in)" onkeydown="toNext('standard')" class="height">
                <button class="btn" onclick="renderResult('standard')">Calculate</button>
            </div>
            <p class="result"></p>    
        `
    }
    
    main.innerHTML = html
}

function renderResult(type) {
    const weightElement = document.querySelector('.weight');
    let weight = Number(weightElement.value);

    const heightElement = document.querySelector('.height');
    let height = Number(heightElement.value);
    const resultELement = document.querySelector('.result');

    if (type === 'metric') {
        
        renderResultForMetric(weight, height, resultELement)

    } else if (type === 'standard') {
        
        renderResultForStandard(weight, height, resultELement)

    }

    
}

function renderResultForMetric(weight, height, resultELement){
    
    let BMI = calculateBMI('metric',weight, height)
    let min = calculateMinWeight('metric', height)
    let max = calculateMaxWeight('metric', height)

    if (BMI === Infinity || weight === 0 || height === 0) {

        alert('Wrong input')

    } else if (max === '10000.00' || min === '10000.00' ) {

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

function renderResultForStandard(weight, height, resultELement) {
    BMI = calculateBMI('standard', weight, height)
    min = calculateMinWeight('standard', height)
    max = calculateMaxWeight('standard', height)

    if (BMI === Infinity || weight === 0 || height === 0) {

        alert('Wrong input')

    } else if (max === '10000.00' || min === '10000.00') {

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

            resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at obuseweight range.<br> Your healthy weight range is between  ${min} Ibs and ${max} Ibs`;
            classAdding('red')
            
        } else {

            resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at overweight range.<br> Your healthy weight range is between  ${min} Ibs and ${max} Ibs`;
            classAdding('light-red')
            
        }

    } else if(BMI<18.5) {

        resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at underweight range.<br>Your healthy weight range is between  ${min} Ibs and ${max} Ibs`;
        classAdding('yellow')
        
    } else if (BMI>=18.5 && BMI<=24.9) {

        resultELement.innerHTML = `You're Body Mass Index is ${BMI}.<br> It is at healthy weight range.<br> Your healthy weight range is between  ${min} Ibs and ${max} Ibs`;
        classAdding('green')
        
    } else if (BMI<0) {

        resultELement.innerHTML = `You're Body Mass Index is less than 0.<br> It is at underweight range.<br>Your healthy weight range is between  ${min} Ibs and ${max} Ibs`;
        classAdding('yellow')

    }


}

function calculateBMI(type, weight, height) {
    let BMI = 0

    if (type === 'metric') {

        BMI = weight/(height*height);
        BMI = BMI.toFixed(1)

        return BMI

    } else if (type === 'standard'){

        BMI = 703 * (weight/(height*height))
        BMI = BMI.toFixed(1)
        
        return BMI
    }
}

function calculateMinWeight(type, height) {

    let min

    if (type === 'metric') {

        let j = 1
        while (j < 10000) {
            min = calculateBMI('metric', j, height)

            if (min >= 18.5) {
                return j.toFixed(2)
            }

            j += 0.01
        }
    } else if (type === 'standard'){

        let j = 1
        while (j < 10000) {
            min = calculateBMI('standard', j, height)

            if (min >= 18.5) {
                return j.toFixed(2)
            }

            j += 0.01
        }
        
    }

    
}

function calculateMaxWeight(type, height) {

    let max

    if (type === 'metric') {
        let i = 10000
        while (i > 1) {
            max = calculateBMI('metric', i, height)

            if (max <= 24.9) {
                return i.toFixed(2)
            }

            i -= 0.01
        }
    } else if (type === 'standard') {
        let i = 10000
        while (i > 1) {
            max = calculateBMI('standard', i, height)

            if (max <= 24.9) {
                return i.toFixed(2)
            }

            i -= 0.01
        }
        
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