"use client";
import { anton, viga } from "@/utils/fonts";
import { register } from "@/app/actions/register";
import Button from "@/components/Button";

export default function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className={`text-3xl text-center mt-7 text-white ${anton.className}`}>
        Create an Account
      </h1>

      <form
        action={register}
        className="flex flex-col justify-center items-center p-5 gap-7 mt-8"
      >
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email:"
          required
          className="border border-white text-white"
        />

        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username:"
          required
          className="border border-white text-white"
        />

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password:"
          required
          className="border border-white text-white"
        />

        <Button type="submit" label="Sign-up" />
      </form>
    </div>
  );
}
