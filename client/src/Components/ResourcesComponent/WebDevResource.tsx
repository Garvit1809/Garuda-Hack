import React from "react";
import styled from "styled-components";
import Navbar from "../GeneralComponents/Navbar";

const Section = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  h2,
  h3,
  h4,
  height,
  h6 {
    margin: 0;
  }

  p{
    width: 70%;
  }
  
  h3{
    width: 70%;
    font-weight: 500;
    /* border: 1px solid red; */
  }

  ul,ol{
    /* border: 1px solid red; */
    width: 70%;
  }
`;

const Heading = styled.div`
  width: 80%;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: 600;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Start = styled.div`
width: 70%;
margin: 0 auto;
margin-bottom: 1rem;
`;

const WebDevResource = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Heading>Roadmap to Become a Web Developer in 2022</Heading>
        <Start>
          Web Developer/ Full Stack Web Developer – How do you feel when you tag
          yourself with such titles? A long journey takes place to be called by
          such names. In the beginning, you might feel bored or terrified, but,
          trust me, this is the most popular and interesting field one should
          work on. You can also become a web developer provided you know why you
          want to learn it. According to a study, there are approximately 23
          million software developers worldwide and the population growth is
          going to increase day by day. Now if you don’t know about web
          development, no worries! All your doubts will get cleared here.
        </Start>
        <p>
          Who’s a web developer? Those websites which you scroll to are created
          by none other than web developers. A person who creates amazing
          websites for businesses and startups. A full-stack web developer looks
          after both the front-end and the back-end parts. The front-end deals
          with how the websites look when delivered to the customers while the
          back-end stores and processes all the data safely.{" "}
        </p>
        <p>
          Also, to bring to your notice, web developers are highly paid
          professionals. Most Software Developers work as Web Developers. MNCs
          also hire professionals/freshers based on their interest in web
          development. No matter what the situation would be web developers will
          always be in demand and for this, you don’t have to care whether it’s
          WFH (Work From Home) or WFO (Work From Office). This job requires
          dedication, patience, and eagerness to learn every day and play with
          technology. From Big MNCs to startups, everyone needs web developers
          to see growth in their business. But before we start this journey, you
          all should have a clear idea of why do you want to be a web developer?
        </p>
        <p>
          In this resource, we will discuss the Web Development Roadmap 2022.
          Let’s begin!!
        </p>
        <p>Here’s a step-by-step process:</p>
        <ol>
          <li>Choose a technology on which you want to work</li>
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>Database</li>
          <li>Version Control System</li>
          <li>Build Projects</li>
        </ol>
        <h2>1. Choose a Technology</h2>
        <p>
          A full-stack development comprises front-end, back-end, and database
          management. Choosing a technology on which you want to work depends on
          individuals, requirements, and applications. Few technologies on which
          you can work and are trending:
        </p>
        <p>A. MERN – The most popular and trending technology.</p>
        <ul>
          <li>MongoDB – A NoSQL database that deals with data.</li>
          <li>
            Express – A framework for NodeJS and handles GET, PUT, POST, DELETE
            functions.
          </li>
          <li>
            React – A JavaScript library for building User Interfaces, building
            single-page applications.
          </li>
          <li>NodeJS – An open-source server environment.</li>
        </ul>
        <p>
          B. MEAN – The major difference between MERN and MEAN is MERN (written
          in JavaScript) works on React whereas MEAN deals with Angular (a
          framework written in TypeScript).{" "}
        </p>
        <h2>2. Frontend Development</h2>
        <p>
          Front-End is the UI (User Interface), it deals with the website’s
          overall appearance, on how interactive and dynamic it is. For
          mastering it, get clear with all the elements of HTML, CSS, and
          JavaScript.
        </p>
        <ul>
          <li>
            HTML (HyperText Markup Language) – Start with the basic application
            of HTML by creating a small website that includes all the elements.
            Play with tables, and forms, and try adding images and links to the
            website to make it more eye-catching which in return makes your work
            efficient. Click here to read about the conventions and best
            practices of HTML.
          </li>
          <li>
            CSS (Cascading Style Sheets) – If you’re a person who loves
            creativity, you must go through CSS. Using CSS, you can add colors
            to your website, give borders to the headings or paragraphs, build
            the navigation bar, play with the icons, font, and text, and many
            more things like that. Make the website responsive i.e., how it
            looks on different screen sizes. The most popular CSS framework used
            is Bootstrap.
          </li>
          <li>
            JavaScript – This is the programming language of the web. Learn
            about DOM (Document Object Model), and API (Application Program
            Interface) properly.
          </li>
          <li>
            Frameworks – It is a platform for building software applications. It
            includes programs, code libraries, and compilers which when brought
            together enable the development of a project or system. These
            frameworks make components reusable. Examples of frameworks are –
            React, Angular, Vue, etc.{" "}
          </li>
        </ul>
        <h2>3. Backend Development</h2>
        <p>
          The code that runs on the server, has logic to send the appropriate
          data from the client and receive it from the server. Also, it includes
          the database which stores all of the data of the application. It
          consists of three parts: a server, an application, and a database.
          Here, the code written by developers transfers information from the
          database to the browser. Code written by back-end developers
          communicates information from the database to the browser.
        </p>
        <p>
          Skills you need to have to back-end developer: programming languages,
          frameworks, databases, servers, and API (Application Program
          Interface).
        </p>
        <ul>
          <li>
            Programming Languages – Back-end developers should know at least one
            of the programming languages like Java, Python, and JavaScript.
            JavaScript would be the best choice as this can be used in both the
            front-end and back-end.
          </li>
          <li>
            Frameworks – Frameworks are generally components or functions that
            are implemented to improve the performance of development. It
            includes the library of tools and modules that builds the
            architecture of a website. Several popular back-end frameworks are
            Express, Django, Ruby on Rails, etc
          </li>
          <li>
            Database – Various DBMS technology should be known such as MongoDB,
            MySQL, Oracle, SQL Server, etc. It handles with storage and
            management of data.
          </li>
          <li>
            Server – A system providing data, services, or programs is known as
            clients over a network. They share (send and receive) the
            data/information between client and server.
          </li>
          <li>
            API (Application Program Interface) – It is a set of defined rules
            that enables communication or acts as an intermediary between two
            applications. Request from the user is completed by the response
            from the server.
          </li>
        </ul>
        <p>
          Client-Server Architecture: This architecture is designed to
          understand the request made and the response received. Whenever
          there’s a request from the client-side for data, the server responds
          to that request. There comes, the picture of a database which is
          explained in the next step, that stores the information needed to be
          retrieved.
        </p>
        <h2>4. DataBase</h2>
        <p>
          The database is a collection of data from which we can manage data
          (store and retrieve). There are two types of databases: relational
          (SQL) and non-relational (NoSQL). Some popular databases are:
        </p>
        <ul>
          <li>
            MySQL – These are relational database management system, store and
            manages data.
          </li>
          <li>
            MongoDB – It is a NoSQL database; Finds key-value DB, graph DBs
          </li>
          <li>
            VoltDB – It follows a relational pattern, they use memory to store
            data.
          </li>
        </ul>
        <h2>5. Version Control</h2>
        <p>
          When certain libraries are added to each application, it gets updated
          in a period which in turn creates a new version of it. Using Git is a
          very good practice if you’re working on applications. Git is an
          open-source platform where the entire code exists from the initial
          time. It is secure, flexible, easy to edit, and restores the code. It
          has repositories where all files including the codebase are saved and
          one can make changes according to the requirement. Anyone can
          collaborate and make changes accordingly.
        </p>
        <h3>A list of Version Control Systems are: </h3>
        <ol>
          <li>GitHub</li>
          <li>GitLab</li>
          <li>Beanstalk</li>
          <li>Apache Subversion</li>
          <li>Mercurial</li>
        </ol>
        <h3>Benefits of Version Control:</h3>
        <ul>
          <li>It helps you maintain code.</li>
          <li>You can re-use it whenever needed.</li>
          <li>Saves the changes made.</li>
          <li>Provides evidence of all changes made.</li>
          <li>Collaborate and contribute.</li>
        </ul>
        <h2>6. Build Projects</h2>
        <p>When you’re all done with the theory part, do build some projects to be well-versed with full-stack development. You implement all the front-end, and back-end sides of a project along with database handling, then you get perfect in web development. As you build something, you get familiar with the technical concepts like how APIs connect the front-end to the back-end, how the database manages data, and various other steps followed during web development. Thus, cultivate a habit of building projects to become a successful web developer.</p>
      </Section>
    </>
  );
};

export default WebDevResource;
