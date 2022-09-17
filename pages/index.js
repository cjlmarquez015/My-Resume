import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

      <p><b>Contact Information:</b></p>

      <p>Address: 145 Centro Street San Nicolas Mexico Pampanga</p>

      <p>Landline: 8750266</p>

      <p>Cellphone: +639 657 249 719 </p>

      <p>Email Address: cemjecermarquez015@outlook.com </p>

      <p>Facebook Link: <Link href="https://www.facebook.com/cemjecer015/">cemjecer015</Link></p>

      <p><b>Description:</b></p>

      <p>BS CPE Student with Basic knowledge on C#, HTML, CSS, and Javascript</p>

      <p><b>Skills:</b></p>
      <ul>
        <li>Basic HTML</li>
        <li>Basic CSS</li>
        <li>Basic Javascript</li>
        <li>Csharp Fundamentals</li>
      </ul>

      <p><b>Educational Attainment:</b></p>
      <div>
        <p style={{textAlign: "left"}}><b>Tertiary Level</b></p>
        <p style={{textAlign: "left"}}>
        Bachelor of Science in Computer Engineering
        </p>
        <p style={{textAlign: "left"}}>
        University of the Assumption
        </p>
        <p style={{textAlign: "left"}}>
        Unisite Subdivision, Barangay Del Pilar, 
        </p>
        <p style={{textAlign: "left"}}>
        City of San Fernando Pampanga 
        </p>
        <p style={{textAlign: "left"}}>
        2018-Present
        </p>
      </div>

      <div>
        <p style={{textAlign: "left"}}><b>Secondary Level</b></p>
        <p style={{textAlign: "left"}}>
        Our Lady of Fatima University
        </p>
        <p style={{textAlign: "left"}}>
        City of San Fernando Pampanga
        </p>
        <p style={{textAlign: "left"}}>
        Senior High School S.Y. 2016-2018 
        </p>
        <br></br>
        <p style={{textAlign: "left"}}>
        Diosdado Macapagal HighSchool, Inc.
        </p>
        <p style={{textAlign: "left"}}>
        Sto. Domingo Mexico, Pampanga
        </p>
        <p style={{textAlign: "left"}}>
        Junior High School S.Y. 2012-2016
        </p>
      </div>

      <div>
        <p style={{textAlign: "left"}}><b>Primary Level</b></p>
        <p style={{textAlign: "left"}}>
        Mexico Elementary School
        </p>
        <p style={{textAlign: "left"}}>
        Sto. Cristo Mexico, Pampanga
        </p>
        <p style={{textAlign: "left"}}>
        Elementary S.Y. 2006-2012
        </p>
      </div>
      <br></br>
        <p style={{textAlign: "left"}}>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
