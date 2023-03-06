import Alert from "./components/ui/Alert";
import Badge from "./components/ui/Badge";
import styles from "./page.module.css";
import { Info } from "lucide-react";
import { Button } from "./components/ui/Button";
import Select from "./components/ui/SelectTemplate";
import { Input } from "./components/ui/Input";
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Select />
      <Input placeholder="0.0"/>
    </div>
  );
}
