import styles from '../page.module.css'

export function Headline(props){
    return(
        <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/{props.title}</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            </a>
          </div>
        </div>
    );
}