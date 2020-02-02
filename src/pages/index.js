import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import Dex from '../images/dex.jpg';
import Museumly from '../images/museumly.jpg';
import MockEtsy from '../images/mocketsy.jpg';
import FriendTrips from '../images/friendtrips.jpg';
import Dev from '../images/undraw_dev_focus_b9xo.svg';
import Resume from '../assets/BrookeSnellingsResume.pdf';
import { HireMe, LinkButton } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken } from 'polished';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 0px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
    font-size: 1.1em;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
    max-width: 40%;
  }
  ${t.H1} {
    margin: 0 auto 28px auto;
    font-size: 2.5em;
    max-width: 60%;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 0px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Brooke Snellings" className="avatar" />
            <t.H1 primary align="center" max45>
              Hello, my name is Brooke. I am a Software Engineer living in Austin, TX.
            </t.H1>
            <t.LargeP align="center" max45>
              I’m passionate about building beautiful, intuitive web applications through thoughtfully crafted code &
              user-centered design.{' '}
            </t.LargeP>
            <HireMe large onClick={this.openContactPopup} book>
              Hire me
            </HireMe>
          </AboveFold>
          <Content>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Dev} alt="Dev Illustration" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 primary align="center" bold>
                  Who Am I?
                </t.H2>
                <t.P align="left" max70 className="who-desc">
                  I am a full stack software engineer experienced in developing applications using modern JavaScript,
                  React, Node.js, Express, MySQL, PostgreSQL, and MongoDB. I have used Agile methodology in all phases
                  of product development, from planning and designing, to implementing, testing, and deployment. I enjoy
                  learning new technologies, tools, and frameworks to keep up with the ever-evolving nature of the
                  modern web. I am currently seeking opportunities to join a diverse team of engineers who strive to
                  build efficient and accessible software that solves problems for end users, while adding ease and
                  value to their lives.
                </t.P>
                <t.P primary align="center">
                  <HireMe as="a" href={Resume} target="_blank" rel="noopener noreferrer">
                    Download My Resume
                  </HireMe>
                </t.P>
              </DivWrapper>
            </BlockContent>

            <t.H2 primary align="center" bold className="portfolio">
              Portfolio
            </t.H2>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Dex} alt="Dex" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Dex</t.H2>
                <t.P>Project management software utilizing monolithic architecture to simulate Trello</t.P>
                <t.P>
                  Tech Stack: JavaScript / React with Hooks / React-Router / Bootstrap / Figma / Express / PostgreSQL /
                  TravisCI / Jest / Docker / AWS EC2
                </t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/hratx-blue-ocean/hratx42-Dex"
                >
                  View on GitHub
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Museumly</t.H2>
                <t.P>
                  App that allows users to explore museum artwork from the Metropolitan Museum of Art and Harvard Art
                  Museums APIs and curate their own collection
                </t.P>
                <t.P>
                  Tech Stack: JavaScript / React with Hooks / React-Router / React-Bootstrap / Node.js / Express / Axios
                  / MySQL / Heroku
                </t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/brookesnellings/Museumly"
                >
                  View on GitHub
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Museumly} alt="Museumly" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={MockEtsy} alt="MockEtsy" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>MockEtsy</t.H2>
                <t.P>Full stack e-commerce clone using service-oriented architecture </t.P>
                <t.P>
                  Tech Stack: JavaScript / React / React-Bootstrap / Node.js / Express / MySQL / Knex.js / Docker / AWS
                  Elastic Beanstalk & RDS
                </t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/mock-etsy/Item-Details-Microservice"
                >
                  View on GitHub
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>FriendTrips</t.H2>
                <t.P>
                  An app to help groups of friends find affordable flights using the Skyscanner API. It was designed and
                  built within two days as an entry in the Women Who Code Diversity Hackathon.
                </t.P>
                <t.P>
                  Tech Stack: JavaScript / React / Material UI / Node.js / Express / Axios / Docker / AWS EC2 / NGINX
                </t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/friendtrips/diversity"
                >
                  View on GitHub
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={FriendTrips} alt="FriendTrips" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <WorkWithMe>
            <t.H1 green>Get in touch with me</t.H1>
            <t.LargeP>Hiring? Let's chat </t.LargeP>
            <HireMe onClick={this.openContactPopup} book>
              Contact me
            </HireMe>
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;
