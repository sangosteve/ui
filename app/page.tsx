"use client";
import React from "react";
import Alert from "./components/ui/Alert";
import Badge from "./components/ui/Badge";
import styles from "./page.module.css";
import { Info } from "lucide-react";
import { Button } from "./components/ui/Button";
import { Select } from "./components/ui/Select";
import Grid from "./components/ui/Grid/Grid";
export default function Home() {
  return (
    <div className="w-screen h-screen ">
      <Grid>
        <Grid.Item cols={3}>
          <div className="bg-indigo-500">cols = 3</div>
        </Grid.Item>
        <Grid.Item cols={7}>
          <div className="bg-green-500">cols = 8</div>
        </Grid.Item>
      </Grid>
    </div>
  );
}
