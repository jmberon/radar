import React, { Component } from "react"
import Link from "gatsby-link"
import { Navbar } from "../components/Navbar";
import "../components/all.scss";

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url} state={{ type: props.type }}>{props.text}</Link>
    } else {
        return <span>{props.text}</span>
    }
}

class PostList extends Component {

    render() {
        const { group, index, first, last, pageCount } = this.props.context
        const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
        const nextUrl = (index + 1).toString()
        console.log("props", this.props);
        console.log("group", group);

        const groupByPostType = group.filter(({ node }) => node.categories && node.categories.findIndex(c => c.name.toLowerCase() === this.props.postType) >= 0);

        return (
            <div className="Layout">
                <Navbar></Navbar>
                <main>
                    <section className="post-list">
                        {groupByPostType.map(({ node }) => {
                            const isType = node.categories && node.categories.findIndex(c => c.name.toLowerCase() === this.props.postType) >= 0;

                            return isType && <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
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
                            <NavLink test={first} url={"posts/" + previousUrl} type={this.props.postType} text="Anterior" />
                        </div>
                        <div className="link link-next">
                            <NavLink test={last} url={"posts/" + nextUrl} type={this.props.postType} text="Siguiente" />
                        </div>
                        <h4>Página {index} de {pageCount}</h4>
                    </section>
                </main>
            </div>
        )
    }

}

const IndexPage = ({ pageContext, location }) => {
    return <PostList context={pageContext} postType={location.state.type}></PostList>
}
export default IndexPage