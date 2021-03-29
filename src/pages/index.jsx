import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Siriwat Chinpattanavanich.
        </BigTitle>
        <Subtitle>
          Experienced Full Stack Developer with a demonstrated history of working in the Technology company and Well-known Digital Banking. Strong software engineering professional with a Bachelor’s Degree focused in Computer Science.
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Portfolio</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="AIMC e-Learning"
            link="https://aimc-staging.swiftlet.co.th/login"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            E-Learning platform for Association of Investment Management Companies.
          </ProjectCard>
          <ProjectCard
            title="ISUZU - Model comparison"
            link="https://digital-project.imit.co.th/model-comparison/vietnam-lhd"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            ISUZU - Model comparison web platform for compare car model of ISUZU.
          </ProjectCard>
          <ProjectCard
            title="Best Prototype of PossAbility Acceleration 2020 Award"
            link="https://www.linkedin.com/in/siriwat-chinpattanavanich-96ab95136"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Joined and become the winner of prototype track with the Insurance Share Buy, Mobile insurance platform.
          </ProjectCard>
          <ProjectCard
            title="Blue CONNECT - OR @KASIKORNBANK PCL."
            link="https://play.google.com/store/apps/details?id=com.kasikornbank.wallet.blueconnect.and"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Blue CONNECT (PTT e-Wallet) mobile application for Promotion, Payment, Find shop near by and e-Wallet system of PTT.
          </ProjectCard>
          <ProjectCard
            title="Terebinth"
            link="https://tereb.in.th/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Terebinth ERP is a business process management and information system (ERP) on the Cloud.
          </ProjectCard>
          <ProjectCard
            title="Narra"
            link="javascript:void(0)"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
           Narra is an Audio Description apps for foreigner person to create understanding language by hearing.
          </ProjectCard>
          <ProjectCard
            title="Pannana"
            link="https://play.google.com/store/apps/details?id=com.spritestudio.ad"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Pannana is an Audio Description apps for visually impaired person to create vision by hearing.
          </ProjectCard>
          <ProjectCard
            title="Advisor assistant"
            link="http://stat.kmutnb.ac.th:3000/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Advisor assistant will help advisor for student project management.
          </ProjectCard>
          <ProjectCard
            title="โตโยต้าแท็กซี่.com"
            link="javascript:void(0)"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
           For Sales and marketing. 
          </ProjectCard>
          <ProjectCard
            title="Second Class Honors in Bachelor's Degree of Computer science"
            link="https://www.linkedin.com/in/siriwat-chinpattanavanich-96ab95136"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Second Class Honors in Bachelor's Degree of Computer science.
          </ProjectCard>
          <ProjectCard
            title="3rd runner-up award of Young Technopreneur 2014 Award"
            link="https://www.linkedin.com/in/siriwat-chinpattanavanich-96ab95136"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Joined and become the 3rd runner-up award of Young Technopreneur 2014.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Siriwat Chinpattanavanich" />
          <AboutSub>
            SIRIWAT CHINPATTANAVANICH <br/>
            Software Engineer at KASIKORN Business-Technology Group [KBTG]
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Experienced Full Stack Developer with a demonstrated history of working in the Technology company 
          and Well-known Digital Banking. Highly skilled in Ruby on Rails, Golang, Node.js, React and Cloud Computing Technology (GCP,AWS), 
          Had been a winner/participated in many software competitions. Strong software engineering professional with 
          a Bachelor’s Degree focused in Computer Science. 
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:siriwat.chin@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/siriwat-chinpattanavanich-96ab95136/">LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2021 by Siriwat Chinpattanavanich.{' '}
          <a href="https://github.com/joijiprogram">Github Repository</a> &{' '}
          <a href="https://medium.com/@chinsiriwat">Medium</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
