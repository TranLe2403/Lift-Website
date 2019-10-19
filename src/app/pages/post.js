import {withRouter} from 'next/router';
import Layout from '../components/myLayout.js';

const Content= withRouter(props => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>This is a blog post content.</p>
    </div>
));

const Page  = props => (
    <Layout>
        <Content/>
    </Layout>
);

export default Page;