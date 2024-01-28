import DjangoCSRFToken from "django-react-csrftoken";
import { Link } from "react-router-dom"
const Login = () => {
    return (
        <div className=" m-4 p-4 border shadow-2xl w-[50rem] h-[25rem] content-center ">
            <h1 className=" text-2xl m-4 p-4 font-bold text-center">Log In</h1>
            <div className="content-center mx-8">
                <form className='form m-3' method="post" action="/login">
                    <DjangoCSRFToken />
                    <div className="m-3 p-3">
                        <label htmlFor="email" className="font-medium  ">UserName : </label>
                        <input type="email" className="border border-solid  p-2 w-[300px] mx-7" id="email" placeholder="UserName" name="email" aria-describedby="emailHelp" />

                    </div>
                    <div className="m-3 p-3">
                        <label htmlFor="password" className="font-medium">Password : </label>
                        <input type="password" className="border border-solid p-2 w-[300px] mx-9" placeholder="password" id="password" name="password" />
                    </div>

                    <button type="submit" className="bg-blue-200 w-[600px] font-medium rounded m-2 p-2 border-black hover:bg-blue-400" >Log In</button>

                </form>
            </div>
            <div className="mx-8">
                <label className="m-4 ">New to FissHunt ?</label>
                <button className="bg-blue-200 font-medium rounded m-2 p-2 border-black hover:bg-blue-400">
                    <Link to="/SignUp">Create new account</Link></button>
            </div>
        </div >
    )
}
export default Login;