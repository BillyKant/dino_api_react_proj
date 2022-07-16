let token = `99ecc5f85c625ac71e7c7bd31893cd27822ed0564adcade5`

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://dino-park-api.herokuapp.com/api/dinos`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    create: async(data: any = {}) => {
        const response = await fetch(`https://dino-park-api.herokuapp.com/api/dinos`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://dino-park-api.herokuapp.com/api/dinos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Update new data on server')
        }

        return await response.json()
    },
    delete: async(id:string) => {
        const response = await fetch(`https://dino-park-api.herokuapp.com/api/dinos/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if(!response.ok){
            throw new Error('Failed to Delete new data on server')
        }

        return await response.json()
    }
}