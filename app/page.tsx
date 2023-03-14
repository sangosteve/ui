"use client";
import React from "react";
import Grid from "./components/ui/Grid/Grid";
export default function Home() {
  return (
    <div className="w-screen h-screen ">
      <Grid>
        <Grid.Item cols={4} gutter={8}>
          <div className="bg-indigo-500 w-full">cols = 3</div>
        </Grid.Item>
        <Grid.Item cols={8} gutter={8}>
          <div className="bg-green-500 w-full">cols = 8</div>
        </Grid.Item>
      </Grid>
    </div>
  );
}
