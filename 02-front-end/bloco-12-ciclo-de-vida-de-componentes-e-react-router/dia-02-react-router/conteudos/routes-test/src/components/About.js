import React from 'react'
import { Link } from 'react-router-dom'

class About extends React.Component {
  render() { 
    return (
      <div>
        <Link to="/">Get back to home</Link>
        <h2>Talking <em>about what this page is about</em></h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam numquam explicabo officia sit ratione ab beatae cumque? Officia recusandae excepturi, iure qui, nam quos repellat quibusdam soluta sint, non rerum.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, laudantium! Assumenda dolore quisquam consectetur in debitis accusamus minus at eveniet dignissimos earum excepturi eum exercitationem amet asperiores, natus cupiditate provident.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aut dolor praesentium ipsum officia iste sequi officiis quo sapiente libero ipsa repellat quos eligendi fugit sit culpa animi molestiae iure.</p>
      </div>
    );
  }
}
 
export default About;
