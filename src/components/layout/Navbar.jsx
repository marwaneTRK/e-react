import { Navigate } from "react-router-dom";
import Button from "../ui/Button";

export default function Navbar() {
  const goToLogin = () => {
    Navigate(`/login`);
  };
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow">
      <h1 className="text-xl font-bold">MyShop</h1>
      <ul className="flex items-center gap-4">
        <li>Home</li>
        <li>Products</li>
        <li>
          <Button onClick={goToLogin}>Login</Button>
        </li>
      </ul>
    </nav>
  );
}
