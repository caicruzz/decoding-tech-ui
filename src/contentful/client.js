import * as contentful from 'contentful';

export class Client {
    static contentful = contentful.createClient({
        space: '',
        accessToken: ''
    });
}

export default Client;
