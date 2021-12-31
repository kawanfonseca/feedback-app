import {Link} from 'react-router-dom';
import Card from "../components/shared/Card"

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quis sed quidem in delectus veritatis quos dolore molestias? Doloremque pariatur omnis, sint cumque dolore corporis nulla aperiam rem deleniti iure?</p>
                <p>Version 1.0.0</p>
                <p>
                    <Link to="/">Back to Home</Link>
                </p>
            </div>
        </Card>
        )
}

export default AboutPage
