import { Button } from "./components/ui/ButtonTemplate";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Button modifier="outline" variant="primary">
        Button
      </Button>
      <p className="text-blue-500">text</p>
    </div>
  );
}
