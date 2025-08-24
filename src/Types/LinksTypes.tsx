



// for tech Icons
export type TechIconType = {
  name: string;
  link: string; 
};


// for navLinks
export type NavLinkType = {
    name:string,
    href:string
}


// Projects Detials types
type resourcesType = {
    liveDemo:string,
    github:string
}

export type ProjectDetailsType = {
      name:string,
      href:string,
      about:string,
      tech:string[],
      resources:resourcesType
}