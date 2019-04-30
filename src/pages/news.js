import React from "react"
import Link from "gatsby-link"
import { Navbar } from "../components/Navbar";
import "../components/all.scss";

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>
    } else {
        return <span>{props.text}</span>
    }
}

const IndexPage = ({ pageContext }) => {
    const { group, index, first, last, pageCount } = pageContext
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString()

    console.log(group);


    return (
        <div className="Layout">
            <Navbar></Navbar>
            <main>
                <section className="post-list">
                    {group.map(({ node }) => {
                        const isNoticia = node.categories && node.categories.findIndex(c => c.name.toLowerCase() === "noticias") >= 0;

                        return isNoticia && <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                            {node.jetpack_featured_media_url && <img src={node.jetpack_featured_media_url} alt=""></img>}
                            {!node.jetpack_featured_media_url && <span></span>}
                            <Link to={'post/' + node.slug}>
                                <h3>{node.title}</h3>
                            </Link>
                        </div>
                    }
                    )}
                </section>

                <section className="pagination">
                    <div className="link link-previous">
                        <NavLink test={first} url={"posts/" + previousUrl} text="Anterior" />
                    </div>
                    <div className="link link-next">
                        <NavLink test={last} url={"posts/" + nextUrl} text="Siguiente" />
                    </div>
                    <h4>Página {index} de {pageCount}</h4>
                </section>
            </main>
        </div>
    )
}
export default IndexPage