export enum Author {
  DAWOOD = "DAWOOD",
}

export const STATUS_INFO: Record<Author, { name: string; imageurl: string; colour: string }> = {
    [Author.DAWOOD]: {
        name: "Dawood", 
        imageurl: "https://assets.snow562.com/images/logos/frameworks/css.png", 
        colour: "#2162AF", 
    }
}