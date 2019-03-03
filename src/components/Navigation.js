import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

export default () => (
    <StaticQuery
        query={graphql`
            query {
                contentJson {
                    navigations {
                        home
                        projects
                        github
                        resume
                    }
                }
            }
            `
        }
        render={data => (
            <nav className='top-nav text-grey-darkest'>
                <div className='text-2xl'>MKGautam</div>
                <input id='menu-toggle' type='checkbox' />
                <label className='menu-button-container' htmlFor='menu-toggle'>
                    <div className='menu-button' />
                </label>
                <ul className='menu'>
                    {Object.keys(data.contentJson.navigations).map((x, i) => {
                        let external = data.contentJson.navigations[x].includes('://')
                        let resume = x === 'resume'
                        return (
                            <li key={i}>
                                {!external && !resume && <Link
                                    className='uppercase no-underline text-grey-darkest'
                                    to={data.contentJson.navigations[x]}>
                                    {x}
                                </Link>}
                                {(external || resume) && <a
                                    className='uppercase no-underline text-grey-darkest'
                                    href={data.contentJson.navigations[x]}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    {x}
                                </a>}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )}
    />
)
