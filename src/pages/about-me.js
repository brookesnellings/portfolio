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
    font-size: 2em;
    font-weight: bold;
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
              Software Engineer. Design Thinker. Problem Solver.
            </t.H1>
            <t.LargeP align="center" max70>
              <p>
                {' '}
                Most recently, I was a Software Engineer on the instructional staff for Hack Reactor at Galvanize in
                Austin, a modern school providing advanced technical training in an immersive setting. I have a Bachelor
                of Science in Psychology from the University of Florida, and my background is in the arts and
                nonprofits. While I was in college, I started a theatre company with some friends called Ghostlight and
                worked as a theatre stage manager. After college, I was the birthmother coordinator/advocate for an
                adoption agency, a mental health awareness advocate at the National Alliance on Mental Illness, and
                office manager for an animal rescue. I loved making a positive impact while delivering high-quality and
                compassionate service to clients, and found I thrive when breaking down complex problems to arrive at
                creative, elegant solutions. I was naturally drawn to programming as another way to make life better for
                people. Technology is ingrained in our daily lives, and I’m passionate about building thoughtfully
                designed and executed applications that create intuitive and joyful user experiences for everyone.{' '}
              </p>
              <p>
                When I'm not coding, I like to volunteer my time as an organizer of the Hack Reactor Women's Mentorship
                Program, an amazing and important effort to support and encourage women as they transition into careers
                in tech. My hometown is New Orleans, the Big Easy, but I love living in Austin. I’m an abstract painter,
                and you can sometimes find me at the Blanton Museum of Art getting inspired by one of my favorite
                paintings, Joan Mitchell's "Rock Bottom". I'm also an avid reader, record collector, theatre-goer, film
                lover, and (most importantly, of course) cat mom to Archie, the most dog like cat you will ever meet.
              </p>
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
