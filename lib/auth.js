import bcrypt from 'bcrypt';
import { verify } from './token';

export const hashPassword = (password) => {
    return new Promise( (resolve, reject) => {
        bcrypt.genSalt(10, (error, salt) => {
            if(error) return reject(error);

            bcrypt.hash(password, salt, (error, hash) => {
                if(error) return reject(error);
                return resolve(hash);
            });
        });
    });
}

export const authenticate = (password, hash) => {
    return new Promise( (resolve, reject) => {
        bcrypt.compare(password, hash, (err, res) => {
            if(err) return reject(err);
            return resolve(res);
        });
    });
};

export const authorize = (req, res, next) => {
    let apiToken = req.headers['x-api-token'];
    verify(apiToken, next);
    next();
};