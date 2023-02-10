import { Button } from "./components/ui/ButtonTemplate";
import styles from "./page.module.css";
import { Input } from "./components/ui/Input";
export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Input
        label="Email"
        helperText="your details are secure with us"
        placeholder="Enter text here"
      />
    </div>
  );
}
