export const getGifs = async(categoria)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=EZfi7RsgiX3nXnjIloD5pu5zCVPZRo2q`;
    const res = await fetch(url);
    const {data} = await res.json();
    

    const gifs = data.map(img =>{
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })

    return gifs;
  }