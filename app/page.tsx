import Alert from "./components/ui/Alert";
import styles from "./page.module.css";
import { Info } from "lucide-react";
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Alert icon={<Info size={16} />} title="System Error">
        Lorem ipsum dolor sit amet. Et quos itaque cum corrupti ipsam vel earum
        maiores est porro commodi cum nobis veritatis.
      </Alert>
    </div>
  );
}
