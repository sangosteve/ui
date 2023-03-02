import Alert from "./components/ui/Alert";
import Badge from "./components/ui/Badge";
import styles from "./page.module.css";
import { Info } from "lucide-react";
import { Button } from "./components/ui/Button";
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Button className="ml-8 mb-8" intent={"outline"}>
        Click Me
      </Button>
    </div>
  );
}
