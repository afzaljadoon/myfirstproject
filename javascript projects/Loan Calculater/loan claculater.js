// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    //   Hide results
    document.getElementById('results').style.display = 'none';
    // show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// Calculate Results

function calculateResults(){
    // console.log('Calculating...');

    // UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlypayment = document.getElementById('monthly-payment');
    const totalpayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const claculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedpayments = parseFloat(years.value)*12;

    // Compute monthly payment
    const x = Math.pow(1 + claculatedInterest, calculatedpayments);
    const monthly = (principal*x*claculatedInterest)/(x-1);

    if(isFinite(monthly)){
       monthlypayment.value = monthly.toFixed(2);
       totalpayment.value = (monthly * calculatedpayments).toFixed(2);
       totalInterest.value = ((monthly * calculatedpayments)-principal).toFixed(2);

    //    show results
    document.getElementById('results').style.display = 'block';
    // Hide loader
    document.getElementById('loading').style.display = 'none';
    }else{
        showError('Plz check your numbers');
    }

    
}

    //   Show error
    function showError(error){
         //   Hide results
          document.getElementById('results').style.display = 'none';
         // Hide loader
          document.getElementById('loading').style.display = 'none';
        // create div
        const errorDiv = document.createElement('div');

        // Get element
        const card = document.querySelector('.card');
        const heading = document.querySelector('.heading');

        // Add class
        errorDiv.className = 'alert alert-danger';

        // create text node and append to div
        errorDiv.appendChild(document.createTextNode(error));

        // insert error above heading
        card.insertBefore(errorDiv, heading);

        // Clear error after 3 seconds
        setTimeout(clearError, 3000);
    }

    // 
    function clearError() {
        document.querySelector('.alert').remove();
    }