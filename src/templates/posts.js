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

    return (
        <div className="Layout">
            <Navbar></Navbar>
            <main>
                <section className="post-list">
                    {group.map(({ node }) => (
                        <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                            {/* <img></img> */}
                            <span></span>
                            <Link to={'post/' + node.slug}>
                                <h3>{node.title}</h3>
                            </Link>
                            <div className={"post-content"} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                            {node.date}
                        </div>
                    ))}
                </section>

                <h4>{pageCount} Pages</h4>

                <div className="previousLink">
                    <NavLink test={first} url={"posts/" + previousUrl} text="Go to Previous Page" />
                </div>
                <div className="nextLink">
                    <NavLink test={last} url={"posts/" + nextUrl} text="Go to Next Page" />
                </div>
            </main>
        </div>
    )
}
export default IndexPage

// class PostsTemplate extends Component {
//     render() {
//         const data = this.props.data

//         return (
//             <div className="layout">
//                 <Navbar></Navbar>
//                 <h1>Posts</h1>

//                 {data.allWordpressPost.edges.map(({ node }) => (
//                     <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
//                         <Link to={'post/' + node.slug}>
//                             <h3>{node.title}</h3>
//                         </Link>

//                         <div className={"post-content"} dangerouslySetInnerHTML={{ __html: node.excerpt }} />

//                         {node.date}
//                     </div>
//                 ))}

//             </div>
//         )
//     }
// }

// PostsTemplate.propTypes = {
//     data: PropTypes.object.isRequired,
//     edges: PropTypes.array,
// }

// export default PostsTemplate

export const pageQuery = graphql`
    query postsQuery{
        allWordpressPost{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`