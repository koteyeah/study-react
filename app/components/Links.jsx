import styles from '/app/page.module.css'

const ITEMS =[
    { href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Docs",
    description: "Find in-depth information about Next.js features and API."
    },
    { href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Learn",
    description: "Learn about Next.js in an interactive course with quizzes!"
    },
    { href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Templates",
    description: "Explore starter templates for Next.js."
    },
    { href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Deploy",
    description: "Instantly deploy your Next.js site to a shareable URL with Vercel."
    }
]

export function Links() {
  return (
    <div className={styles.grid}>
        {ITEMS.map(item=>{
            return (
                <a
        href={item.href} className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
    >
        <h2>
        {item.title} <span>-&gt;</span>
        </h2>
        <p>{item.description}</p>
    </a>
            )
        })}
    </div>
  )
}
