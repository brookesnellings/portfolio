import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding-bottom: 100px;

  ${t.H1} {
    margin-bottom: 25px;
  }
  ${t.H4} {
    line-height: 1.14;
  }
  ${media.tablet`background-position: center top 0px;`};
`;

const AboutMeWrapper = styled.div`
  ${Mixins.wrapper}
  .m-b-60 {
    margin-bottom: 60px;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    min-height: 540px;
    ${media.phone`min-height: 620px;`};
  }
  .gatsby-image {
    ${media.tablet`text-align: center;`}
    div {
      padding: 0;
    }
    picture img {
      max-width: 85%;
      position: relative;
      ${media.tablet`max-width: 80%;`}
    }
  }
  .avatar {
    max-width: 400px;
    width: 80%;
    margin: 0 auto 100px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
`;

class AboutMe extends React.Component {
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
      <AboutMeWrapper>
        <Layout theme="white" openContactPopup={this.openContactPopup}>
          <AboveFold>
            <t.H1 green align="center">
              Brooke Snellings - Software Engineer
            </t.H1>
            <t.LargeP align="center" max70>
              <p>  My name is Brooke Snellings, and I’m a full-stack software engineer focusing on building beautiful web applications through thoughtfully crafted code & user-centric design. I have experience developing applications using JavaScript, React, Node, Express, and SQL and no SQL databases using agile methodology in all phases of product development, from planning to implementing, testing, and deployment. I enjoy learning new technologies, tools, and frameworks to keep up with the ever-evolving nature of the modern web.</p>
              <p>My background is in the arts and nonprofits, specifically theatre, newborn adoption, and animal rescue, and I loved making a positive impact while delivering high-quality and compassionate service to clients. I thrive when breaking down complex problems to arrive at creative, elegant solutions, and enjoy collaborating with a team to deliver a polished product on a timely schedule.</p>
              <p>I’m based in Austin, and am currently looking for opportunities to join a diverse team of passionate engineers who strive to build the most efficient, intuitive, and accessible software that solves problems for end users, while adding ease and value to their lives.</p>

            </t.LargeP>
          </AboveFold>
          <Content>
            <Img fluid={data.avatarAbout.childImageSharp.fluid} alt="Brooke Snellings" className="avatar" />
          </Content>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </AboutMeWrapper>
    );
  }
}

export default AboutMe;

export const pageQuery = graphql`
  query {
    avatarAbout: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;
