import Alert from "./components/ui/Alert";
import Badge from "./components/ui/Badge";
import styles from "./page.module.css";
import { Info } from "lucide-react";
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Badge intent={"info"} variant={"filled"}>
        Low
      </Badge>
    </div>
  );
}
