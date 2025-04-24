const url = 'https://gist.githubusercontent.com/Ignaulis/3a7f3cd8136880111206cd834b0d0c77/raw/070d8691786141d7c8a12cd9ed9b216f8ecb44fd/iphones.json'

export const fetchedProducts = async () => {

    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (err) {
        console.log('No good', err);
    }
}