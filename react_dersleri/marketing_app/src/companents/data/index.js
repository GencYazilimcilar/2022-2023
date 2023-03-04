
export const getData=async(url)=>{
    let json=await fetch(url);
    let data=await json.json();
    return data;
}