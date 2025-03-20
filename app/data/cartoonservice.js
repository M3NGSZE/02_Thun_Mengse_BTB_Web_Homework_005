export async function getAllCartoons(id = "", search = ""){
    try {
        const response = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon?genre=${id}&search=${search}`, {
            caches: "force-cache",
            next: { revalidate: 5 },
        })

        const result = await response.json()
        return result
    } catch (err) {
        return []
    }
}

export async function getAllCartoonGenres(){
    try{
        const response = await fetch("https://nextjs-homework005.vercel.app/api/cartoon_genre",{
            caches: "force-cache",
            next: { revalidate: 5 },
        })

        const result = await response.json()
        return result
    }catch(err){
        return []
    }
}

export async function getAllCartoonGenreById(id) {
    try {
        const response = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon_genre/search?genre=${id}`, {
            caches: "force-cache",
            next: { revalidate: 5 },
        })

        const result = await response.json()
        return result
    } catch (err) {
        return []
    }
}

export async function getCartoonById(id) {
    try {
        const response = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon/${id}`, {
            caches: "force-cache",
            next: { revalidate: 5 },
        })

        const result = await response.json()
        return result
    } catch (err) {
        return []
    }
}