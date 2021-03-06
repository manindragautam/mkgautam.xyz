import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import UnHead from "../components/UnHead";
import Space from "../components/Space";
import SiteReport from "../images/site-report.png";

const Projects = () => (
  <Layout>
    <Helmet>
      <title>Manindra Gautam</title>
      <meta
        name="Description"
        content="Manindra Gautam's portfolio and writings on Ruby on Rails, Node, React, Redux, GIT, Heroku Cloud, Linux, Python and Docker"
      ></meta>
      <link rel="canonical" href="https://mkgautam.xyz/projects" />
    </Helmet>
    <div className="w-full bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal text-justify">
      <div className="mb-8">
        <UnHead title="Ardentia Technologies Pvt Ltd" />
        <ul className="pt-4 text-base lg:text-lg">
          <li className="my-2">
            <strong>PMS</strong>: PMS (Practice Management System) is a dental
            technology system only for the countries in UK. It consists of
            various modules like online store, employee shift management system
            etc.
          </li>
        </ul>
        <UnHead title="Akaruilabs India Pvt Ltd" />
        <ul className="pt-4 text-base lg:text-lg">
          <li className="my-2">
            <a
              className="font-bold"
              href="https://www.equitymultiple.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Equity Multiple
            </a>
            : EQUITYMULTIPLE is an online marketplace for private real estate
            transactions. It enables individual and institutional investors to
            invest alongside the market’s most sophisticated sponsors in many
            commercial real estate assets.
          </li>
          <li className="my-2">
            <a
              className="font-bold"
              href="https://zeehaus.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zeehaus
            </a>
            : Zeehaus is a real estate equity sharing marketplace and ownership
            management platform. It is the first and only, one-stop marketplace
            to connect homeowners and homebuyers with investors who are enabled
            to purchase fractional ownership in US real estate digitally, having
            a reward sharing community and equity sharing marketplace that helps
            you buy, sell, or get you investing in property the simple and
            secure way levaraging Blockchain technology. By digitalizing the
            buying process, lowering the cost of acquiring the property and
            associated monthly housing costs, while simultaneously enabling
            sound investment opportunities for investors interested in the real
            estate market.
          </li>
        </ul>
        <Space />
        <UnHead title="Other Projects" />
        <ul className="pt-4 text-base lg:text-lg">
          <li className="my-2">
            <a
              className="font-bold"
              href="https://mkgautam.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              MKGautam.XYZ
            </a>
            : This project is my personal portfolio site, built with&nbsp;
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>{" "}
            (a free and open source developer framework based on React for
            building blazing fast websites and apps) , hosted by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.netlify.com/"
            >
              Netlify
            </a>{" "}
            (cloud host for static websites), &nbsp;resume compiles everytime
            from&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.latex-project.org/"
            >
              Latex
            </a>{" "}
            file source using&nbsp;
            <a href="https://www.npmjs.com/package/node-latex">
              node-latex
            </a>{" "}
            node module. &nbsp;site report generated below using&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developers.google.com/web/tools/lighthouse/"
            >
              Lighthouse chrome extension
            </a>{" "}
            developed by Google developers.
            <img
              className="mt-8"
              src={SiteReport}
              alt="mkgautam.xyz site report"
            />
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default Projects;
