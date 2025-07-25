import type { IShapeData } from './shapes/base';

export interface ShapeStyle {
  fillStyle?: string;
  strokeStyle?: string;
  lineWidth?: number;
  circleRadius?: number;
}

export interface SelectData {
  selectedIndex?: number;
  onSelect?: (index: number) => void;
}

export interface EditorOptions {
  shape?: 'polygon' | 'rectangle' | 'circle';
  subOperator?: boolean;
}

export type Mode = 'edit' | 'select' | 'default';

export interface Options {
  mode?: Mode;
  minPoint?: number;
  maxPoint?: number;
  width?: number;
  height?: number;
  shapeStyle?: ShapeStyle;
  activeShapeStyle?: ShapeStyle;
  editableMaxSize?: number;
  axis?: {
    width: number;
    height: number;
  };
}

export type OperatorOptions = Required<Options> & SelectData & EditorOptions;

export type { IShapeData };
