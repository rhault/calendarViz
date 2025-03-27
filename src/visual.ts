"use strict";
import powerbi from "powerbi-visuals-api";

import DataView = powerbi.DataView;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

// Import React dependencies and the added component
import * as React from "react";
import { createRoot, Root } from 'react-dom/client';
import { Calendar } from "./calendar";

import "./../style/visual.less";

export class Visual implements IVisual {
  private target: HTMLElement;
  private reactRoot: React.ReactElement;
  private reactRootContainer: Root;

  constructor(options: VisualConstructorOptions) {
    this.target = options.element;
    this.reactRootContainer = createRoot(this.target);
    this.reactRoot = React.createElement(Calendar, {});

    this.reactRootContainer.render(this.reactRoot)
  }

  public update(options: VisualUpdateOptions) {

  }
}