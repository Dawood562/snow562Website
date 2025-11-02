export enum Author {
  DAWOOD = "Dawood",
}

export const STATUS_INFO: Record<Author, { name: string; imageurl: string; colour: string }> = {
    [Author.DAWOOD]: {
        name: "Dawood", 
        imageurl: "https://assets.snow562.com/images/metwo.webp", 
        colour: "#2162AF", 
    }
}