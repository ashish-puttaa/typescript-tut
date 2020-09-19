/* Never indiates that the function never produces a value */

function generateError(message: string, code: number): never {
   throw { message: message, errorCode: code };
}

function infiniteLoop(): never {
   while (true) {}
}

generateError('An error occurred!', 500);
