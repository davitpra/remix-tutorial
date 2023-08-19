import { prisma } from "~/db.server";
import type { Post as PostHTML } from "@prisma/client";

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

export async function createPost(
    post: Pick<PostHTML, "slug" | "title" | "markdown">
    ) {
    return prisma.post.create({ data: post });
}