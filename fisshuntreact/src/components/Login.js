const Login = () => {
    return (
        <div className="border w-[50rem] h-[25rem]">
            <form className='form m-3'>
                <div className="m-3 p-3">
                    <label htmlFor="email" className="font-medium ">Email address : </label>
                    <input type="email" className="border border-solid border-black p-2 rounded-lg" id="email" name="email" aria-describedby="emailHelp" />

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