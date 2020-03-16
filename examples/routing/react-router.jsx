
const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;
const NavLink = ReactRouterDOM.NavLink;
const Link = ReactRouterDOM.Link;

function HomePage() {
    return (
        <section>
            <h1>React Router</h1>
            <p>
                <a href="/">🏠 Back to all Examples</a>
            </p>
            <p>
                <a href="https://reacttraining.com/react-router/" target="_blank">https://reacttraining.com/react-router/</a>
            </p>
        </section>
    );
}

function OrderList() {
    const orders = [123, 456, 789];
    return (
        <section>
            <h1>Orders</h1>            
            <ul>
                {orders.map(order => {
                    return <li><Link to={'/order/' + order}>{order}</Link></li>
                })}
            </ul>
        </section>
    );
}

function Order({match}) {
    return (
        <section>
            <h1>Order: {match.params.id}</h1>
        </section>
    )
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <header>
                    <nav>
                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                        <NavLink exact to="/orders" activeClassName="active">Orders</NavLink>
                    </nav>
                </header>

                <main className="container">
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/orders" component={OrderList} />
                    <Route path="/order/:id" component={Order} />
                </main>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
