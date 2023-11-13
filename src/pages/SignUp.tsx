import UserRegisterForm from "../components/UserRegisterForm";
export default function SignUp() {
  return (
    <div className="flex justify-center md:w-1/2">
      <UserRegisterForm type="paciente" />
    </div>
  );
}
