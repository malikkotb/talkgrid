// define how data for a post looks like

export type PostType = {
    title: string
    id: string
    createdAt: string
    user: {
        name: string
        image: string
    }
    comments?: {
        createdAt: string
        id: string
        postId: string
        userId: string
    }[]
}