import DjangoCSRFToken from "django-react-csrftoken";

const SignUp = () => {
    return (
        <div className=" m-6 p-4 border shadow-2xl w-[50rem] content-center ">
            <h1 className=" text-2xl m-4 p-4 font-bold text-center">Create Account</h1>
            <div className="content-center mx-8">
                <form className='form m-3' method="post" action="/login">
                    <DjangoCSRFToken />

                    <div className="m-3 p-3">
                        <label htmlFor="email" className="font-medium  ">First Name : </label>
                        <input type="email" className="border border-solid  p-2 w-[300px] mx-7" id="email" placeholder="John" name="email" aria-describedby="emailHelp" />

                    </div>
                    <div className="m-3 p-3">
                        <label htmlFor="email" className="font-medium  ">Last Name : </label>
                        <input type="email" className="border border-solid  p-2 w-[300px] mx-7" id="email" placeholder="Doe" name="email" aria-describedby="emailHelp" />

                    </div>
                    <div className="m-3 p-3">
                        <label htmlFor="email" className="font-medium  ">Email : </label>
                        <input type="email" className="border border-solid  p-2 w-[300px] mx-16" id="email" placeholder="user@xyz.com" name="email" aria-describedby="emailHelp" />

                    </div>
                    <div className="m-3 p-3">
                        <label htmlFor="password" className="font-medium">Password : </label>
                        <input type="password" className="border border-solid p-2 w-[300px] mx-9" placeholder="password" id="password" name="password" />
                    </div>
                    <div className="m-3 p-3">
                        <label htmlFor="password" className="font-medium">Confirm Password : </label>
                        <input type="password" className="border border-solid p-2 w-[300px] mx-9" placeholder="password" id="password" name="password" />
                    </div>

                    <button type="submit" className="bg-blue-200 w-[600px] font-medium rounded m-2 p-2 border-black hover:bg-blue-400" >Submit</button>

                </form>
            </div>
        </div >
    )
}
export default SignUp;