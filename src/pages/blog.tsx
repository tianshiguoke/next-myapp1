
import React from 'react';
import { InferGetStaticPropsType } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
type Post = {
    author: string
    content: string
    list: []
}
export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/hello')
    const posts: any = await res.json()


    const postsDirectory = path.join(process.cwd(), 'src/json/')
    const filenames = await fs.readdir(postsDirectory, 'utf8')
    const posts1 = filenames.map(async (filename) => {
        const filePath = path.join(postsDirectory, filename)
        const fileContents = await fs.readFile(filePath, 'utf8')

        return {
            id: filename,
            filename,
            content: fileContents,
        }
    })


    return {
        props: {
            posts: await Promise.all(posts1),
            list: posts?.list,
            a: filenames,
        },
        revalidate: 10,
    }
}

// export async function getStaticPaths() {
//     const res = await fetch('http://localhost:3000/api/hello')
//     const posts = await res.json()

//     // Get the paths we want to pre-render based on posts
//     const paths = posts.map((post: any) => ({
//         params: { id: post.id },
//     }))

//     // We'll pre-render only these paths at build time.
//     // { fallback: blocking } will server-render pages
//     // on-demand if the path doesn't exist.
//     return { paths, fallback: 'blocking' }
// }

interface BlogProps {
    title?: string;
    description?: string;
    posts?: any
}

// const Blog: React.FC<BlogProps> = ({ posts }) => {

//     return (
//         <ul>
//             {posts?.list?.map((post: any) => (
//                 <li key={post.name}>{post.name}</li>
//             ))}
//         </ul>
//     )
// }

function Blog({ posts }: any) {
    return (
        <ul>
            {posts.map((post: any) => (
                <li key={post.filename}>
                    <h3>{post.filename}</h3>
                    <p>{post.content}</p>
                </li>
            ))}
        </ul>
    )
}

export default Blog