import * as contentful from 'contentful';

export class Client {
    static contentful = contentful.createClient({
        space: '',
        accessToken: ''
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
                    'api-key': ''
                }
            })
        }
    }
}

export default Client;
