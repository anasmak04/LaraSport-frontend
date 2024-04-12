import { Tag } from "primeng/tag";
import { category } from "../category/category";
import { User } from "../user/user";
import { Tags } from "../tags/Tags";

export interface Post {
    id: number;
    title: string;
    content: string;
    publish_date: Date;
    category_id: number;
    author: User;
    authorId: number;
    tags: Tags[];
}

export interface PostResponsee {
    message: string;
    post: Post;
}