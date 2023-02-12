import { Input } from "./components/ui/Input";
import{Tab,TabGroup,TabList,TabPanels,TabPanel} from "./components/ui/Tab";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">


     
   
      <TabGroup>
        <TabList>
          <Tab>Recent</Tab>
          <Tab>Popular</Tab>
          <Tab>Trending</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>Recent Content Here</TabPanel>
          <TabPanel>Populr Content Here</TabPanel>
          <TabPanel>Trending Content Here</TabPanel>
        </TabPanels>
      </TabGroup>
 
    </div>
  );
}
