const url = 'https://gist.githubusercontent.com/Ignaulis/3a7f3cd8136880111206cd834b0d0c77/raw/ac858b11dcda5586486c1c0bc535df4665793187/iphones.json'

export const fetchedProducts = async () => {

    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (err) {
        console.log('No good', err);
    }
}