export interface Cate{
    id:number,
    createdAt:string,
    img:string,
    slug:string,
    title:string
  }
  
  export interface Post {
    catSlug: string;
    createdAt: string;
    des: string;
    id: string;
    img: string;
    slug: string;
    title: string;
    userEmail: string;
    userName: string;
    views: number;
    category:string,
    sabk:string, tags:string[]
  }
  export interface UpdatedPost {
    slug: string;
    title: string;
    des: string | undefined;
    sabk: string;
    img: string | File | undefined;
    catSlug: string;
    tags: string[] | null;
    value ?:string
  }
  export interface User {
    _id: string;
    email: string;
    name: string;
    role:string
}

export interface Category {
  id: string;
  slug: string;
  title: string;
  img: string;
  createdAt: string;
}