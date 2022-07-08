import React from 'react'
import { FaDotCircle } from "react-icons/fa"

const Card = ({ Data }) => {
    const { company, logo, featured, neww,
        position, role, level, postedAt,
        contract, location, languages, tools
    } = Data

    return (
        <article>
            <div className={`${featured ? "Job Featured " : "Job"}`}>
                <div className='Job-details'>
                    <div className='Top'>
                        <div>
                            <img src={require("./images/" + logo + ".svg")} alt='pic' />
                        </div>
                        <div>
                            <div className='topic'>
                                <p>{company} </p>
                                {neww ? <p className='new'>New!</p> : ""}
                                {featured ? <p className='featured'>featured</p> : ""}
                            </div>
                            <p className='position'>{position}</p>
                            <div className='description'>
                                <p>{postedAt}</p>
                                <FaDotCircle />
                                <p>{contract}</p>
                                <FaDotCircle />
                                <p>{location}</p>
                            </div>
                        </div>

                    </div>

                    <hr />

                    <div className='End'>
                        <p>{role}</p>
                        <p>{level}</p>
                        {languages.map((language, index) => {
                            return (
                                <p key={index}>{language}</p>)
                        })}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card