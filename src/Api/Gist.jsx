const url = 'https://gist.githubusercontent.com/Ignaulis/3a7f3cd8136880111206cd834b0d0c77/raw/d5b6fd161701f8b8fe1b0da46fcb014ade9b2f01/iphones.json'

export const fetchedProducts = async () => {

    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (err) {
        console.log('No good', err);
    }
}