import { useEffect } from "react";
import SpecialTitle from "../components/SpecialTitle/SpecialTitle";
import { useForm } from "react-hook-form";
import FormRow from "../components/FormRow/FormRow";

function Contact() {
  useEffect(() => {
    document.title = "contact";
  }, []);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = () => reset();

  return (
    <section className="h-full">
      <div className="container pt-4 pb-12">
        <div className="text-center text-second-color">
          <SpecialTitle color="#2c3e50">Contact Section</SpecialTitle>
        </div>
        <form
          className="lg:w-2/3 md:w-3/4 px-8 mx-auto mt-24 space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormRow error={errors?.userName?.message} label="userName :">
            <input
              type="text"
              name="userName"
              placeholder="userName"
              className="outline-none border-b rounded-lg w-full placeholder:text-black placeholder:opacity-80 px-4 py-3 bg-white z-20 relative"
              autoComplete="off"
              id="userName"
              {...register("userName", {
                required: "This Field Is Required",
                pattern: {
                  message: "Should Contain String",
                  value: /[A-Za-z]/,
                },
              })}
            />
          </FormRow>
          <FormRow error={errors?.userAge?.message} label="userAge :">
            <input
              type="number"
              name="userAge"
              placeholder="userAge"
              className="outline-none border-b rounded-lg w-full placeholder:text-black placeholder:opacity-80 px-4 py-3 bg-white z-20 relative"
              autoComplete="off"
              id="userAge"
              {...register("userAge", {
                required: "This Field Is Required",
                min: {
                  value: 14,
                  message: "min 14 age",
                },
                max: {
                  value: 60,
                  message: "max 60 age",
                },
              })}
            />
          </FormRow>
          <FormRow error={errors?.userEmail?.message} label="userEmail :">
            <input
              type="email"
              name="userEmail"
              placeholder="userEmail"
              className="outline-none border-b rounded-lg w-full placeholder:text-black placeholder:opacity-80 px-4 py-3 bg-white z-20 relative"
              autoComplete="off"
              id="userEmail"
              {...register("userEmail", {
                required: "This Field Is Required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please provide a valid email address",
                },
              })}
            />
          </FormRow>
          <FormRow error={errors?.userPassword?.message} label="userPassword :">
            <input
              type="password"
              name="userPassword"
              placeholder="userPassword"
              className="outline-none border-b rounded-lg w-full placeholder:text-black placeholder:opacity-80 px-4 py-3 bg-white z-20 relative"
              autoComplete="off"
              id="userPassword"
              {...register("userPassword", {
                required: "This Field Is Required",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                  message:
                    "password must contain 1 number (0-9), 1 uppercase letters, 1 lowercase letters, 1 non-alpha numeric number and 8-16 characters with no space",
                },
              })}
            />
          </FormRow>

          <div className="flex items-center gap-3 justify-end mt-6">
            <button
              className="px-6 py-2 rounded-lg border"
              onClick={() => reset()}
            >
              Reset
            </button>
            <button className="bg-main-color px-6 py-2 rounded-lg text-white">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
