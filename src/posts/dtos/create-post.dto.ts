import { postStatus } from "../enums/postStatus.enum";
import { postType } from "../enums/postType.enum";

export class CreatePostDto {
    title: string;
    postType: postType;
    lug: string;
    status: postStatus;
    content?: string;
    schema?: string;
    featuredImageUrl?: string;
    publihOn?: Date;
    tags?: string[];
    metaOptions: [{key: 'sidebarEnabled'; value: true}]
}