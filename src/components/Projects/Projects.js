import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import uniswap from "../../Assets/Projects/uniswap.png";
import sog from "../../Assets/Projects/sog.jpg";
import frontenddev from "../../Assets/Projects/frontenddev.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bookheap from "../../Assets/Projects/bookheap.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Vector1002/express_chat"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Programs of Study"
              description="Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module."
              ghLink="https://github.com/Vector1002/programs-of-study"
              demoLink="https://holokai.byuh.edu/programs-of-study"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frontenddev}
              isBlog={false}
              title="Frontend Dev"
              description="Technology used: React Js, Mantine UI, Context API. From responsive design and UI patterns to reusable code snippets, these resources help me deliver clean, efficient solutions. By integrating these tools into my workflow, I ensure that projects are both scalable and maintainable."
              ghLink="https://github.com/Vector1002/frontenddev"
              demoLink="https://www.frontenddev.site/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookheap}
              isBlog={false}
              title="Online Book Store"
              description="An online bookstore built using the MERN stack that allows users to search, browse, and purchase books. The backend securely handles user authentication, orders, and payment processing. The React frontend provides an intuitive and responsive interface for a seamless shopping experience."
              ghLink="https://github.com/Vector1002/bookheap" 
              demoLink="https://bookheap-app.netlify.app/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sog}
              isBlog={false}
              title="Solana Staking for Meme coins"
              description="Role: Blockchain developer. NFT marketplaces are a booming trend today They allow minting and trading of NFTs – non-fungible tokens that possess certain value in the crypto world. Anything can become an NFT – from a work of art to a real estate item – making the use cases for NFTs unlimited."
              demoLink="https://signifty.me" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uniswap}
              isBlog={false}
              title="Smart Contract"
              description="Technology used: TypeScript, JavaScript, Shell. Discover millions deployed Smart Contracts across over 260 blockchains.Easy to read and write Smart Contract's data with a friendly UI.Sign your request in many ways: with Browser using Metamask Wallet, Binance Wallet, or with TrustWallet's WalletConnect protocol, Coinbase's WalletLink protocol, or importing your wallet from key.  "
              ghLink="https://github.com/Vector1002/UI-smart-contract/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
