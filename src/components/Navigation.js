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
                        about
                        blog
                        github
                    }
                }
            }
            `
        }
        render={data => (
            <section className='top-nav text-grey-darkest'>
                <div className='text-2xl'>MKGautam</div>
                <input id='menu-toggle' type='checkbox' />
                <label className='menu-button-container' htmlFor='menu-toggle'>
                    <div className='menu-button' />
                </label>
                <ul className='menu'>
                    {Object.keys(data.contentJson.navigations).map((x, i) => {
                        let external = data.contentJson.navigations[x].includes('://')
                        return (
                            <li key={i}>
                                {!external && <Link className='uppercase no-underline text-grey-darkest pointer-events-none' to={data.contentJson.navigations[x]}>{x}</Link>}
                                {external && <a className='uppercase no-underline text-grey-darkest' href={data.contentJson.navigations[x]} target='_blank' rel='noopener noreferrer'>{x}</a>}
                            </li>
                        )
                    })}
                </ul>
            </section>
        )}
    />
)
