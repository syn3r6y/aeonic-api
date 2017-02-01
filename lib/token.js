import jwt from 'jwt-simple';
import moment from 'moment';
//let secret = process.env.TOKEN_SECRET;
let secret = "allTh3Tok3nszb34aeonic";

// Generate a token
export const generate = (user) => {
    const expires = moment().add(7, 'days').valueOf();
    return jwt.encode({ iss: user.email, exp: expires}, secret);
};

// Verify a token
export const verify = (token, next) => {
    console.log('token', token);
    if(!token){
        let notFoundError = new Error('Token not found');
        notFoundError.status = 404;
        return next(notFoundError);
    }
    if(jwt.decode(token, secret) <= moment().format('x')){
        let expiredError = new Error('Token has expired');
        expiredError.status = 401;
        return next(expiredError);
    }
};