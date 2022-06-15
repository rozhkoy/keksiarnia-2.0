import "./style.scss";
import React from "react";
import { SkeletonItemProps } from "./types";

export const SkeletonItem: React.FC<SkeletonItemProps> = (props) => {
	return (
		<div className={`skeleton-item ${props.type}`}></div>
	);
};