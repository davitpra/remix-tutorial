import { prisma } from "~/db.server";

type Post = {
    slug: string;
    title: string;
  };

export const getPostListings= async(): Promise<Array<Post>> => {
    return prisma.post.findMany({
        select:{
            slug: true,
            title: true,
        }
    })
}

export const getPosts= async() => {
    return prisma.post.findMany()
}

export const getPost= async( slug: string ) => {
    return prisma.post.findUnique({ 
        where:{ slug }
    })
}