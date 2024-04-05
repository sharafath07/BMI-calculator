
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
    
    if (document.querySelector('.btn').innerText === 'Calculate') {

        BMI = Math.trunc(weight/(height*height));
        console.log(BMI)
        for (weightMin = 1; weightMin < 10000; weightMin++) {

            min = Math.trunc(weightMin/(height*height));

            if (min == '18') {
                break;
            } else {
                continue;
            }
        }

        for (weightMax = 1; weightMax < 10000; weightMax++) {
            
            max = Math.trunc(weightMax/(height*height));

            if (max == 25) {
                weightMax -= 3
                break;
            } else {
                continue;
            }
        }

        if (BMI>24.9)
        {
            if(BMI>30)
                resultELement.innerHTML = `You're Body Mass Index is ${BMI}.\n It is at obuseweight range.\n Your healthy weight range is between  ${weightMin} kg and ${weightMax} kg`;
            else
                resultELement.innerHTML = `You're Body Mass Index is ${BMI}.\n It is at overweight range.\n Your healthy weight range is between  ${weightMin} kg and ${weightMax} kg`;
        }
        else if(BMI<18.5)
            resultELement.innerHTML = `You're Body Mass Index is ${BMI}.\n It is at underweight range.\n Your healthy weight range is between  ${weightMin} kg and ${weightMax} kg`;
        else if (BMI>18.5 && BMI<24.9)
            resultELement.innerHTML = `You're Body Mass Index is ${BMI}.\n It is at healthy weight range.\n Your healthy weight range is between  ${weightMin} kg and ${weightMax} kg`;
        else
            resultELement.innerHTML = 'Wrong input'

        document.querySelector('.btn').innerText = 'Calculated'   
    } else {
        document.querySelector('.btn').innerText = 'Calculate'
        resultELement.innerHTML = ''
    }

}

