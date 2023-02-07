//     const one = (callback) => {
//         setTimeout(() => {
//             console.log("one")
//             callback();
//         }, 5000);
       
//     }

//     const two = (callback) => {
//         setTimeout(() => {
//             console.log("two")
//             callback();
//         }, 3000);
        
//     }

//     const three = (callback) => {
//         console.log("three")
//         callback();
//     }

//     // CALL BACK HELL
//    one(
//     () => {
//         two(() => {
//             three(() => {
//                 console.log("done")
//             })
//         })
//     }
//    )

    //    ES6
    // PROMISSES
    const one = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("one")
                resolve();
            }, 5000);
        })
    }

    const two = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("two")
                resolve();
            }, 1000);
        })
    }

    const three = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("three")
                resolve();
            }, 3000);
        })
    }

    // THIS IS SMALLER HELL
    // one().then(() => {
    //     two().then(() => {
    //         three().then(() => {
    //             console.log("done")
    //         })
    //     })
    // })

    // AWAIT ASYNC
    // ES5
    // async function run (){
    //   await one();
    //   await two();
    //   await three();
    // }
    // run();

    // ES6
    const run = async () => {
        await one();
        await two();
        await three();
    }
     
    run();

 
