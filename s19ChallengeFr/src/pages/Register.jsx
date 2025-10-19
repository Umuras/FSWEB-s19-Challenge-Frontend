import axios from "axios";
import twitterlogo from "../../public/twittersymbol.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      twitterUserName: "",
      email: "",
      password: "",
      description: "registrationPage",
    },
    mode: "all",
  });

  async function submitForm(formData) {
    try {
      const response = await axios
        .post("http://localhost:3000/workintech/api/v1/auth/register", formData)
        .then((response) => {
          toast.success("Kayıt başarılı!");
          console.log(response);
          console.log("Sisteme kayıt başarılı");
        });
    } catch (error) {
      toast.error("Kayıt başarısız, zaten böyle bir kullanıcı var!");
      console.log(formData);
      console.log(error.message);
    }
  }

  return (
    <section className="bg-gray-800 h-screen w-screen flex flex-col justify-center items-center gap-4">
      <img src={twitterlogo} className="w-20 h-20" />

      <h1 className="text-4xl text-black !font-bold">
        Welcome to twitter registration page
      </h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitForm)}>
        <input
          className="p-2 rounded-md bg-gray-200 font-semibold"
          type="text"
          placeholder="FirstName"
          {...register("firstName", {
            required: "Ad girmelisin",
            minLength: { value: 3, message: "En az 3 karakter olmalı" },
          })}
        />
        {errors.firstName && (
          <p className="text-red-600 font-bold">{errors.firstName.message}</p>
        )}

        <input
          className="p-2 rounded-md bg-gray-200 font-semibold"
          type="text"
          placeholder="LastName"
          {...register("lastName", {
            required: "Soyad girmelisin",
            minLength: { value: 3, message: "En az 3 karakter olmalı" },
          })}
        />
        {errors.lastName && (
          <p className="text-red-600 font-bold">{errors.lastName.message}</p>
        )}

        <input
          className="p-2 rounded-md bg-gray-200 font-semibold"
          type="text"
          placeholder="Username"
          {...register("twitterUserName", {
            required: "Kullanıcı adı girmelisin",
            minLength: { value: 3, message: "En az 3 karakter olmalı" },
          })}
        />
        {errors.twitterUserName && (
          <p className="text-red-600 font-bold">
            {errors.twitterUserName.message}
          </p>
        )}

        <input
          className="p-2 rounded-md bg-gray-200 font-semibold"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Geçerli bir email girmelisin",
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
          className="p-2 rounded-md bg-gray-200 font-semibold"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Şifre girmelisin",
            minLength: { value: 3, message: "En az 3 karakter olmalı" },
          })}
        />
        {errors.password && (
          <p className="text-red-600 font-bold">{errors.password.message}</p>
        )}

        <button
          className="p-2 rounded-2xl bg-blue-400 text-white font-bold cursor:pointer disabled:bg-gray-500 cursor-pointer"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </form>

      <Link className="text-blue-500 font-bold" to="/login">
        If you have an account, click here!
      </Link>
    </section>
  );
}
