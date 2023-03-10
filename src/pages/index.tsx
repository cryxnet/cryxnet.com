import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SkillsBoard from '@/components/skillsboard';
import CompanyCard from '@/components/companies';
import Box from '@mui/material/Box';
import ProjectCard from '@/components/projectcard';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>CRYXNET | Portfolio</title>
        <meta
          name="description"
          content="portfolio website of a software engineer and cybersecurity researcher named cryxnet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box className={styles.cryxnetLogo}>
          <Box sx={{ paddingTop: 50 }}>
            <h1>"CRY乂NET"</h1>
            <h1>"CRY乂NET"</h1>
            <h1>"CRY乂NET"</h1>
            <h1>"CRY乂NET"</h1>
          </Box>
        </Box>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ boxShadow: 'revert' }}
        >
          <path
            fill="#000"
            fill-opacity="1"
            d="M0,192L34.3,192C68.6,192,137,192,206,176C274.3,160,343,128,411,144C480,160,549,224,617,224C685.7,224,754,160,823,122.7C891.4,85,960,75,1029,80C1097.1,85,1166,107,1234,133.3C1302.9,160,1371,192,1406,208L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>

        <Box id="quote" className={styles.quote}>
          <blockquote className={styles.blockquote}>
            <p>
              You can't connect the dots looking forward; you can only connect
              them looking backwards. <br /> So you have to trust that the dots
              will somehow connect in your future.
              <br /> <br />- Steve Jobs
            </p>
          </blockquote>
        </Box>

        <Box className={styles.aboutme} id="aboutme">
          <h1>[ -- About Me -- ]</h1>
          <hr />
          <Box className={styles.aboutmeContainer}>
            <p>
              Hi there! I'm a software engineer apprentice currently @ SIX Group
              AG and a cybersecurity researcher with a passion for all things
              related to red teaming, exploit development, pentesting, digital
              forensics, incident handling and threat detection. I love to dive
              into the intricacies of cybersecurity and work on finding new ways
              to keep systems safe and secure. Aside from my work in
              cybersecurity, I'm also a skilled software engineer with
              experience in back-frontend development using tools such as
              Next.js, Reactj.js, TypeScript, MongoDB, GraphQL, Neo4j and
              Express.js. I'm always on the lookout for new challenges and
              opportunities to expand my knowledge and skills. Besides that I
              can build Ethereum Smart Contracts in Solidity to solve current
              problems. Overall, I'm dedicated to advancing the field of
              cybersecurity and helping to build a safer and more secure digital
              world. If you have any questions or would like to connect, feel
              free to reach out!
            </p>
            <hr />
          </Box>
        </Box>

        <Box className={styles.companies} id="companies">
          <Typography
            variant="h1"
            style={{
              textAlign: 'center',
              marginBottom: 100,
              fontWeight: 555,
              fontSize: '10vmin',
              fontFamily: "'Comfortaa', cursive",
            }}
          >
            [ -- Companies -- ]
          </Typography>

          <Grid
            container
            spacing={10}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item sm={12} md={6} display="flex" justifyContent="center">
              <CompanyCard
                companyName="SIX Group"
                description="I have the privilege of working at SIX Group AG Company as a software engineering apprentice in the cybersecurity department. During my time there, I worked on innovative projects and collaborated with a team of skilled people to develop solutions and perform security improvements that protect client information from cyber threats. Through hands-on experience in areas such as penetration testing, incident response, digital forensic and threat detection I developed valuable skills. I was fortunate to work alongside passionate and experienced people who were committed to helping me grow as a software engineer."
                image="/logo/companies/sixGroup.png"
              />
            </Grid>
          </Grid>
        </Box>

        <Box className={styles.skillsboard} id="skills">
          <Typography
            variant="h1"
            style={{
              maxWidth: '100%',
              textAlign: 'center',
              marginBottom: 100,
              fontWeight: 555,
              fontFamily: "'Comfortaa', cursive",
              fontSize: '10vmin',
            }}
          >
            [ -- Skills Board -- ]
          </Typography>

          <SkillsBoard />
        </Box>

        <Box className={styles.projects} id="projects">
          <Typography
            variant="h1"
            style={{
              textAlign: 'center',
              marginBottom: 100,
              fontWeight: 555,
              fontSize: '10vmin',
              fontFamily: "'Comfortaa', cursive",
            }}
          >
            [ -- Projects -- ]
          </Typography>
          <Grid
            container
            spacing={10}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item sm={12} md={6} display="flex" justifyContent="center">
              <ProjectCard
                image="projects/mienainet.png"
                title="MienaiNet"
                content="The MienaiNet Framework is a next generation fully customizable C2-Framework. It comes with a C2-Controlling Server, Commanding Dashboard and prebuild agents. It's not like every C2-Framework ;)"
                url="https://github.com/MienainetFramework"
              />
            </Grid>
            <Grid item sm={12} md={6} display="flex" justifyContent="center">
              <ProjectCard
                image="projects/crawnet.png"
                title="CRAWNET"
                content="CRAWNET is a graph based domain discovery tool to gather information about domains and potential relationships with other actors. With help of Graph Databases each node represents a domain and their attributes like records, ips, services related with the ip and much more."
                url="https://github.com/cryxnet/crawnet"
              />
            </Grid>
            <Grid item sm={12} md={6} display="flex" justifyContent="center">
              <ProjectCard
                image="projects/packageradar.png"
                title="PackageRadar"
                content="PackageRadar is a analyzing tool for Network Package Captures"
                url="https://github.com/cryxnet/packageradar"
              />
            </Grid>
            <Grid item sm={12} md={6} display="flex" justifyContent="center">
              <ProjectCard
                image="projects/sekiganware.png"
                title="SekiganWare"
                content="SekiganWare (was) a 0-Day malware that used the follina exploit to get into machines. The mechanism to load the malware into the system enables to bypass EDRs, AntiVirus and other detection systems. It provides a simple reverse shell and predefined exploits to get the most out of a target. It also came with a prebuild ransomeware function."
                url="https://github.com/cryxnet/sekiganware"
              />
            </Grid>

            <Grid item sm={12} md={6} display="flex" justifyContent="center">
              <ProjectCard
                image="projects/blog.png"
                title="CRYXNET Blog"
                content="I build my blog using nextjs, graphql and nextui"
                url="https://github.com/cryxnet/blog"
              />
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
}
