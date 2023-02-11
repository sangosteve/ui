import { Button } from "./components/ui/ButtonTemplate";
import styles from "./page.module.css";
import { Input } from "./components/ui/Input";
import { Menu, MenuButton, MenuItem, MenuItems } from "./components/ui/MenuOld";
export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Input placeholder="Enter email"  label="Email" required />
      
    </div>
  );
}
