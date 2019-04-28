import React, { Component } from "react"
import { Navbar } from "../components/Navbar";
// import PropTypes from "prop-types"
// import Img from "gatsby-image"

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <div className="Layout">
                <Navbar></Navbar>
                <main>
                    <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </main>
            </div>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`