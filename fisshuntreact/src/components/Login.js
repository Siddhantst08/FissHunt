import DjangoCSRFToken from "django-react-csrftoken";

const Login = () => {
    return (
        <div className="border w-[50rem] h-[25rem]">
            <form className='form m-3' method="post" action="/login">
                <DjangoCSRFToken />
                <div className="m-3 p-3">
                    <label htmlFor="email" className="font-medium ">Username : </label>
                    <input type="text" className="border border-solid border-black p-2 rounded-lg" id="email" name="username" aria-describedby="emailHelp" />

                </div>
                <div className="m-3 p-3">
                    <label htmlFor="password" className="font-medium">Password: </label>
                    <input type="password" className="border border-solid border-black p-2 rounded-lg" id="password" name="password" />
                </div>

                <button type="submit" className="bg-blue-200 font-medium rounded m-2 p-2 border-black" >Submit</button>
            </form>

        </div >
    )
}
export default Login;