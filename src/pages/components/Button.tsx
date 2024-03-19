import styles from './Button.module.css'

interface IButtonProps {
    children?: any;
    onClick?: any
}
export default function Button(props: IButtonProps) {
    return <button className={styles.error} style={{ display: 'block', background: 'gray', fontSize: 30 }} onClick={props.onClick}>{props.children}</button>
}