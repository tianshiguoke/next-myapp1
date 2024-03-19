// // components/ExampleDialog.js
import { useState } from 'react'
// import { Dialog } from '@reach/dialog'
// // import VisuallyHidden from '@reach/visually-hidden'
// // import '@reach/dialog/styles.css'

function ExampleDialog(props: any) {
    const [showDialog, setShowDialog] = useState(false)
    const open = () => setShowDialog(true)
    const close = () => setShowDialog(false)

    return (
        <div>
            <button onClick={open}>Open Dialog</button>

        </div>
    )
}
export default ExampleDialog
