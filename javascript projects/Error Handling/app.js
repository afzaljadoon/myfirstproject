    // const user = {email : 'jdoe@gmail.com'};
    // try{
        // Produce A ReferenceError
        // myFunction();

        // Produce A TypeError
        // null.myFunction();

        // Will Produce A SyntaxError
        // eval('Hello World!!');

        // Will Produce A URIError
        // decodeURIComponent('%')

    //     if(!user.name){
    //         // throw 'User Has No Name';
    //         throw new SyntaxError(`User Has No Name`)
    //     }
    // }
    // catch(e){
        // console.log(`${e.name} : ITS NULL STUPID...`)
        // console.log(`User Error : ${e.message}`);
        // console.log(e.message);
        // console.log(e.name);
        // console.log(e instanceof ReferenceError);
        // console.log(e instanceof TypeError);
    // }finally{
        // console.log('Finally runs regaurdless of result...')
    // }
    // console.log('Program Continous....')


    // Form Blur Event Listeners
    document.getElementById('name').addEventListener('blur', validateName);

    document.getElementById('zip').addEventListener('blur', validateZip);

    document.getElementById('email').addEventListener('blur', validateEmail);

    document.getElementById('phone').addEventListener('blur', validatePhone);

    function validateName () {
        const name = document.getElementById('name');
        const re = /^[a-zA-Z]{2,10}$/;

        if(!re.test(name.value)){
            name.classList.add('is-invalid');
        }else{
            name.classList.remove('is-invalid');
        }
    }

    function validateZip () {
        const zip = document.getElementById('zip');
        const re = /^[0-9]{5}(-[0-9]{4})?$/;

        if(!re.test(zip.value)){
            zip.classList.add('is-invalid');
        }else{
            zip.classList.remove('is-invalid');
        }
    }

    function validateEmail () {
        const email = document.getElementById('email');
        const re = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;

        if(!re.test(email.value)){
            email.classList.add('is-invalid');
        }else{
            email.classList.remove('is-invalid');
        }
    }

    function validatePhone () {
        const phone = document.getElementById('phone');
        const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

        if(!re.test(phone.value)){
            phone.classList.add('is-invalid');
        }else{
            phone.classList.remove('is-invalid');
        }
    }

