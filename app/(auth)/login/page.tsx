"use client";
import { anton } from "@/utils/fonts";
import Button from "@/components/Button";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className={`text-3xl text-center mt-7 text-white ${anton.className}`}>
        Sign-in
      </h1>

      <form
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
          id="password"
          name="password"
          type="password"
          placeholder="Password:"
          required
          className="border border-white text-white"
        />

        <Button type="submit" label="Sign-in" />
      </form>
    </div>
  );
}
