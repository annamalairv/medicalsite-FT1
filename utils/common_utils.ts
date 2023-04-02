const myLoader = ({ src, width, quality }:{src:string,width:number,quality?:number}) => {
  if(window &&  typeof window !== "undefined")
    return `${window.location.origin}/${src}?w=${width}&q=${quality || 100}`
    else
     return  ""
    
  }

  export default myLoader;