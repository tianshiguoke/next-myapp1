import Blog from '@/pages/blog'
interface BlogProps {
    title?: string;
    description?: string;
    posts?: any
}
function About({ posts }: BlogProps) {

    // console.log(posts)
    return <div>About

        <div>
            {/* <Blog posts={[{ title: posts?.text }]} /> */}
        </div>
    </div>
}
// 此函数在构建时被调用
export async function getStaticProps(context: any) {
    console.log(context)
    // 调用外部 API 获取博文列表
    const res = await fetch('http://localhost:3000/api/hello')
    const posts = await res.json()
    if (!posts) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
        // return {
        //     notFound: true,
        // }
    }
    // 通过返回 { props: { posts } } 对象，Blog 组件
    // 在构建时将接收到 `posts` 参数
    return {
        props: {
            posts,
        },
    }
}
export default About

