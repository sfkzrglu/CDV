import appSettings from "./appSettings";
import ConfigurationScreen from "./Components/Configuration/ConfigurationScreen";
import { useEffect, useState } from "react";
import { useDatabase } from "./Components/Common/DatabaseProvider";
import ShowScreen from "./Components/Show/ShowScreen";
import { Button } from "@chakra-ui/react";
import { useConfiguration } from "./Components/Common/ConfigurationProvider";

function App() {
  const { configuration, setConfiguration } = useConfiguration();
  const { database, setDatabase } = useDatabase();
  const [appScreen, setAppScreen] = useState(0);


  useEffect(() => {
    setConfiguration(Object.assign(configuration, appSettings));
  }, []);


  return (
    <>
      {/*DEBUG */}
      {/* <Button value={appScreen} onClick={() => { appScreen > 0 && setAppScreen(appScreen - 1) }}>Pre</Button>
      <Button value={appScreen} onClick={() => { appScreen < 1 && setAppScreen(appScreen + 1) }}>Next</Button> */}

      {appScreen == 0 &&
        <ConfigurationScreen configuration={configuration} setConfiguration={setConfiguration}
          database={database} setDatabase={setDatabase}
          startTheShow={()=>(setAppScreen(1))} />
      }
      {
        appScreen == 1 &&
        <ShowScreen configuration={configuration} />
      }

    </>
  )
}

export default App
