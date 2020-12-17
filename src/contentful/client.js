import * as contentful from 'contentful';

export class Client {
    static contentful = contentful.createClient({
        space: process.env.REACT_APP_CONTENT_ENV,
        accessToken: process.env.REACT_APP_CONTENT_TOKEN
    });

    static sendInBlue = {
        createContact(email, attributes) {
            return fetch('https://api.sendinblue.com/v3/contacts', {
                method: 'post',
                body: JSON.stringify({
                    email,
                    attributes: {
                        ...attributes
                    }
                }),
                headers : {
                    'Content-type': 'application/json',
                    'api-key': process.env.REACT_APP_SENDINBLUE
                }
            })
        }
    }
}

export default Client;
