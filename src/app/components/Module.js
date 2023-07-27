import { Card } from "antd";
import React from "react";

export default function Module({ name,  content}) {
  return (
    <Card className="menu-card" title={name}>
      
      {content}
    </Card>
  );
}
