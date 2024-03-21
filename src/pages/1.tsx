import dynamic from 'next/dynamic'
import { useState } from 'react'
import Head from 'next/head'

export const config = { amp: true }
const names = ['Tim', 'Joe', 'Bel', 'Max', 'Lee']
const DynamicComponent = dynamic(() => import('./components/Button'))
export default function Page() {
    const [results, setResults] = useState()
    const date = new Date()
    return (
        <div>
            <DynamicComponent children='111' />
            <div>
                <Head>
                    <script
                        async
                        key="amp-timeago"
                        custom-element="amp-timeago"
                        src="https://cdn.ampproject.org/v0/amp-timeago-0.1.js"
                    />
                </Head>

                <p>Some time: {date.toJSON()}</p>
                <amp-timeago
                    width="0"
                    height="15"
                    datetime={date.toJSON()}
                    layout="responsive"
                >
                    .
                </amp-timeago>
            </div>
            <input
                type="text"
                placeholder="Search"
                onChange={async (e) => {
                    const { value } = e.currentTarget
                    // Dynamically load fuse.js
                    const Fuse = (await import('./fuse')).default

                    const fuse = new Fuse(names)
                    debugger
                    // setResults(fuse.search(value))
                }}
            />
            <pre>Results: {JSON.stringify(results, null, 2)}</pre>
        </div>
    )
}