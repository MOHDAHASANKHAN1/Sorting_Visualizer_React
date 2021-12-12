import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { sortingAlgorithms } from "../common/config";
import { useData } from "../common/store";
import shallow from "zustand/shallow";
import { AiFillGithub } from "react-icons/ai";

import { Bubble } from "./Bubbleinfo";
import { Merge } from "./Mergeinfo";
import { Heap } from "./Heapinfo";
import { Insertion  } from "./Insertioninfo";
import { Selection  } from "./Selectioninfo";
import './Css/Main_bootstrap.css'; 
import { Quick } from "./Quickinfo";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [algorithm, setAlgorithm] = useData(
    (state) => [state.algorithm, state.setAlgorithm],
    shallow
  );
  const [info, setInfo] = useState(0);
  function Render(){
    if (info == 0) {
      return(
        <>
        <Bubble/>
        </>
      );
    } else if(info == 1) {
      return(
        <>
        <Selection/>
        </>
      );
    } else if(info == 2) {
      return(
        <>
        <Insertion/>
        </>
      );
    } else if(info == 3) {
      return(
        <>
        <Heap/>
        </>
      );
    } else if(info == 4) {
      return(
        <>
        <Merge/>
        </>
      );
    } else if(info == 5) {
      return(
        <>
        <Quick/>
        </>
      );
    } else if(info == 6) {
      return(
        <>
        <Bubble/>
        <Selection/>
        <Insertion/>
        <Heap/>
        <Merge/>
        <Quick/>
        </>
      );
    }
  }
  return (
    <>
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Sorting Algorithms Visualizer</h3>
      </div>
      <AppBar position="static" color="default">
        <Tabs
          value={algorithm}
          onChange={(event, id) => {
          setAlgorithm(id);
          setInfo(id);
          }
          }
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {sortingAlgorithms.map((algorithm) => (
            <Tab
              label={algorithm.title}
              {...a11yProps(0)}
              key={algorithm.title}
            />
          ))}
          <Tab label="All" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
    </div>
      <Render/>
    </>
  );
}
