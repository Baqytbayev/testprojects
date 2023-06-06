import {randomInstances} from "./randomInstances";


class RandomApi {
    getRandom = async () => {
        try {
            const response = await randomInstances.get('?results=10')
            return response.data
        }catch (e) {
            console.log(e)
        }
    }
}
export const randomApi = new RandomApi()