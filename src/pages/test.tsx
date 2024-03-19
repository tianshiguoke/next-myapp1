import { useEffect, useState } from "react";
import Button from './components/Button'
import { getWinWidth } from '@/service/win'

import Image from 'next/image'
import profilePic from '../../public/me.webp'
export default function Test() {
    const [pageShow, SetPageShow] = useState(false)
    const [count, SetCount] = useState(0)
    const wid = getWinWidth()
    useEffect(() => {
        SetPageShow(true)
    })
    if (!pageShow) return null
    return (<div>
        <div>sfaf</div>
        <Image width={100} src={profilePic} alt="Picture of the author" />
        <Image width={100} height={100} src='https://pic.rmb.bdstatic.com/bjh/240303/dump/851bb22597c5aa226c7ef76495db0827.jpeg' alt="Picture of the author" />
        <Button onClick={() => { SetCount(count + 1) }}>{count}</Button>
        <div>宽度：{window.document.body.offsetWidth}</div>
        <div>{wid}</div>
    </div>)
}

// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: { a: 1 } } // See the "paths" section below
//         ],
//         fallback: true,// false, or 'blocking' // See the "fallback" section below
//     };
// }