
const notify = () => toast("🎉 Wow so easy !");

class App extends React.Component {
    render() {
        return (
            <>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />

                <h1>React-Toastify Demo</h1>
                
                <p>
                    <a href="/">🏠 Back to all Examples</a>
                </p>
                <p>
                    <a href="https://fkhadra.github.io/react-toastify/" target="_blank">https://fkhadra.github.io/react-toastify/</a>
                </p>

                <section>
                    <button onClick={notify}>🎉 Notify !</button>
                </section>
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
