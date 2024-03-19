import { useRouter } from 'next/router'

const Post = () => {
    
    const router = useRouter()
    const { a, foo } = router.query
    console.log(a)
    return <p>Post: {a} </p>
}

export default Post