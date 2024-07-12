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
export interface Friend {
  createdAt: string;
  des: string;
  id: string;
  img: string;
  slug: string;
  title: string;
sabk:string[];
name:string;

}
export interface UpdatedData{
  des: string | undefined;
  
  title: string;
sabk:string[] | undefined;
name:string;
img:string | File | undefined;
}

export interface Reply {
  id: string;
  createdAt: string;
  des: string;
  commentId: string;
  userEmail: string;
  userName: string;
  user: {
      role:string;
      id: string;
      name: string;
      email: string;
      emailVerified: string | null;
      image: string | null;
  }


}

export interface Friend{
  id:string,
  createdAt:string,
  img:string,
  slug:string,
  name:string,des:string,poem:string
  sabk:string[],
}