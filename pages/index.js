//LIBS
import Head from 'next/head'
import styles from '../styles/Home.module.css'


//COMPONENTS
import Navigation from '../components/navigation'
import Intro from '../components/intro'
import Aboutme from '../components/aboutme'
import Resume from '../components/resume'
import Project from '../components/projects'




export default function Home() {
  return (
    <div>
      <Head>
        <title>Deepak Kumar</title>
        <meta name="author" content="Deepak Kumar">
        <meta name="Description" content="Deepak Kumar aka Dazzler kumar | Frontend Developer | If you can think it, I can web it." />
        <meta name="keywords" content="Deepak Kumar, Dazzler Kumar, Frontend developer, website developer, bbdnitm, babu banarasi das, lucknow, web developer in lucknow,  "></meta>
        <link rel="icon" href="/indian-man.png" />
      </Head>
      <Intro sectionID={"top"}/>
      <Aboutme sectionID={"aboutme"}/>
      <Resume sectionID={"resume"}/>
      <Project sectionID={"project"}/>
        

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
