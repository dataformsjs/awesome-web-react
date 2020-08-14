
const useForm = ReactHookForm.useForm;

// NOTE - examples are based on code from:
//
//   https://react-hook-form.com/
//   https://github.com/react-hook-form/react-hook-form

const ExampleForm = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values);
        alert('Form Submitted!\nSee details in console.');
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Example Form</h2>

        <div>
            <input
              name="email"
              placeholder="email"
              ref={register({
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && errors.email.message && <span className="form-error">{errors.email.message}</span>}
        </div>

        <div>
            <input
              name="username"
              placeholder="user name"
              defaultValue="admin"
              ref={register({
                validate: value => !value.toLowerCase().includes("admin") || "Nice try! Cannot include 'admin'."
              })}
            />
            {errors.username && errors.username.message && <span className="form-error">{errors.username.message}</span>}
        </div>

        <div>
            <input name="firstname" placeholder="First Name" ref={register} />
        </div>

        <div>
            <input name="lastname" placeholder="Last Name" ref={register({ required: true })} />
            {errors.lastname && <span className="form-error">Last name is required.</span>}
        </div>

        <div>
            <input name="age" placeholder="Age" ref={register({ pattern: /^[1-9]{1}[0-9]{0,1}$/ })} defaultValue="abc" />
            {errors.age && <span className="form-error">Please enter number between 1 and 99 for your age.</span>}
        </div>

        <div className="text-center">
            <button type="submit">Submit</button>
        </div>
      </form>
    );
};

class App extends React.Component {
    render() {
        return (
            <>
                <h1>React Hook Form</h1>
                <p>
                    <a href="/">🏠 Back to all Examples</a>
                </p>
                <p>
                    <a href="https://react-hook-form.com/" target="_blank" rel="noopener">https://react-hook-form.com/</a>
                </p>
                <ExampleForm />
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
