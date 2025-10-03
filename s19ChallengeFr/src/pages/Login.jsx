import twitterlogo from "../../public/twittersymbol.png";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function Login({ user, setUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      description: "loginPage",
    },
    mode: "all",
  });

  const history = useHistory();

  async function submitForm(formData) {
    try {
      const response = await axios
        .post("http://localhost:3000/workintech/api/v1/auth/login", formData, {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", response.data.token);
          setUser(response.data.userResponse);
          toast.success("Sisteme giriş başarılı!");
          history.push("/mainpage");
        });
    } catch (error) {
      console.log(error.message);
      toast.error("Sisteme giriş başarısız!");
    }
  }

  return (
    <section className="bg-gray-800 w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-6">
        <img
          src="/twittersymbol.png"
          alt="Twitter Logo"
          className="w-20 h-20"
        />
        <h1 className="text-3xl font-bold">Log in to Twitter</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(submitForm)}
        >
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-400 bg-gray-200 rounded-md font-semibold"
            {...register("email", {
              required: "Geçerli email adresi yazmalısınız",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email @ ve . içermeli",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600 font-bold">{errors.email.message}</p>
          )}
          <input
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-400 bg-gray-200 rounded-md font-semibold"
            {...register("password", {
              required: "Şifre girmelisin",
              minLength: { value: 3, message: "En az 3 karakter olmalı" },
            })}
          />
          {errors.password && (
            <p className="text-red-600 font-bold">{errors.password.message}</p>
          )}

          <button
            className="p-2  rounded-2xl bg-blue-400 text-white font-bold cursor-pointer disabled:bg-gray-500"
            type="submit"
            disabled={!isValid}
          >
            Login
          </button>
          <Link className="text-blue-500 font-bold" to="/register">
            If you don't have an account, click here!
          </Link>
        </form>
      </div>
    </section>
  );
}
