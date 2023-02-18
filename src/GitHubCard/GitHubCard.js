import React from "react"
import Card from "react-bootstrap/Card"
import profileMin from './profile-min.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        {}
        <Card.Img variant="top" src={`https://github.com/settings/profile`} />
        <Card.Body>
            <Card.Title> Profile </Card.Title>
            <Card.Text>
            I am SDSU's boocampu student, who has a bigger ambition on computer programming.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard