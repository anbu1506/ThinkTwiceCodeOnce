export default function RegisterForm() {
    return (
        <div className="w-10/12 h-4/6 md:h-4/6 md:w-96 bg-slate-700 rounded-lg shadow-lg shadow-indigo-500/50">
            <div className="text-white text-xl font-bold py-4 text-center rounded-lg shadow-lg shadow-blue-500/50"><a href="/">Think Twice Code Once</a></div>

            <form action="">
                <div className="flex flex-col ">
                    <div className="self-start  text-xl text-white font-bold mt-[15%] ml-10">user id</div>
                    <input name="userId" placeholder="user@gmail.com" type="email" className=" p-2 w-4/5 rounded mx-auto  outline-none bg-slate-800 text-white mt-6" />
                    <div className="ml-10 text-white text-xl font-bold mt-[10%]">password</div>
                    <input name="password" placeholder="your password here" type="password" className=" p-2 w-4/5 rounded mx-auto  outline-none bg-slate-800 text-white mt-6" />
                    <div className="ml-10 text-white text-xl font-bold mt-[10%]">confirm password</div>
                    <input name="confirmPassword" placeholder="confirm password" type="password" className=" p-2 w-4/5 rounded mx-auto  outline-none bg-slate-800 text-white mt-6" />
                    <button type="submit" className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-2 px-4 rounded-md mx-auto w-4/5 mt-[10%]">Login</button>
                    <p className="mx-auto mt-2">already have an account? <a href="/login">login here</a></p>
                </div>
            </form>
        </div>
    )
}