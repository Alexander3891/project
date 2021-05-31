"use strict";

try {
    console.lo('Normal');
} catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.stack);

} finally {
    
    // always work in finish
}


// if error code continue to work!!!
console.log('Continue');
 