const url = 'https://gist.githubusercontent.com/Ignaulis/3a7f3cd8136880111206cd834b0d0c77/raw/c4f0f7e8cfa9e6b75752ff17f7575de16ae474d6/iphones.json'

export const fetchedProducts = async () => {

    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (err) {
        console.log('No good', err);
    }
}