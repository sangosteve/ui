import Alert from "./components/ui/Alert";
import Badge from "./components/ui/Badge";
import styles from "./page.module.css";
import { Info } from "lucide-react";
import Button from "./components/ui/Button";
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
     {/* <Button modifier={"outline"} variant={"monochrome"}>
      Button 
     </Button> */}
    
   
      <Button intent={"outline"} variant={"error"}>
      Click Me
     </Button> 
     <Alert intent="error" variant="light">
      Messed up did you?
     </Alert>
    </div>
  );
}
