import Button from "./components/ui/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Button variant="ghost" intent="primary">
        Button
      </Button>
    </div>
  );
}
