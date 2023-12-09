import axios from 'axios';


export default class ExampleService {
    static async getExamples(search) {
        if (search === undefined) {
            search = '';
        }
        const response = await axios.get(`/api/v1/examples${search}`)
        return response.data
    }

    static async getExampleDetail(id) {
        const response = await axios.get(`/api/v1/examples/${id}`)
        return response.data
    }
}
