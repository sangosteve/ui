import Alert from "./components/ui/Alert";
import styles from "./page.module.css";
import { Info } from "lucide-react";
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Alert
        intent="info"
        variant="outline"
        icon={<Info className="p-0 m-0" size={16} />}
        title="System Error"
      >
        Et quos itaque cum corrupti ipsam vel earum maiores est porro commodi
        cum nobis veritatis.
      </Alert>
    </div>
  );
}
