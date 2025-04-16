const url = 'https://gist.githubusercontent.com/Ignaulis/3a7f3cd8136880111206cd834b0d0c77/raw/f50c1b0ad5ef3f7aa6cfd98d8be39f8828820247/iphones.json'

export const fetchedIphones = async () => {

    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (err) {
        console.log('No good', err);
    }
}